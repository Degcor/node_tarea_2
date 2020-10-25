const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");

const {
    listUsers,
    listUserProfiles,
    update
} = require("../controllers/user");

// routes
router.get("/user/list", listUsers);
router.get("/user/profile/", listUserProfiles);
router.put("/user/:userId", update);

// params
router.param("userId", userById);

module.exports = router;