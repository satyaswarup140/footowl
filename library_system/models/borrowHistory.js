module.exports = (sequelize, DataTypes) => {
    const BorrowHistory = sequelize.define('BorrowHistory', {
      borrowed_on: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      returned_on: { type: DataTypes.DATE, allowNull: true },
    });
    BorrowHistory.associate = (models) => {
      BorrowHistory.belongsTo(models.User);
      BorrowHistory.belongsTo(models.Book);
    };
    return BorrowHistory;
};
  