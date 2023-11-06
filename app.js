const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

const errorController = require('./controllers/error');
const User=require('./models/user');

const app = express();



const bookRoutes = require('./routes/book');

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  User.findById("6548e2e6f85f6c8bb9066fab")
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));

});

app.use('/books', bookRoutes);


app.use(errorController.get404);


mongoose.connect('mongodb+srv://mohit:27mk2002@cluster0.wzw3ecy.mongodb.net/book?retryWrites=true&w=majority')
.then(()=>{
  User.findOne().then(user=>{
    if(!user){
      const user=new User({
        name:'Mohit',
        email:'example123@gmail.com'
      });
      user.save();
    };
  });
  
app.listen(3000);
}).catch(err=>{
  console.log(err);
})