const mongoose = require("mongoose");

// create hangout schema
const hangoutSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  // for lat long location
  location: {
    type: { lat: Number, lng: Number },
    required: true,
  },
  joining: {
    type: [String],
    required: true,
  },
});

// export the model to be used in the controller
module.exports = mongoose.model("Hangout", hangoutSchema);
