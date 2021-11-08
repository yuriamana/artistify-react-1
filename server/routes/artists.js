/*------------------------------------------
// ARTISTS ROUTING
------------------------------------------*/
const express = require("express");
const router = new express.Router();

const artistModel = require("../model/Artist");
const albumModel = require("../model/Album");
const styleModel = require("../model/Style");

router.get("/artists", async (req, res, next) => {
  try {
    const artists = await artistModel.find().populate("style")
    res.status(200).json(artists);
  } catch(e) {
    next(e);
  }
})

//create


// router.get("/artists",  async (req, res, next) => {
//   try {
//     const newArtist = await artistModel.create(req.body);
//     res.status(201).json(newArtist)
//   } catch(e) {
//     next(e)
//   }
//   // res.send("@todo");
// });

router.get("/artists/:id", async (req, res, next) => {
  try {
    const artist = await artistModel.findById(req.params.id);
    res.status(200).json(artist)
  } catch(e) {
    next(e)
  }
})

router.delete("/artists/:id", async (req, res, next) => {
  try {
    const deletedArtist = await artistModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedArtist)
  } catch(e) {
    next(e);
  }
})

module.exports = router;
