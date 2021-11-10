/*------------------------------------------
// ALBUMS ROUTING
------------------------------------------*/

const express = require("express");
const router = new express.Router();

const albumModel = require("../model/Album");
const uploader = require("./../config/cloudinary");

// router.get("/albums", (req, res) => {
//   res.send("cooucoou");
// });

router.get("/albums", async (req, res, next) => {
  try {
    const albums = await albumModel.find();
    res.status(200).json(albums);
  } catch (err) {
    next(err);
  }
});

router.get("/albums/:id", async (req, res, next) => {
  try {
    const album = await albumModel.findById(req.params.id);
    res.status(200).json(album);
  } catch (err) {
    next(err);
  }
});

router.post("/albums", uploader.single("cover"), async (req, res, next) => {
  try {
    console.log(req.body)
    const newAlbum = await albumModel.create({ ...req.body, cover: req.file.url })
    res.status(201).json(newAlbum);
  } catch (err) {
    next(err);
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    const deletedAlbum = await albumModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedAlbum);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

// /users
// /users    post
//GET / POST/ PATCH / DELETE