require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://Dexter_Ladines:1234@cluster0.xggl7.mongodb.net/BookDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('Connected to Database'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})