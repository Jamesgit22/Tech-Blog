const router = require('express').Router();
const { Comment } = require('../../models')
const Auth = require('../../utils/auth')

router.post('/', Auth, async (req, res) => {
    try{
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        })
    } catch (err) {
        console.error('Error in posting new Comment: ' + err)
    }
});

module.exports = router;