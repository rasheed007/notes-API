const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userModel = new Schema({
    id: ObjectId,
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String },
})


const User = mongoose.model("Users", userModel);

module.exports = User;