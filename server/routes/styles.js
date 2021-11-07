/*------------------------------------------
// STYLES ROUTING
------------------------------------------*/
const express = require("express");
const router = new express.Router();
const styleModel = require("../model/Style");

router.get("/styles", (req, res) => {
  res.send("@todo");
});

module.exports = router;
