const express = require('express');
const db = require('../models');  // Import Sequelize models
const router = express.Router();

// Route to get all users from the database
router.get('/users', (req, res) => {
  db.User.findAll() // Sequelize method to find all users
    .then(users => {
      res.json(users); // Send the users as a JSON response
    })
    .catch(err => {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Internal Server Error' }); // Handle errors
    });
});

module.exports = router;
