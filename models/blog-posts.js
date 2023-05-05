const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class BlogPosts extends Model {}

BlogPosts.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: "blogPosts",
  }
);

module.exports = BlogPosts;
