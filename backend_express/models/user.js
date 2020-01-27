//Dependencies
const mongoose = require('../db/connection.js.js');

//Schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;