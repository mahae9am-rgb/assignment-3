const { Model , DataTypes} = require('sequelize')
const  sequelize = require('../common/db/sequelize')
class Post extends Model{}
Post.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"user_Id"
    },
    deletedAt:{
    type:DataTypes.DATE,
    field:"deleted_At"
}
},
{
sequelize,
modelName:'Post',
paranoid:true,
timestamps:true,
createdAt:"created_At",
updatedAt:"updated_At",
deletedAt:"deleted_At"

})
module.exports=Post