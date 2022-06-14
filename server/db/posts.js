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

const Model = mongoose.model("post", postSchema);

export default Model;