const express = require("express");
const router = express.Router();

const {
    fileAvatarUpload,
    fileBannerUpload,
    fileAvatar,
    fileBanner
} = require("../controllers/file");

// routes
router.post("/file/avatar/upload", fileAvatarUpload);
router.post("/file/banner/upload", fileBannerUpload);
router.get("/file/avatar", fileAvatar);
router.get("/file/banner", fileBanner);



module.exports = router;