const express = require("express");
const router = express.Router();
const indexController = require("./../controllers/index");

router.get("/", (req, res) => {
  indexController.getRequest(req, res);
});




module.exports = router;
