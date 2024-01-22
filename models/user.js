const sequelize = require("../config/connection");

const {Model, DataTypes} = require("sequelize");

class User extends Model{

}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        first_name: {
            type: DataTypes.STRING, 
            allowNull: false,
            length: 100,
        
        }, 

        last_name: {
            type: DataTypes.STRING, 
            allowNull: false,
            length: 100,
        
        }, 

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, 
            validate: {
                isEmail: true,
            }
        }

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",


}
);

module.exports = User;