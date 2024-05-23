import { model } from "mongoose";
import blogSchema from "./blogSchema.js";

export const Blog = model("Blog", blogSchema);