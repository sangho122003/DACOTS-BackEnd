const router = require('express').Router();
const authCrtl = require('../controller/authCtrl');

router.post('/register', authCrtl.registerUser);
router.post('/login', authCrtl.login);
router.post('/logout', authCrtl.logout);


module.exports = router;
