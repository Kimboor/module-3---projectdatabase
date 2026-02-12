
// Reservation will always have a start and end date

module.exports = (sequelize, Sequelize) => {
    const Reservation = sequelize.define('Reservation', {
        StartDate: Sequelize.DataTypes.DATE,
        EndDate: Sequelize.DataTypes.DATE,
    },{
        timestamps: false,
        hasTrigger: true
    });
    return Reservation
}