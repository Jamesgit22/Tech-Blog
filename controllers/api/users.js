const router = require("express").Router();
const { User, BlogPost, Comment} = require("../../models");
const Auth = require('../../utils/auth.js')

// Create new user
router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Unable to create new user on server side:" + err });
  }
});

router.post("/signin", Auth, async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res.status(400).json({message: 'Incorrect username or password'});
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({message: 'Incorrect username or password'});
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id,
      req.session.logged_in = true,

      res.json({ user: userData, message: 'You are now logged in.'});
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/inscreen", async (req, res) => {
  try {
    const postData = await BlogPost.findAll();
    const postDataObj = postData.map((data) => data.get({ plain: true }));
    res.render("loggedin", {postDataObj});
  } catch (err) {
    res.json({
      message: "Unable to load logged in screen on server side." + err,
    });
  }
});

router.get("/dashboard", Auth, async (req, res) => {
    try {
      const userPosts = await BlogPost.findAll({
        where: {
          user_id: req.session.user_id,
        },
        attributes: ['id', 'title', 'created_at', 'content'],
        include: [
          // {
          //   model: Comment,
          //   attributes: ['id', 'title', 'body', 'user_id', 'created_at'],
          //   include: {
          //     model: User,
          //     attributes: ['username'],
          //   },
          // },
          {
            model: User,
            attributes: ['username'],
          },
        ],
      })
      const posts = userPosts.map(data => data.get({plain: true}));
      res.render('dashboard', {posts});
    } catch (err) {
        res.status(400).json({message: 'Unable to load dashboard' + err})
    }
});

module.exports = router;
// t3stP@ass
