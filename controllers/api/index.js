const router = require('express').Router();

const userRoutes = require('./users');
const commentsRoutes = require('./comments');
const blogpostRoutes = require('./blogposts');


router.use('/users', userRoutes);
router.use('/comments', commentsRoutes);
router.use('/post', blogpostRoutes);

module.exports = router;