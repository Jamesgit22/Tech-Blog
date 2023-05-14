const router = require('express').Router();
const { Comment } = require('../../models')
const Auth = require('../../utils/auth');

router.post('/new', Auth, async (req, res) => {
    try {
        const newCommentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        console.log(newCommentData);
        res.status(200);

    } catch (err) {
        res.status(500).json({message: 'Unable to create new comment at endpoint' + err});
    }
})

module.exports = router