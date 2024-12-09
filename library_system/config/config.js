require('dotenv').config();

console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

module.exports = {
    development: {
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '********',
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'mysql',
    },
    test: {
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '*******',
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'mysql',
    },
    production: {
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '*******',        
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      dialect: 'mysql',
    },
};
