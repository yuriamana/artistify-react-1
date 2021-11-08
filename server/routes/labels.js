/*------------------------------------------
// LABELS ROUTING
------------------------------------------*/

const express = require("express");
const router = new express.Router();
const labelModel = require("../model/Label");
const uploader = require("../config/cloudinary");


router.get("/labels", async (req, res, next) => {
  try {
    const labels = await labelModel.find()
    res.status(200).json(labels);
  } catch(e) {
    next(e);
  }
  });

router.get("/labels/:id", async (req, res, next) => {
  try {
    const label = await labelModel.findById(req.params.id);
    res.status(200).json(label)
  } catch(e) {
    next(e)
  }
})

router.delete("/labels/:id", async (req, res, next) => {
  try {
    const deletedLabel = await labelModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedLabel)
  } catch(e) {
    next(e);
  }
})

module.exports = router;
