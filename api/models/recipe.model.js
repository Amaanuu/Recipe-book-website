import mongoose from "mongoose";


const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
 
    categories: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
