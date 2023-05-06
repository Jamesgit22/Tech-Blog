const router = require("express").Router();
const { User, BlogPost } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to create new user" });
  }
});

router.post('/login', async (req, res) => {
    try {

        res.status(200).render('login');

        const userData = await User.findOne({ where: { username: req.body.username } });
        const blogPostsData = await BlogPost.findAll();
        const blogPostsObj = blogPostsData.map((data) => data.get({ plain: true }))

        if (!userData) {
            res.status(400).json({message: 'Incorrect username or password, try again.'});
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({message: 'Incorrect username or password, try again.'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).render('homepage', {
              blogPostsObj,
              logged_in: req.session.logged_in 
            })
        });

    } catch (err) {
        res.status(400).json('error');
    }
})

module.exports = router;