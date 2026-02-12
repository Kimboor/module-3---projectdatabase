// Here the user will be stored with first and last name

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        FirstName: Sequelize.DataTypes.STRING,
        LastName: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });

    // Associations
    User.associate = function(models) {
        User.belongsToMany(models.Hotel, {through: models.Rate})
        User.belongsToMany(models.Room, {through: models.Reservation})
    };
    return User
}