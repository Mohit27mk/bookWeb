const Book = require("../models/book");


exports.postAddBook = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const Book = new Book({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user,
  });
  Book
    .save()
    .then((result) => {
      res.redirect("/admin/Books");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditBook = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.BookId;
  req.user;
  Book.findById(prodId)
    .then((Book) => {
      if (!Book) {
        return res.redirect("/");
      }
      res.render("admin/edit-Book", {
        pageTitle: "Edit Book",
        path: "/admin/edit-Book",
        editing: editMode,
        Book: Book,
      });
    })
    .catch((err) => console.log(err));
};

exports.postEditBook = (req, res, next) => {
  const prodId = req.body.BookId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  Book.findById(prodId)
    .then((Book) => {
      Book.title = updatedTitle;
      Book.price = updatedPrice;
      Book.description = updatedDesc;
      Book.imageUrl = updatedImageUrl;
      return Book.save();
    })
    .then((result) => {
      // console.log('UPDATED Book!');
      res.redirect("/admin/Books");
    })
    .catch((err) => console.log(err));
};

exports.getBooks = (req, res, next) => {
  Book.find()
  // .populate('userId')
    .then((Books) => {
      res.render("admin/Books", {
        prods: Books,
        pageTitle: "Admin Books",
        path: "/admin/Books",
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteBook = (req, res, next) => {
  const prodId = req.body.BookId;
  Book.findByIdAndRemove(prodId)
    .then(() => {
      console.log("DESTROYED Book");
      res.redirect("/admin/Books");
    })
    .catch((err) => console.log(err));
};
