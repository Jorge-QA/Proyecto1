const mongoose = require("mongoose");
const promptSchema = mongoose.Schema;

const prompt = new promptSchema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  tags: { type: String, required: true }, // plural
  input: { type: String, required: true }, //
  user: {
    type: mongoose.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Prompt", prompt);
