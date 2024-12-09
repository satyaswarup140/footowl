const express = require('express');
const { BorrowRequest, User, Book } = require('../models');
const router = express.Router();

router.get('/borrow-requests', async (req, res) => {
  const requests = await BorrowRequest.findAll({ include: [User, Book] });
  res.json(requests);
});

router.put('/borrow-requests/:id/approve', async (req, res) => {
  const request = await BorrowRequest.findByPk(req.params.id);
  if (!request) return res.status(404).json({ error: 'Request not found' });

  request.status = 'Approved';
  await request.save();
  res.json({ message: 'Request approved', request });
});

module.exports = router;
