import blogShema from "../models/blogShema.js";
import userSchema from "../models/userSchema.js";

class BlogsController{
    async listAllBlogs(req,res){
        try {
            const data=await blogShema.find({}).populate('userId','_id username email').sort({createAt:-1})
            if (data) {
                return res.status(200).send({
                    message:"Hiển thị danh sách bài viết thành công!",
                    data
                })
            }
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
    async detailBlog(req,res){
        try {
            const data=await blogShema.findById(req.params.id).populate('userId')
            if (data) {
                return res.status(200).send({
                    message:"Hiển thị chi tiết bài viết thành công!",
                    data
                })
            }
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
    async addBlog(req,res){
        try {
            const checkSlug = await blogShema.findOne({ slug: req.body.slug });
            if (checkSlug) {
              return res.status(400).send({
                message: "Tiêu đề này đã tồn tại !",
              });
            }
            const data=await blogShema.create(req.body)
            const dataUser=await userSchema.findByIdAndUpdate(data.userId,{
                $push:{
                    blogId:data._id
                }
            },{new:true})
            if (data && dataUser) {
                return res.status(201).send({
                    message:"Thêm bài viết thành công!",
                    data
                })
            }
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
    async updateBlog(req,res){
        try {
            const data=await blogShema.findByIdAndUpdate(req.params.id,req.body,{new:true})
            if (data) {
                return res.status(200).send({
                    message:"Update bài viết thành công!",
                    data
                })
            }
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
    async updateStatusBlog(req,res){
        try {
            const {status}=req.body
            const data=await blogShema.findByIdAndUpdate(req.params.id,{status},{new:true})
            if (data) {
                return res.status(200).send({
                    message:"Update trạng thái bài viết thành công!",
                    data
                })
            }
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
    async deleteBlog(req,res){
        try {
            const data=await blogShema.findByIdAndDelete(req.params.id)

            const dataUser=await userSchema.findByIdAndUpdate(data.userId,{
                $pull:{
                    blogId:data._id
                }
            })
            if (data && dataUser) {
                return res.status(200).send({
                    message:"Xóa bài viết thành công!",
                    data
                })
            }
        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
} 
export default BlogsController