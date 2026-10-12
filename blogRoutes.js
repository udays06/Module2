const express = require("express");
const Blog = require("../models/Blog");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required"
      });
    }

    const blog = await Blog.create({
      title,
      content,
      author: req.user.id
    });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create blog",
      error: error.message
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: blogs.length,
      blogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch blogs",
      error: error.message
    });
  }
});

module.exports = router;
