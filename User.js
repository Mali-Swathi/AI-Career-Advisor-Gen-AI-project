// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, // Ensures no two users can have the same email
    },
    password: {
        type: String,
        required: true,
    },
    // This will track questions the user has answered to prevent repetition
    answeredQuestions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question' // Reference to a future 'Question' model
    }]
});

// Hash the password before saving the user document
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare entered password with the hashed password in the database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;