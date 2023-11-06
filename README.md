Book Management System
A simple Book Management System that allows users to perform CRUD operations on books. It uses MongoDB to store book data. You can choose to use MongoDB Atlas or set up a local MongoDB instance on your server or virtual machine.


Features
Create: Users can add a new book with details such as title, author, and summary.
Read: Users can view a list of all books and retrieve details of a specific book by its ID.
Update: Users can update a book's details.
Delete: Users can delete a book.
Getting Started
Follow these steps to set up and run the application locally.

Prerequisites
Node.js: You need Node.js installed on your machine. You can download it from nodejs.org.
MongoDB: Set up a MongoDB instance, either locally or using MongoDB Atlas. Update the MongoDB connection string in the configuration section.
Installation
Clone the repository:


 git clone https://github.com/Mohit27mk/bookWeb.git

Install dependencies:



The application will run at http://localhost:3000.

API Endpoints
The application exposes the following API endpoints:

Create a New Book
Endpoint: POST /books/add-book
Request Body:
json
Copy code
{
  "title": "Book Title",
  "author": "Author Name",
  "summary": "Book Summary",
  "price":"price"
}

Response: The newly created book object.
Get All Books
Endpoint: GET /books/fetch
Response: An array of all books.
Get Book by ID
Endpoint: GET /edit-book/:bookId
Response: Details of the book with the specified ID.
Update a Book
Endpoint: PUT /books/edit-book/:bookId
Request Body:
json
Copy code
{
  "title": "Book Title",
  "author": "Author Name",
  "summary": "Book Summary",
  "price":"price"
}
Response: The updated book object.
Delete a Book
Endpoint: DELETE /books/delete-book/:bookId
Response: A success message indicating the book was deleted.
Decisions and Assumptions
Environment Variables: We use environment variables for configuration to keep sensitive information secure.
Assumption: We assume that users will provide valid data when making requests, and error handling is not extensively covered in this documentation.