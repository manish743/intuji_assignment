import { Router } from "express";
import { Blog } from "../Schemas/model.js";
import { createBlog, readAllBlogs, readSpecificBlog, updateBlog } from "../Controllers/blogController.js";

const blogRouter = Router();

blogRouter
.route("/")
.post(createBlog)
.get(readAllBlogs)

blogRouter
.route("/:blogId")
.get(readSpecificBlog)
.patch(updateBlog)

export default blogRouter;