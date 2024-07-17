import { Router } from "express";
import ProductController from "../controllers/ProductController.js";

const productRouter = Router();
const ProductModel = new ProductController();

// Lấy tất cả sản phẩm
productRouter.get("/", ProductModel.getAllProduct);
// Lấy sản phẩm theo id
productRouter.get("/:id", ProductModel.getProductById);
// Thêm sản phẩm
productRouter.post("/", ProductModel.postProduct);
// Sửa sản phẩm
productRouter.put("/:id", ProductModel.updateProduct);
// Xóa mềm sản phẩm
productRouter.delete("/:id", ProductModel.removeProductById);
// Xóa cứng sản phẩm
productRouter.delete("/:id", ProductModel.softRemoveProductById);
// Tìm kiếm sản phẩm theo tên
productRouter.get("/search", ProductModel.searchProduct);
// Đường dẫn
// http://localhost:3000/api/product//search?keyword="${keyword}"

export default productRouter;
