const {DataTypes}= require('sequelize')
const sequelize =  require('../common/db/sequelize')


const Comment = sequelize.define ('Comment',{
    id:{
        type:DataTypes.INTEGER,
         primaryKey : true,
         autoIncrement:true
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    postid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"post_Id"
    },
    userid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        field:"user_Id"

    },
},{
tableName:"Comments",
timestamps:true,
createdAt:"created_At",
updatedAt:"updated_At"
}
)
module.exports = Comment