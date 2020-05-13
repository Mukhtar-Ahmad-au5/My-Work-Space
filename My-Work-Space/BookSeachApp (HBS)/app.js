var express = require("express");
var bodyParser = require("body-parser");
var hbs = require("hbs");
var async = require("async")
var session = require("express-session");

var app = express();
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static("public"))
var fs = require("fs")


app.use(session({
    secret: "qwertyuiopasdfghjkl",
    cookie: {
        maxAge: 1000 * 50,
        path: "/",
        httpOnly: true
    }
}))
var data
fs.readFile("./public/books/books.json",function(err, para){
   data = JSON.parse(para)

var userArr = [{
     name: "Mukhtar",
    password: "1234567890"
},{
    name: "niranjan",
    password: "1234567890"
}]
app.post("/login", function(req, res){
    var count = 0
    for(i=0; i<userArr.length; i++){
       if(userArr[i].name== req.body.name && userArr[i].password== req.body.password){
            count=1
            break
       } 
    }
    if(count==1){
        req.session.user= {
            name: req.body.name
        }
        res.redirect("/books")
    }
    else {
        res.redirect("/")
    }
    
})

app.get("/", function(req, res){
    res.render("loginpage")
})

app.use(function(req, res, next){
    if(req.session.user){
       next(); 
    }
    else{
        res.redirect("/")
    }
})
var data1
app.post("/books", function(req, res){
    data1 = data.filter(function(a){
        return a.language == req.body.language;
    })
    res.redirect("/books")
})

app.get("/books", function(req, res){
    res.render("bookspage",{
        data: data1,
        name: req.session.user.name
    })
    
})


})

app.get("/logout", function(req, res){
    req.session.destroy();
    res.redirect("/")
})

app.listen(8000); 