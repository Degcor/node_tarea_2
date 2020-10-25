const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        surnames: {
            type: String,
            trim: true,
            required: true,
        },
        birthdate: {
            type: Date,
            default: new Date()
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        password: {
            type: String,
            trim: true,
            required: true
        },
        avatar: {
            type: String,
            trim: true,
            default: ''
        },
        banner: {
            type: String,
            trim: true,
            default: ''
        },
        biography: {
            type: String,
            trim: true,
            default: ''
        },
        location: {
            type: String,
            trim: true,
            default: ''
        },
        website: {
            type: String,
            trim: true,
            default: ''
        }
    },
    { timestamps: true }
);

// schemas methods
userSchema.methods = {
    authenticate: function(plainText) {
        return plainText === this.password;
    }
};

module.exports = mongoose.model("User", userSchema);