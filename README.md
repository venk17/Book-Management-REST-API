# Book Management REST API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![Jest](https://img.shields.io/badge/Jest-29.x-red)

A robust Node.js REST API for managing book collections with full CRUD operations and CSV bulk import functionality.

## Features

- **Complete CRUD Operations**
  - Create, read, update, and delete books
  - Get all books or individual book details
- **Bulk Import**
  - Import multiple books via CSV upload
  - Automatic validation of CSV data
  - Detailed error reporting for invalid rows
- **Enhanced Functionality**
  - Request logging with Morgan
  - Centralized error handling
  - Input validation middleware
  - Unit tests with Jest
- **Modern Architecture**
  - MVC-like structure
  - Environment configuration
  - Proper separation of concerns


  book-management-api/
├── config/          # Configuration files
├── controllers/     # Route controllers
├── middleware/      # Express middleware
├── models/          # Data models
├── routes/          # Route definitions
├── services/        # Business logic
├── tests/           # Test files
├── uploads/         # Temporary file uploads
├── app.js           # Main application file
├── package.json     # Dependencies and scripts
└── README.md        # This documentation

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Setup Instructions](#setup-instructions)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Configuration](#configuration)
3. [API Documentation](#api-documentation)
4. [Example Requests](#example-requests)
5. [Testing](#testing)
6. [Project Structure](#project-structure)
7. [Deployment](#deployment)
8. [Contributing](#contributing)

## Technologies Used

- **Runtime**: Node.js (v18+ recommended)
- **Framework**: Express.js
- **File Uploads**: Multer
- **ID Generation**: UUID
- **Logging**: Morgan
- **Testing**: Jest + Supertest
- **Validation**: Custom implementation

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git (for version control)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/book-management-api.git
cd book-management-api