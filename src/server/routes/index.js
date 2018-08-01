const router = require("express").Router()
const users = require("../../models/db/signers");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/nonembedded", (req, res) => {
  res.render("nonembedded");
});

router.post("/nonembedded", (req, res) => {
  users.create(req.body)//this would be the response info
  .then(user => {
    if (user)
      return res.redirect("/");
    }
  )
  .catch(error => next(error));
});

module.exports = router;
