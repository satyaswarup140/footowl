# Library Management System

A comprehensive library management system built with Node.js, Express, Sequelize (MySQL), and other modern web technologies. This system allows efficient management of library resources, including user authentication, book management, and administrative features.

## Features

- User Authentication (Sign up, Login, JWT-based session management)
- Admin features to manage users and books
- User features to browse and borrow books
- RESTful APIs built with Express.js
- Database integration with MySQL using Sequelize ORM
- Middleware for logging and error handling

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://dev.mysql.com/downloads/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/satyaswarup140/footowl.git
   cd footowl
2. Install dependencies:
   npm install
3. Set up the environment variables: Create a .env file in the project root and configure the following:
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=localhost
   DB_NAME=library_system
   DB_PORT=3306
4. Set up the database: Ensure MySQL is running and execute the following commands in your MySQL client:
   CREATE DATABASE library_system;
5. Start the server:
   npm start
6. Access the application: Open your browser and navigate to:
   http://localhost:3000
   
## Project Structure:
footowl/
├── models/            # Sequelize models
├── routes/            # Express routes
├── controllers/       # Controllers for handling requests
├── middleware/        # Custom middleware (e.g., authentication)
├── public/            # Static files
├── app.js             # Main application entry point
├── .env               # Environment configuration
├── package.json       # Dependencies and scripts
├── README.md          # Project documentation
└── ...
## Scripts:
. npm start — Starts the server in production mode
. npm run dev — Starts the server with nodemon for development
. npm test — Run tests (if configured)
## API Endpoints:
Authentication
. POST /api/auth/register — Register a new user
. POST /api/auth/login — Log in and get a JWT token

Admin
. GET /api/admin/users — Get all users
. POST /api/admin/books — Add a new book
. DELETE /api/admin/books/:id — Delete a book
User
. GET /api/user/books — Browse available books
. POST /api/user/borrow — Borrow a book
Contribution
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch:
   - git checkout -b feature-name
3. Commit your changes:
   git commit -m "Description of changes"
4. Push to your branch:
   git push origin feature-name
5. Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
