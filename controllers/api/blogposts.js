const router = require("express").Router();
const { BlogPost } = require("../../models");
const Auth = require("../../utils/auth");

router.post("newpost", async (req, res) => {
  try {
    
    const newPostData = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    console.log(newPostData);
        res.status(200);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Unable to create new post at endpoint" + err });
  }
});


module.exports = router;