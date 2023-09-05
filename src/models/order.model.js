const {Schema, model} = require("mongoose");

const schema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    job_id: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Order", schema);