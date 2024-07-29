import userSchema from "../models/userSchema.js";

class UserController {
  async getAllUser(req, res) {
    try {
      const data = await userSchema.find().select("-password");
      if (data) {
        return res.status(201).send({
          message: "GetAll Products Successfully",
          data,
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async getUserById(req, res) {
    try {
      const data = await userSchema
        .findById(req.params.id)
        .select("-password")
        .populate("blogId")
        .populate("commentId")
        // .populate("orderId")
        .populate("voucherId");
      if (data) {
        return res.status(201).send({
          message: "GetUserById Successfully",
          data,
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  // Thêm mới người dùng
  async postProduct(req, res) {
    try {
      // Thêm sản phẩm
      const data = await productSchema.create(req.body);
      // lấy ra id sản phẩm thêm vào bảng category
      const catgoryId = await categorySchema.findByIdAndUpdate(
        data.categoryId,
        {
          $push: { productId: data._id },
        },
        {
          new: true,
        }
      );
      if (!data || !catgoryId) {
        return res.status(400).json({ message: "Add Product False" });
      }
      return res.status(200).json({
        status: true,
        message: "Add Product Successfully",
        data,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  // Người dùng cập nhật lại thông tin
  async updateUser(req, res) {
    try {
      const data = await userSchema.findByIdAndUpdate(
        `${req.user._id.toString()}`,
        req.body,
        {
          new: true,
        }
      );

      if (data) {
        return res.status(200).send({
          status: true,
          message: "Update User Successfully",
          data,
        });
      } else {
        return res
          .status(400)
          .send({ status: false, message: "Update User False" });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  //update status user
  async updateStatusUser(req, res) {
    try {
      const { status } = req.body;
      const data = await userSchema.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
      );
      if (data) {
        return res.status(200).send({
          message: "Update status user successfully !",
          data,
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  // async removeProductById(req, res) {
  //   try {
  //     // Tìm sản phẩm theo ID
  //     const data = await productSchema.findByIdAndDelete(req.params.id);

  //     if (!data) {
  //       return res.status(404).send({
  //         status: false,
  //         message: "Product Not Found",
  //       });
  //     }

  //     const cate = await categorySchema.updateOne(
  //       { _id: data.categoryId },
  //       { $pull: { productId: data._id } },
  //       { new: true }
  //     );

  //     if (cate.nModified === 0) {
  //       return res.status(400).send({
  //         status: false,
  //         message: "Failed to Update Category",
  //       });
  //     }

  //     return res.send({
  //       status: true,
  //       message: "Remove Product Successfully",
  //       data: data,
  //     });
  //   } catch (error) {
  //     return res.status(400).send(error.message);
  //   }
  // }

  // // Xóa mềm Product trong MongoDB
  // async softRemoveProductById(req, res) {
  //   try {
  //     const data = await productSchema.findByIdAndUpdate(
  //       `${req.params.id}`,
  //       {
  //         status: true,
  //         hide: true,
  //       },
  //       {
  //         new: true,
  //       }
  //     );
  //     if (data) {
  //       return res.status(200).send({
  //         status: true,
  //         message: "Soft Remove Product Successfully",
  //       });
  //     }
  //   } catch (error) {
  //     return res.status(400).send(error.message);
  //   }
  // }

  // async searchProduct(req, res) {
  //   try {
  //     const keyword = req.query.keyword || "";
  //     const data = await productSchema.find({
  //       name: new RegExp(keyword, "i"),
  //     });
  //     return res.status(200).json({
  //       message: "Search Product Successfully",
  //       data,
  //     });
  //   } catch (error) {
  //     return res.status(500).json({
  //       message: "searchProduct False",
  //     });
  //   }
  // }
}

export default UserController;
