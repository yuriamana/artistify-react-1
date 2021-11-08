/*------------------------------------------
// ARTISTS ROUTING
------------------------------------------*/
const express = require("express");
const router = new express.Router();

const artistModel = require("../model/Artist");
const albumModel = require("../model/Album");

router.get("/artists", async (req, res, next) => {
  try {
    const artists = await artistModel.find()
    res.status(200).json(artists);
  } catch(e) {
    next(e);
  }
})
router.get("/artists",  async (req, res, next) => {
  try {
    const newArtist = await artistModel.create(req.body);
    res.status(201).json(newArtist)
  } catch(e) {
    next(e)
  }
  // res.send("@todo");
});

router.get("/:id", async (req, res, next) => {
  try {
    const artist = await artistModel.findById(req.params.id);
    res.status(200).json(artist)
  } catch(e) {
    next(e)
  }
})

module.exports = router;
