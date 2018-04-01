// Require Router
const express = require("express");

const router = express.Router();
const path = process.cwd();

// Root route
router.route("/").get((req, res) => {
  res.sendFile(`${path}/public/index.html`);
});

// HTTP request for undescribed URL
router
  .route("*")
  .get((req, res) => {
    res.sendFile(`${path}/app/public/notfound.html`);
  })
  .post((req, res) => {
    res.sendFile(`${path}/app/public/notfound.html`);
  })
  .put((req, res) => {
    res.sendFile(`${path}/app/public/notfound.html`);
  })
  .delete((req, res) => {
    res.sendFile(`${path}/app/public/notfound.html`);
  });

module.exports = router;
