const User = require('./user');
const Comment = require('./comments');
const BlogPost = require('./blog-posts');

User.hasMany(BlogPost);

BlogPost.hasMany(Comment, {
    onDelete: 'CASCADE'
});

Comment.belongsTo(BlogPost);

Comment.belongsTo(User);

module.exports = {User, Comment, BlogPost};
