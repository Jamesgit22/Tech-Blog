const router = require('express').Router();
const { BlogPost } = require('../../models')
const Auth = require('../../utils/auth')

router.post('/', Auth, async (req, res) => {
    try{
        const newBlogPost = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id,
        })
    } catch (err) {
        console.error('Error in posting new blogpost: ' + err)
    }
})