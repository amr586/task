const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/cart', require('./routes/cart'));
app.use('/wishlist', require('./routes/wishlist'));
app.use('/review', require('./routes/review'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));