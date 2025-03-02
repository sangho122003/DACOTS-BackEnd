const router = require('express').Router();
const likeCtrl = require('../controller/like');

router.post('/getlike', likeCtrl.getLike);
router.post('/addpost', likeCtrl.addLike);
router.post('/deletepost',likeCtrl.DeletePost);

module.exports = router;
