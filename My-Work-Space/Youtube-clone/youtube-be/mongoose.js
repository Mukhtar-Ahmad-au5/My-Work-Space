const mongoose = require("mongoose");
const config = require("config");

const db = config.get('mongoURI')

mongoose.connect(db , {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(res => {
    console.log("succesfully connected mongoose")
})
.catch(err => {console.log("error didn't connect to mongoose", err)})