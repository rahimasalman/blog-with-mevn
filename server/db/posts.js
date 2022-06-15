import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
   },
   content: {
      type: String,
      required: true,
   },
   creator: {
      type: String,
      required: true,
   },
});

const Post = mongoose.model("post", postSchema);

export default Post;