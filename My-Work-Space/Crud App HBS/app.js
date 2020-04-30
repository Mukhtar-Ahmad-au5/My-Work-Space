var express = require("express");
var bodyParser = require("body-parser");
var hbs = require("hbs");
var mongoDB = require("mongodb")
var url = "mongodb://localhost:27017"
var dbNAME = "AttainU"
var DB = ''


var app = express();
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.static('public'))

mongoDB.MongoClient.connect(url, function (err, server) {
    if (err) {
        console.log(err)
    }
    else {
        DB = server.db(dbNAME)
        DB.collection('users').createIndex({ email: 1 }, { unique: true })
        DB.collection('users').createIndex({ username: 1 }, { unique: true })
    }
})

app.get("/", function (req, res) {
    DB.collection("users").find({}).toArray(function (err, result) {
        res.render("home", {
            user: result,
            updated: req.query.updated,
            deleted: req.query.deleted,
            added: req.query.addeduser,
            emailexists: req.query.emailexists,
            usernameexists: req.query.usernameexists
        })
    });

})

app.post("/adduser", function (req, res) {

    DB.collection('users').findOne({ email: req.body.email }, function (err, email) {
        if (email == null) {
            DB.collection('users').findOne({ username: req.body.username }, function (err, username) {
                if (username == null) {
                    var data = {
                        name: req.body.name,
                        username: req.body.username,
                        email: req.body.email
                    }
                    DB.collection("users").insertOne(data, function (err, result) {
                        if (err) {
                            console.log('Cannot add', err)
                        }
                        else {
                            res.redirect('/?addeduser=true')
                        }
                    }
                    )

                }
                else {
                    res.redirect('/?usernameexists=true')
                }
            }
            )

        }
        else {
            res.redirect('/?emailexists=true')
        }
    })
})

app.post('/updateuser', function (req, res) {
    var id = mongoDB.ObjectID(req.body.userupdate)
    var data = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email
    }


    DB.collection("users").updateOne({ _id: id }, { $set: data }, function (err, result) {
        if (err) {
            if (err.errmsg.includes('email_1')) {
                res.redirect('/?emailexists=true')
            }
            else if (err.errmsg.includes('username_1')) {
                res.redirect('/?usernameexists=true')
            }
            else {
                res.redirect('/?error=true')
            }
        }
        else {
            res.redirect('/?updated=true')
        }
    })
})

app.post('/deleteuser', function (req, res) {
    var id = mongoDB.ObjectID(req.body.deleteuser)
    DB.collection("users").removeOne({ _id: id }, function (err, result) {
        if (err) console.log(err)
        else {
            res.redirect('/?deleted=true')
        }
    })
})


app.listen(3700);