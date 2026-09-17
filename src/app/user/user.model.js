const {DataTypes}=require('sequelize')
const sequelize = require('../common/db/sequelize');
// define model 
    function checkNameLength(user){
    if(user.name.length<=2){throw new Error('must name longer than 2 chacters')}
    }

const User = sequelize.define('User',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
        , validate:{
        checkPasswordLength(value){
            if(value.length <= 6){
                throw new Error ('must paasword grater than 6 chacters')
            }
        }

        }
    }
},
    {
tableName:"Users",
        
timestamps:true,
        
createdAt:"created_At",
updatedAt:"updated_At"
    });

     User.beforeCreate((user)=>{
        checkNameLength(user)
    })

    module.exports = User;