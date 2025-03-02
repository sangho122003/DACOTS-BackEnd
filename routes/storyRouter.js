const router = require('express').Router();
const storyCrtl = require('../controller/story');

router.post('/getpost', storyCrtl.getStory);
router.post('/addpost', storyCrtl.addStory);
router.post('/deletepost',storyCrtl.DeleteStory);

module.exports = router;
