/*------------------------------------------
// RATES ROUTING
------------------------------------------*/

const express = require("express");
const router = new express.Router();

const models = {
  albums: require("../model/Album"),
  artists: require("../model/Artist")
};


router.get("/rates", (req, res) => {
  res.send("@todo");
});

module.exports = router;
