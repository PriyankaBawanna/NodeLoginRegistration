import mongoose from "mongoose";
const UserDetails = mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },

  Role: {
    type: String,
    required: true,
  },

  Password: { type: String, required: true },
});
const UserDetail = mongoose.model("UserDetails", UserDetails);
export default UserDetail;
