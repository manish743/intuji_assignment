import { Blog } from "../Schemas/model.js";

export const createBlog = async (req, res) => {
  try {
    let data = req.body;
    let result = await Blog.create(data);

    res.status(201).json({
      success: true,
      message: "Blog created",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const readAllBlogs = async (req, res) => {
  try {
    let result = await Blog.find({});

    res.status(200).json({
      success: true,
      message: "Blog post read successfully",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const readSpecificBlog = async (req, res) => {
  try {
    let blogId = req.params.blogId;
    let result = await Blog.findById(blogId);

    res.status(200).json({
      success: true,
      message: "Specific blog post read successfully",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateBlog = async (req, res) => {
  try {
    let blogId = req.params.blogId;
    let data = req.body;

    let result = await Blog.findByIdAndUpdate(blogId, data, { new: true });

    res.status(201).json({
      success: true,
      message: "Blog post updated successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
