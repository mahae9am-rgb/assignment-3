
const Post = require('../blog/post.model')
const Comment = require('../comment/comment.model')
const User = require('../user/user.model')

Post.belongsTo(User,{foreignKey:"userid"})
User.hasMany(Post,{foreignKey:'userid'})

Post.hasMany(Comment,{foreignKey:'postid'})
Comment.belongsTo(Post,{foreignKey:'postid'})

Comment.belongsTo(User,{foreignKey:'userid'})
User.hasMany(Comment,{foreignKey:'userid'})
module.exports = {Post,User,Comment}