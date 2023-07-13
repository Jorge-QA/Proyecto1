const mongoose = require("mongoose");
const promptSchema = mongoose.Schema;

const prompt = new promptSchema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  tags: { type: String, required: true }, // plural
  input: { type: String, required: true }, //
  n:{ type: String },   // para la cantidad de imagenes a generar
  size: { type: String }, // para el tamaño de la imagen a generar
  user: {
    type: mongoose.ObjectId,
    ref: "User",required: true
  },
  response:{ type: String } //En caso de haber utilizado el api de openai
});

module.exports = mongoose.model("Prompt", prompt);
