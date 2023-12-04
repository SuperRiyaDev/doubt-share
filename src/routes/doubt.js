const { Router } = require("express");
const { getDoubtHistory } = require("../controllers/doubt");
const { userAuth } = require("../middlewares/auth-middleware");
const router = Router();

router.get("/doubt-history", userAuth, getDoubtHistory);

module.exports = router;
