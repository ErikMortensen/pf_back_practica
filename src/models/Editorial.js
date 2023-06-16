const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("editorial", {
        editorial_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });
};