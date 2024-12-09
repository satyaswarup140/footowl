module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      // Define the columns for the 'User' model
      name: {
        type: DataTypes.STRING,
        allowNull: false, // This field cannot be null
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensures that email addresses are unique in the database
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false, // Password must not be null
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: 'user', // Default role is 'user'
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Automatically set to the current date and time
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Automatically set to the current date and time
      },
    });
  
    // Add any associations (if necessary)
    // For example, if the User model has a relationship with another model, like 'Book':
    // User.hasMany(Book); // A user can have many books, if the 'Book' model exists.
  
    return User;
};
 