
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  const PayrollDetails = sequelize.define('payroll_detail', {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    payroll_id: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    },
    rut: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: Sequelize.DataTypes.STRING(64),
      allowNull: false
    },
    date: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: false
    },
    amount: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    },
    account: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false
    },
    bank: {
      type: Sequelize.DataTypes.STRING(64),
      allowNull: false
    },
    status: {
      type: Sequelize.DataTypes.STRING(64),
      allowNull: false
    },
    refund_date: {
      type: Sequelize.DataTypes.DATEONLY,
      allowNull: true
    },
  }, {
      timestamps: false,
      freezeTableName: true,
      tableName: 'payroll_details'
    });

  PayrollDetails.associate = (models) => {
    PayrollDetails.belongsTo(models.Payroll, {
      foreignKey: 'payroll_id',
      constraints: false,
      as: 'image'
    });
  };

  return PayrollDetails;
};
