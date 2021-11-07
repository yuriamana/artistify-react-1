/*------------------------------------------
// LABELS ROUTING
------------------------------------------*/

const express = require("express");
const router = new express.Router();
const labelModel = require("../model/Label");
const uploader = require("../config/cloudinary");


router.get("/labels", (req, res) => {
    res.send("@todo");
  });

module.exports = router;
