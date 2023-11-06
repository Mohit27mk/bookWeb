

const express = require('express');
const mongoose=require('mongoose');

const errorController = require('./controllers/error');
const User=require('./models/user');

const app = express();
require('dotenv').config();

const bookRoutes = require('./routes/book');

app.use(express.json()); // Add JSON body parser middleware
app.use(express.urlencoded({ extended: false })); // Add URL-encoded body parser middleware

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

//connecting databse
mongoose.connect(`mongodb+srv://mohit:${process.env.PASSWORD}@cluster0.wzw3ecy.mongodb.net/book?retryWrites=true&w=majority`)
.then(()=>{
  User.findOne().then(user=>{
    if(!user){//using this user as default 
      const user=new User({
        name:'Mohit',
        email:'example123@gmail.com'
      });
      user.save();
    };
  });
  
app.listen(process.env.PORT);
}).catch(err=>{
  console.log(err);
})

mongoose.connection.on('disconnected', () => {
  // Handle disconnect event, e.g., attempt to reconnect
  mongoose.connect('mongodb://localhost:27017/yourdb');
});