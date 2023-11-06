
const express = require('express');

const bookController = require('../controllers/book');

const router = express.Router();



//  /admin/products => GET
router.get('/books', bookController.getBooks);

// /admin/add-product => POST
router.post('/add-book', bookController.postAddBook);

router.get('/edit-book/:productId', bookController.getEditBook);

router.post('/edit-book', bookController.postEditBook);

router.post('/delete-book', bookController.postDeleteBook);

module.exports = router;
