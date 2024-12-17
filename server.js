const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const bookSchema = new mongoose.Schema({
    title: String,
    authors: [String],
    description: String,
    image: String,
    link: String,
});
