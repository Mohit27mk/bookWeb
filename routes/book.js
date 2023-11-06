
const express = require('express');

const bookController = require('../controllers/book');

const router = express.Router();



//  /admin/products => GET
router.get('/fetch', bookController.getBooks);

// /admin/add-product => POST
router.post('/add-book', bookController.postAddBook);

router.get('/edit-book/:bookId', bookController.getEditBook);

router.post('/edit-book/:bookId', bookController.postEditBook);

router.delete('/delete-book/:bookId', bookController.postDeleteBook);

module.exports = router;
