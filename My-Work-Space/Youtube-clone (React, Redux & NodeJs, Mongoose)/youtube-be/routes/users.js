const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")

const UserSchema = {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}

const User = mongoose.model("user", UserSchema)

const auth = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ msg: 'No token, authorizaton denied' });
    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        const user = await User.findById(decoded.id)
        if (user) {
            req.user = user;
            next();
        }
        else {
            res.status(400).json({ msg: 'Token is not valid' });
        }
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
};

router.post("/", async (req, res, next) => {
    console.log("user route")

    let { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: 'Enter all valid fields' })
    }
    await User.findOne({ email }).then(user => {
        if (!user) return res.status(400).json({ msg: 'User does not exist' })

        bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })

            jwt.sign(
                { id: user.id },
                config.get("jwtSecret"),
                { expiresIn: 1800 },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    })
                }
            )
        })
    })

    // }
    // catch (err) {
    //     console.log("error in login", err)
    //     res.status(400).send(err)
    // }
})

router.post("/signup", async (req, res, next) => {
    console.log(req.body)

    let { name, email, password } = req.body.user;
    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Enter all valid fields' })
    }
    await User.findOne({ email }).then(user => {
        if (user) return res.status(400).json({ msg: 'User already exists' })
    })
    let newUser = await User.create({ name, email, password })
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {

                jwt.sign(
                    { id: user.id },
                    config.get("jwtSecret"),
                    { expiresIn: 1800 },
                    (err, token) => {
                        if (err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        })
                    }
                )
            })
        })
    })
    // }
    // catch (err) {
    //     console.log("error in sign up", err)
    //     res.status(400).send(err)
    // }
})

router.get('/user', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) throw Error('User Does not exist');
        res.json(user);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

module.exports = router