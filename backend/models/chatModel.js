const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChatSchema = new Schema ({
    users : [String],
    messages: [{
        _id: false,
        user: String,
        message: String
    }]
});

module.exports = mongoose.model('Chat', ChatSchema);
