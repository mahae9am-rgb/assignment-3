const {Sequelize}=require('sequelize')
const sequelize = new Sequelize(
    "app_blog_orm",
    "postgres"
    ,"123456",
    {
host:"localhost",
port:5432,
dialect:"postgres"
    }
)
module.exports= sequelize