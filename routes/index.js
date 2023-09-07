const express = require("express");
const router = express.Router();
const IndexController = require("./../controllers/index");

router.get("/", (req, res) => {
  IndexController.getRequest(req, res);
});


module.exports = router;
