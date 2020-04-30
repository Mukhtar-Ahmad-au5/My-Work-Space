const express = require("express");
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const playedHistorySchema = {
  title: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  videoId: {
    type: String,
    required: true
  },
}
const PlayedHistory = mongoose.model("playedHistory", playedHistorySchema);

router.get("/", async (req, res, next) => {
  try {
    let playedVideos = await PlayedHistory.find();
    res.json({
      status: true,
      data: playedVideos
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
})

router.post("/", async (req, res, next) => {
  try {
    let { video: { title, img, videoId } } = req.body;
    let playedVideo = await PlayedHistory.create({ title, img, videoId });
    res.json({
      status: true,
      data: playedVideo
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/all", async (req, res, next) => {
  try {
    await PlayedHistory.deleteMany();
    res.json({
      status: true,
      message: "Deleted all successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    await PlayedHistory.deleteOne({ _id: ObjectID(id) });
    res.json({
      status: true,
      message: "Successfully deleted"
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;