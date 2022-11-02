const database = require('../../database/database')
const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    id: mongoose.ObjectId,
    email: String,
    senha: String,
    created: { type: Date, default: Date.now }
});
module.exports = database.model("Usuario", Schema);
