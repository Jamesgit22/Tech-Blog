const User = require('./user');
const Comment = require('./comments');
const BlogPosts = require('./blog-posts');

User.hasMany(BlogPosts);

BlogPosts.hasMany(Comment, {
    onDelete: 'CASCADE'
});

Comment.belongsTo(BlogPosts);

Comment.belongsTo(User);

module.exports = {User, Comment, BlogPosts};