const express = require("express");
const router = express.Router();
const appController = require("../controllers/controllers");

router.get("/", appController.welcomePage);
router.post("/test", appController.postUpdateData);

module.exports = router;
