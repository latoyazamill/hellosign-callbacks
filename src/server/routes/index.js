const router = require("express").Router()
const multer = require('multer');
const upload = multer();

const signers = require("../../models/db/signers");
const config = require("../../../config.js");
const callbacks = require("../callbacks.js");

const hellosign = require('hellosign-sdk')({
  key: config.APIKEY
});

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/nonembedded", (req, res) => {
  res.render("nonembedded");
});

router.post('/nonembedded/response', (req, res) => {
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
        res.status(200).json(response)
      })
      .catch(function(error) {
        console.log(error);
        res.status(404).end();
      });
  router.post('/nonembedded/response/callbacks', upload.array(), callbacks);
  // signers.nonEmbeddedInfo(req.body)
  //   .then(user => {
  //     if (user)
  //       return res.redirect("/");
  //   })
  //   .catch(error => next(error));
});

// router.post('/nonembedded/response/callbacks', upload.array(), callbacks);

module.exports = router;
