const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    default:
      "https://res.cloudinary.com/dflvpcsin/image/upload/v1662910341/DefaultProfilePhoto/blank-profile-picture-973460_1280_veumtr.png",
  },
  gender: {
    type: String,
    default: "Prefer not to say",
  },
  following: [{ type: ObjectId, ref: "User" }],
  followers: [{ type: ObjectId, ref: "User" }],
  loggedInActivity: [{ type: String, required: true }],
});

mongoose.model("User", userSchema);
