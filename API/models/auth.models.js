import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  emailId: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: String, required: true },
  active: { type: Boolean, required: true },
});

const auth = mongoose.model("auth", authSchema);

export default auth;
