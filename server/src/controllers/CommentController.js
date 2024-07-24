import commentSchema from "../models/commentSchema.js";
import productSchema from "../models/productSchema.js";
import userSchema from "../models/userSchema.js";

class CommentController {
  async getAllComment(req, res) {
    try {
      const data = await commentSchema.find();
      if (data) {
        return res.status(201).send({
          message: "GetAll Comment Successfully",
          data,
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async getCommentById(req, res) {
    try {
      const data = await commentSchema.findById(req.params.id);
      if (data) {
        return res.status(201).send({
          message: "GetCommentById Successfully",
          data,
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async postComment(req, res) {
    try {
      // Thêm Comment
      const data = await commentSchema.create(req.body);
      // Thêm id comment vào conllection products
      const pushProduct = await productSchema.findByIdAndUpdate(
        data.productId,
        {
          $push: { commentId: data._id },
        },
        {
          new: true,
        }
      );
      // Thêm id comment vào conllection users
      const pushUser = await userSchema.findByIdAndUpdate(
        data.userId,
        {
          $push: { commentId: data._id },
        },
        {
          new: true,
        }
      );

      if (!data && !pushProduct && !pushUser) {
        return res.status(400).json({ message: "Add Comment False" });
      }
      return res.status(200).json({
        status: true,
        message: "Add Comment Successfully",
        data,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async updateComment(req, res) {
    try {
      const data = await commentSchema.findByIdAndUpdate(
        `${req.params.id}`,
        req.body,
        {
          new: true,
        }
      );
      if (data) {
        return res.status(200).send({
          status: true,
          message: "Update Comment Successfully",
          data,
        });
      } else {
        return res
          .status(400)
          .send({ status: false, message: "Update Comment False" });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  // Xóa cứng
  async removeCommentById(req, res) {
    try {
      const data = await commentSchema.findByIdAndDelete(req.params.id);
      const commentUser = await userSchema.updateOne(
        { _id: data.userId },
        { $pull: { commentId: data._id } },
        { new: true }
      );
      const commentPro = await productSchema.updateOne(
        { _id: data.productId },
        { $pull: { commentId: data._id } },
        { new: true }
      );
      if (data && commentUser && commentPro) {
        return res.send({
          status: true,
          message: "Remove Comment Successfully",
          data: data,
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  // Xóa mềm Comment trong MongoDB
  async softRemoveCommentById(req, res) {
    try {
      const data = await commentSchema.findByIdAndUpdate(
        `${req.params.id}`,
        req.body.status,
        {
          new: true,
        }
      );
      if (data) {
        return res.status(200).send({
          status: true,
          message: "Soft Remove Comment Successfully",
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}

export default CommentController;
