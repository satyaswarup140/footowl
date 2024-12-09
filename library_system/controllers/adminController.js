const db = require('../models');
const { BorrowRequest, User, Book, BorrowHistory } = db;

// Approve a borrow request
exports.approveBorrowRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const borrowRequest = await BorrowRequest.findByPk(id);

    if (!borrowRequest) {
      return res.status(404).json({ message: 'Borrow request not found.' });
    }

    if (borrowRequest.status !== 'Pending') {
      return res.status(400).json({ message: 'Request already processed.' });
    }

    const book = await Book.findByPk(borrowRequest.bookId);

    if (book.quantity < 1) {
      return res.status(400).json({ message: 'No available copies of this book.' });
    }

    await borrowRequest.update({ status: 'Approved' });
    await book.update({ quantity: book.quantity - 1 });

    res.status(200).json({ message: 'Request approved successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error approving request.', error });
  }
};

// Deny a borrow request
exports.denyBorrowRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const borrowRequest = await BorrowRequest.findByPk(id);

    if (!borrowRequest) {
      return res.status(404).json({ message: 'Borrow request not found.' });
    }

    if (borrowRequest.status !== 'Pending') {
      return res.status(400).json({ message: 'Request already processed.' });
    }

    await borrowRequest.update({ status: 'Denied' });

    res.status(200).json({ message: 'Request denied successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error denying request.', error });
  }
};

// View all borrow requests
exports.viewBorrowRequests = async (req, res) => {
  try {
    const requests = await BorrowRequest.findAll({ include: [User, Book] });
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching borrow requests.', error });
  }
};

// View a user’s borrow history
exports.viewUserHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const history = await BorrowHistory.findAll({ where: { userId }, include: [Book] });

    if (!history) {
      return res.status(404).json({ message: 'No history found for this user.' });
    }

    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user history.', error });
  }
};
