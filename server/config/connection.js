const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://matthewpool:HY8awjOaITdAEuRW@cluster0.m22rgvn.mongodb.net/googlebooks');

module.exports = mongoose.connection;
