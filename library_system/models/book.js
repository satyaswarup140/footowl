module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      title: { type: DataTypes.STRING, allowNull: false },
      author: { type: DataTypes.STRING, allowNull: false },
      quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
    });
    return Book;
};
