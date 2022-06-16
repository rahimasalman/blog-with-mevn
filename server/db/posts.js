import mongoose from "mongoose";
import "mongoose-type-email";

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
   email: {
      type: String,
      unique: true,
      required: true,
   }
});

const Post = mongoose.model("post", postSchema);

export default Post;