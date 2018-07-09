const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email:  {
        type: String,
        lowercase: true
    },
    role: {
        type: String,
        enum: ['user', 'editor', 'admin'],
        default: 'user'
    },
    password: String
});

module.exports = mongoose.model('User', UserSchema);