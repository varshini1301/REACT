import mongoose from "mongoose";

const SignUpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: { unique: true },
  },
  email:{
    type:String,
    required:true,
  },
  Password: {
    type: String,
    required: true,
  },
});

export const Sign = mongoose.model("Registration", SignUpSchema);