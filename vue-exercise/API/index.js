const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const cors = require('cors');

const contactRouter = require('./routes/contact.route');

require('dotenv').config();

mongoose.connect(`${process.env.MongoURI}${process.env.DB}`).then(()=>{
    console.log('database connected');
}).catch((err)=>{
    console.log(err);
})

app.use(express.json());
app.use(cors());

app.use('/contacts/', contactRouter);

app.listen(`${process.env.Port}`,()=>{
    console.log(`listening to port ${process.env.Port}`)
})