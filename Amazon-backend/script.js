const express=require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


const productsRouter = require('./routes/productsRoutes.js');
const usersRouter = require('./routes/userRoutes.js');
const reviewRouter = require('./routes/reviewRoutes.js');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/products', productsRouter);
app.use('/users', usersRouter);
app.use('/reviews',reviewRouter);

const url ="mongodb+srv://$USERNAME$:$PASSWORD$@cluster0.qdjzjwd.mongodb.net/$DB_NAME$?retryWrites=true&w=majority&appName=Cluster0";

const databaseUsername = 'darrenmanueljames4080';
const databasePassword = 'zJ644eNLDcFpo8Y8';
const databaseName = 'Amazon-backend';

const dbLink =url.replace("$USERNAME$",databaseUsername)
                 .replace("$PASSWORD$",databasePassword)
                 .replace("$DB_NAME$",databaseName);

mongoose.connect(dbLink)
        .then(() => console.log('Database Connected!'));


app.listen(1400,()=> console.log('App Started'));