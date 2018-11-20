module.exports = function (sequelize, DataTypes) {
    const Contact = sequelize.define('Contact', {
        name: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [10]

        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [10]
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [500]
        }
    
    });
    
    return Contact;

};