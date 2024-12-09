module.exports = (sequelize, DataTypes) => {
    const BorrowRequest = sequelize.define('BorrowRequest', {
      start_date: { type: DataTypes.DATE, allowNull: false },
      end_date: { type: DataTypes.DATE, allowNull: false },
      status: { type: DataTypes.STRING, defaultValue: 'Pending' },
    });
    BorrowRequest.associate = (models) => {
      BorrowRequest.belongsTo(models.User);
      BorrowRequest.belongsTo(models.Book);
    };
    return BorrowRequest;
};
  