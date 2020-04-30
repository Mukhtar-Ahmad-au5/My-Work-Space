const express = require("express")
const app = express()
require("./mongoose")
const morgan = require("morgan")
var cors = require('cors');
app.use(cors());
app.use(morgan("dev"))

app.use(express.json())
app.use("/", require("./routes/routes"))

app.listen("3100", ()=>{
    console.log("server started on port 3100")
})