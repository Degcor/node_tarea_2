const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const relationSchema = new mongoose.Schema(
    {
        userId: { type: ObjectId, ref: "User" },
        userRelationId: { type: ObjectId, ref: "User" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Relation", relationSchema);