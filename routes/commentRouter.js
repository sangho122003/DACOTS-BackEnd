const router = require('express').Router();
const commentCrtl = require('../controller/comment');

router.post('/getcomment', commentCrtl.getCommnet);
router.post('/addcomment', commentCrtl.addComment);
router.post('/updatecomment', commentCrtl.updataComment);
router.post('/deletecomment',commentCrtl.deleteComment);

module.exports = router;
