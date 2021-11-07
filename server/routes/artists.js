/*------------------------------------------
// ARTISTS ROUTING
------------------------------------------*/
const express = require("express");
const router = new express.Router();

const artistModel = require("../model/Artist");
const albumModel = require("../model/Album");

router.get("/artists", (req, res) => {
  res.send("@todo");
});

module.exports = router;
