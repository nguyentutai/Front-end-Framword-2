import categorySchema from "../models/categorySchema.js";
import productSchema from "../models/productSchema.js";

class ProductController {
  async getAllProduct(req, res) {
    try {
      const data = await productSchema.find({}).populate("categoryId");
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

  async getProductById(req, res) {
    try {
      const data = await productSchema
        .findById(req.params.id)
        .populate("categoryId")
        .populate("commentId");
      if (data) {
        return res.status(201).send({
          message: "GetProductById Successfully",
          data,
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

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

  async updateProduct(req, res) {
    try {
      const data = await productSchema.findByIdAndUpdate(
        `${req.params.id}`,
        req.body,
        {
          new: true,
        }
      );
      const catgoryId = await categorySchema.findByIdAndUpdate(
        data.categoryId,
        {
          $push: { productId: data._id },
        },
        {
          new: true,
        }
      );
      if (data && catgoryId) {
        return res.status(200).send({
          status: true,
          message: "Update Product Successfully",
          data,
        });
      } else {
        return res
          .status(400)
          .send({ status: false, message: "Update Product False" });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async removeProductById(req, res) {
    try {
      // Tìm sản phẩm theo ID
      const data = await productSchema.findByIdAndDelete(req.params.id);

      if (!data) {
        return res.status(404).send({
          status: false,
          message: "Product Not Found",
        });
      }

      const cate = await categorySchema.updateOne(
        { _id: data.categoryId },
        { $pull: { productId: data._id } },
        { new: true }
      );

      if (cate.nModified === 0) {
        return res.status(400).send({
          status: false,
          message: "Failed to Update Category",
        });
      }

      return res.send({
        status: true,
        message: "Remove Product Successfully",
        data: data,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  // Xóa mềm Product trong MongoDB
  async softRemoveProductById(req, res) {
    try {
      const data = await productSchema.findByIdAndUpdate(
        `${req.params.id}`,
        {
          status: true,
          hide: true,
        },
        {
          new: true,
        }
      );
      if (data) {
        return res.status(200).send({
          status: true,
          message: "Soft Remove Product Successfully",
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async searchProduct(req, res) {
    try {
      const keyword = req.query.keyword || "";
      const data = await productSchema.find({
        name: new RegExp(keyword, "i"),
      });
      return res.status(200).json({
        message: "Search Product Successfully",
        data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "searchProduct False",
      });
    }
  }
}

export default ProductController;
