const User = require("../models/user");

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User not found"
            });
        }
        req.profile = user;
        next();
    });
};

// middlewares rest
exports.listUsers = (req, res) => {
   
};

exports.listUserProfiles = (req, res) => {
   
};
exports.update = (req, res, next, id) => {
   
};