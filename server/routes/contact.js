/*------------------------------------------
// CONTACT ROUTING
------------------------------------------*/

const express = require("express");
const nodemailer = require("nodemailer");
const router = new express.Router();

router.post("/contact", async (req, res) => {
  console.log(process.env.EMAIL_ADRESS);
  console.log(process.env.EMAIL_PASSWORD);
  res.send("@todo")
});

module.exports = router;
