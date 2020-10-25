const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");

const {
    listRelations,
    create,
    remove
} = require("../controllers/relation");

// routes
router.get("/relation", listRelations);
router.post("/relation/create/:userRelationId", create);
router.delete("/relation/:userRelationId", remove);

// params
router.param("userRelationId", userById);

module.exports = router;