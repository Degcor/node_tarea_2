const Tweet = require("../models/tweet");

exports.tweetById = (req, res, next, id) => {
    Tweet.findById(id).exec((err, tweet) => {
        if (err || !tweet) {
            return res.status(400).json({
                error: "Tweet not found"
            });
        }
        req.tweet = tweet;
        next();
    });
};

// middlewares rest
exports.listTweets = (req, res) => {
   
};

exports.listTweetFollowers = (req, res) => {
   
};
exports.create = (req, res, next, id) => {
   
};

exports.remove = (req, res, next, id) => {
   
};