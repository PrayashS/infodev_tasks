const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    item: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);