const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'library_system',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '*******',
  {
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
})();
