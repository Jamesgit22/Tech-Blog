const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {

}
Comment.init(
    {
        body: {
            type: DataTypes.TEXT
        }
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'comment'
    }
)

module.exports = Comment;