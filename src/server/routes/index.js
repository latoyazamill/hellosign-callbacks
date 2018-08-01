const router = require("express").Router()
const signers = require("../../models/db/signers");
const config = require("../../../config.js");

const hellosign = require('hellosign-sdk')({
  key: config.APIKEY
});

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/nonembedded", (req, res) => {
  res.render("nonembedded");
});

router.post("/nonembedded", (req, res) => {
  console.log("What is this?", req.body);
  const options = {
    test_mode: req.body.ufTestMode,
    title: req.body.ufTitle,
    subject: req.body.ufSubject,
    message: req.body.ufMessage,
    signers: [{
    email_address: req.body.ufSigner1EmailAddress,
    name: req.body.ufSigner1Name
  }],
    files: [req.body.ufFile1],
    metadata: {
      clientId: config.CLIENTID,
      custom_text: 'NDA #9'
    }
  };
  hellosign.signatureRequest.send(options)
      .then(function(response) {
        console.log("What is the response", response);
      })
      .catch(function(error) {
        console.log(error);
      });
  // signers.nonEmbeddedInfo(req.body)
  //   .then(user => {
  //     if (user)
  //       return res.redirect("/");
  //   })
  //   .catch(error => next(error));
});

module.exports = router;
