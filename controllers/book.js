const Book = require("../models/book");


 exports.postAddBook = async(req, res, next) => {
  const title = req.body.title;
  const summary = req.body.summary;
  const price = req.body.price;
  const author = req.body.author;
  const Books = new Book({
    title: title,
    price: price,
    summary: summary,
    author: author,
    userId: req.user,
  });
  try{ 
    const insertBook = await Books.save(); 
    return res.status(201).json({msg:'Book saved succesfully',data:insertBook});
  }catch(err){
    console.log(err);
   return  res.status(500).json({msg:'Something went wrong'});
  }
};

exports.getEditBook = async(req, res, next) => {
  
  const bookId = req.params.bookId;
  try{ 
    const getBook = await  Book.findById(bookId).exec(); 

    if (!getBook) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    return res.status(200).json({msg:'Book fetched succesfully',data:getBook});
  }catch(err){
    console.log(err);
   return  res.status(500).json({msg:'Something went wrong'});
  }
 
};

exports.postEditBook = async(req, res, next) => {
  const bookId = req.params.bookId;
  const title = req.body.title;
  const summary = req.body.summary;
  const price = req.body.price;
  const author = req.body.author;

  try{  
    const book = await  Book.findById(bookId); 

    if (!book) {
      return res.status(404).json({ msg: 'failed to update booking' });
    }

    console.log(book);
    book.title = title;
    book.summary = summary;
    book.price = price;
    book.author = author;
    const bookUpdate = await book.save();


    return res.status(200).json({msg:'Book updated succesfully',data:bookUpdate});
  }catch(err){
    console.log(err);
   return  res.status(500).json({msg:'Something went wrong'});
  }
};

exports.getBooks = async(req, res, next) => { 
  try{  
   
   const getBooks = await Book.find({ userId: req.user }).exec(); 

    return res.status(200).json({msg:'Book fetched succesfully',data:getBooks});
  }catch(err){
    console.log(err);
   return  res.status(500).json({msg:'Something went wrong'});
  }
};

exports.postDeleteBook = async(req, res, next) => {
  const bookId = req.params.bookId;

  try{  
   
    const deleteBook = await Book.findByIdAndRemove(bookId).exec(); 

    if (!deleteBook) {
      return res.status(404).json({ msg: 'failed to delete booking' });
    }
 
     return res.status(200).json({msg:'Book deleted succesfully',data:deleteBook});
   }catch(err){
     console.log(err);
    return  res.status(500).json({msg:'Something went wrong'});
   }

};
