const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// require('dotenv').config(./);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


// Coonecting to the database
 
const uri = "mongodb+srv://skund:QOqUfbCwQ1SerMoW@cluster0.xqm0i.mongodb.net/mernStack?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}).then(()=> 
{
    console.log("MongoDB database connection is established");
}).catch(err => {
    console.log("error", err);
}); 


// connection.once('open', ()=> 
// {
//     console.log("MongoDB database connection is established");
// }); 

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://skund:QOqUfbCwQ1SerMoW@cluster0.xqm0i.mongodb.net/mernStack?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.once('open', () =>
// {
//     console.log('Connection established');
// })
// client.connect(err => {
//   const collection = client.db("mernStack").collection("test");
//   console.log(collection.find());
//   // perform actions on the collection object
//   client.close();
// });

app.use('/exercises', exerciseRouter);
app.use('/users',usersRouter);

app.listen(port, ()=> 
{
    console.log(`Server is running on port : ${port}`);
}); 