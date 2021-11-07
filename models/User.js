const Sequelize = require('sequelize')
const db = reuqire('../config/db')
const bcrypt = require('bcryptjs')

const User = db.define('user',{
    user_id : {
        type :Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey : true,
        unique:true
    },
    user_name :{
        type : Sequelize.STRING,
        allowNull : false
    },
    user_email :{
        type : Sequelize.STRING,
        allowNull : false,
        unique : true,
        validate:{
            isEmail : true
        }
    },
    user_password:{
        type : Sequelize.STRING,
        allowNull : false,
        set(value) {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(value,salt)
            console.log(hash)
            this.setDataValue('password', hash);
          }
    },
})

module.exports = User;