const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const noteSchema = new Schema({
    id: ObjectId,
    created_at: Date,
    description: { type: String, required: true }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;