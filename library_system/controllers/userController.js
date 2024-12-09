const db = require('../models');
const { Book, BorrowRequest, BorrowHistory } = db;

// Get list of books
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books.', error });
  }
};

// Submit a borrow request
exports.borrowBook = async (req, res) => {
  try {
    const { bookId, startDate, endDate } = req.body;
    const userId = req.user.id; // Assumes `req.user` is set by the authentication middleware

    const book = await Book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    const overlappingRequest = await BorrowRequest.findOne({
      where: {
        bookId,
        status: 'Approved',
        [db.Sequelize.Op.or]: [
          { start_date: { [db.Sequelize.Op.between]: [startDate, endDate] } },
          { end_date: { [db.Sequelize.Op.between]: [startDate, endDate] } },
        ],
      },
    });

    if (overlappingRequest) {
      return res.status(400).json({ message: 'Book is already borrowed during this period.' });
    }

    const request = await BorrowRequest.create({
      userId,
      bookId,
      start_date: startDate,
      end_date: endDate,
      status: 'Pending',
    });

    res.status(201).json({ message: 'Borrow request submitted successfully.', request });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting borrow request.', error });
  }
};

// View personal borrow history
exports.getBorrowHistory = async (req, res) => {
  try {
    const userId = req.user.id;

    const history = await BorrowHistory.findAll({ where: { userId }, include: [Book] });

    if (!history) {
      return res.status(404).json({ message: 'No history found.' });
    }

    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching history.', error });
  }
};
