const router = require("express").Router()
const signers = require("../../models/db/signers");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/nonembedded", (req, res) => {
  res.render("nonembedded");
});

router.post("/nonembedded", (req, res) => {
  signers.nonEmbeddedInfo(req.body)//this would be the response info
  .then(user => {
    if (user)
      return res.redirect("/");
    }
  )
  .catch(error => next(error));
});

module.exports = router;
