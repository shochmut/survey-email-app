const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String
    //add properties for user data schema here
});

mongoose.model('users', userSchema);