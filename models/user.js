// Here the user will be stored with first and last name

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        FirstName: Sequelize.DataTypes.STRING,
        LastName: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });
    
    return User
}