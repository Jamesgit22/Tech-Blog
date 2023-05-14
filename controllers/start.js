const router = require('express').Router();
const { User, BlogPost } = require('../models');
const Auth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const postData = await BlogPost.findAll();
    const postDataObj = postData.map((data) => data.get({plain: true}));
    res.render('loggedout', {postDataObj});
  } catch (err) {
    res.status(500).json({message: 'Error on loading loggedout page: ' + err});
  }
});

module.exports = router;
