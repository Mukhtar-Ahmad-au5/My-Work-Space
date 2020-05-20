const express = require("express")
const router = express.Router()
// const mongoose = require("../mongoose")

router.use("/users", require("./users"))
// router.use("/videos", require("./videos"))

module.exports = router;
