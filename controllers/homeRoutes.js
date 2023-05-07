const router = require('express').Router();
const { User, BlogPost} = require('../models')
// const Auth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
        const blogPostsData = await BlogPost.findAll();
        
        const blogPostsObj = blogPostsData.map((data) => data.get({ plain: true }));

        res.status(200).render('homepage', {
            blogPostsObj,
            logged_in: req.session.logged_in 
        })
} catch (err) {
    if (err) {
        res.status(500);
        console.log('error in loading homepage: ' + err);
    }
}
})

router.get('/login', (req, res) => res.render('login'));

module.exports = router;