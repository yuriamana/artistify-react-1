/*------------------------------------------
// STYLES ROUTING
------------------------------------------*/
const express = require("express");
const router = new express.Router();
const styleModel = require("../model/Style");

// READ

router.get("/styles", async (req, res, next) => {
  try {
    const styles = await styleModel.find()
    res.status(200).json(styles);
  } catch(e) {
    next(e);
  }
})

router.get("/styles/:id", async (req, res, next) => {
  try {
    const style = await styleModel.findById(req.params.id);
    res.status(200).json(style)
  } catch(e) {
    next(e)
  }
})

// DELETE

router.delete("/styles/:id", async (req, res, next) => {
  try {
    const deletedStyles = await styleModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedStyles);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
