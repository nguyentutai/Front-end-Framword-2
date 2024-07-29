import express from "express";
import BlogsController from "../controllers/BlogsController.js";

const blogRouter = express.Router();
const BlogControll = new BlogsController();
blogRouter.get("/", BlogControll.listAllBlogs);
blogRouter.get("/:id", BlogControll.detailBlog);
blogRouter.get("/detail/:slug", BlogControll.getBlogSlug);
blogRouter.delete("/:id", BlogControll.deleteBlog);
blogRouter.post("/", BlogControll.addBlog);
blogRouter.put("/:id", BlogControll.updateBlog);
blogRouter.patch("/:id", BlogControll.updateStatusBlog);

export default blogRouter;
