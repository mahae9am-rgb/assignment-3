const {DataTypes}=require('sequelize')
const sequelize = require('./index')
    const user = sequelize.define("User",{
        email:{
            type:DataTypes.STRING,
            validate:{
                isEmail: true
            }
        }
    })
module.exports= user