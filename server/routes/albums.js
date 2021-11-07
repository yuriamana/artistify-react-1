/*------------------------------------------
// ALBUMS ROUTING
------------------------------------------*/

const express = require("express");
const router = new express.Router();
const albumModel = require("../model/Album");
const uploader = require("./../config/cloudinary");

router.get("/albums", (req, res) => {
  res.send("@todo");
});

module.exports = router;
