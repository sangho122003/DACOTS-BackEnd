const router = require('express').Router();
const postCrtl = require('../controller/postCtrl');

router.post('/getpost', postCrtl.getPost);
router.post('/addpost', postCrtl.addPost);
router.post('/updatapost', postCrtl.updataPost);
router.post('/deletepost',postCrtl.deletePost);

module.exports = router;
