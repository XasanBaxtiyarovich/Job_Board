const router = require("express").Router();
const { authRegister, authLogin } = require("../controllers/auth.controller");

router.post("/login", authLogin);
router.post("/register", authRegister);

module.exports = router;