const {Schema, model} = require("mongoose");

const schema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);