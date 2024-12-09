const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./models'); // Import the db object (which includes sequelize)

// Create the app instance
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));

// Database connection test
db.sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
    // Additional setup or syncing if needed
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err.message);
    process.exit(1); // Exit the application if the connection fails
  });

// Example route setup
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
