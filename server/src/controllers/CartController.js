import cartSchema from "../models/cartSchema.js";

class CartController {
  async getAllCart(req, res) {
    try {
      const data = await cartSchema.find().populate({
        path: "userId",
        select: "address avatar name email role status username",
      });
      if (data) {
        return res.status(201).send({
          message: "GetAll Cart Successfully",
          data,
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  async getCartByUser(req, res) {
    try {
      const data = await cartSchema
        .findOne({ userId: req.params.userId })
        .populate({
          path: "userId",
          select: "address avatar name email role status username ",
        })
        .populate({
          path: "products.productId",
          select: "name price price_discount images",
        })
        .exec();
      if (data) {
        return res.status(201).send({
          message: "GetUser Cart Successfully",
          data,
        });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  async addProductToCart(req, res) {
    const { productId, quantity, userId } = req.body;
    try {
      // Kiểm tra người dùng có giỏ hàng chưa
      let cart = await cartSchema.findOne({ userId: userId });

      if (cart) {
        // Kiểm tra sản phẩm đó có trong giỏ hàng không
        const productIndex = cart.products.findIndex(
          (product) => product.productId.toString() === productId
        );

        if (productIndex > -1) {
          // Nếu có thì cộng thêm số lượng sản phẩm
          cart.products[productIndex].quantity += quantity;
        } else {
          // Nếu không có thì push thêm sản phẩm vào mảng products
          cart.products.push({ productId, quantity });
        }
        await cart.save();
      } else {
        // Nếu người dùng chưa có giỏ hàng thì push thêm vào
        cart = await cartSchema.create({
          userId,
          products: [{ productId, quantity }],
        });
      }

      // Lấy ra thông tin sản phẩm của giỏ hàng
      const listCart = await cartSchema
        .findById(cart._id)
        .populate({
          path: "products.productId",
          select: "name price price_discount images",
        })
        .exec();

      return res.status(200).json({
        message: cart
          ? "Cart updated successfully"
          : "Cart created successfully",
        data: listCart,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  async updateCart(req, res) {
    const { products } = req.body;
    const { cartId } = req.params;
    try {
      // Tìm giỏ hàng theo cartId
      let cart = await cartSchema.findById(cartId);

      if (cart) {
        // Cập nhật giỏ hàng với sản phẩm mới
        cart.products = products.filter((product) => product.quantity > 0);
        await cart.save();
        return res
          .status(200)
          .json({ message: "Cart updated successfully", cart });
      } else {
        return res.status(404).json({ message: "Cart not found" });
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  async deleteProductCart(req, res) {
    try {
      const { userId, idPro } = req.params;
      const cart = await cartSchema.findOne({ userId: userId });
      if (!cart) throw new ApiError(404, "Cart Not Found");

      const newProductCart = cart.products.filter(
        (item) => item.productId != idPro
      );
      const updateCart = await cartSchema.findByIdAndUpdate(
        cart._id,
        { products: newProductCart },
        {
          new: true,
        }
      );
      if (!updateCart) throw new ApiError(404, "Cart Not Found");
      return res.status(201).json({
        message: "Delete Product Cart Successfull",
        data: updateCart,
      });
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}

export default CartController;
