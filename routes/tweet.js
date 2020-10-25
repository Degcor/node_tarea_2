const express = require("express");
const router = express.Router();
const { tweetById } = require("../controllers/tweet");

const {
    listTweets,
    listTweetFollowers,
    create,
    remove
} = require("../controllers/tweet");
const { tweetCreateValidator } = require("../validator");

// routes
router.get("/tweets", listTweets);
router.get("/tweets/followers/", listTweetFollowers);
router.post("/tweet/create/", tweetCreateValidator, create);
router.delete("/tweet/:tweetId", remove);

// params
router.param("tweetId", tweetById);

module.exports = router;