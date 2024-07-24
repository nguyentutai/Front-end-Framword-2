import { Router } from "express";
import ProductController from "../controllers/ProductController.js";
import validBodyRequest from "../middlewares/vlidateBodyReq.js";
import productSchemaValid from "../validations/productValidate.js";

const productRouter = Router();
const ProductModel = new ProductController();
// http://localhost:3000/api/products/pagination?page=1&limit=5
productRouter.get("/pagination", ProductModel.pageProduct);
// Lấy tất cả sản phẩm
productRouter.get("/", ProductModel.getAllProduct);
// Lấy sản phẩm theo id
productRouter.get("/:id", ProductModel.getProductById);
// Validate
productRouter.use("/", validBodyRequest(productSchemaValid));
// Thêm sản phẩm
productRouter.post("/", ProductModel.postProduct);
// Sửa sản phẩm
productRouter.put("/:id", ProductModel.updateProduct);
//update status sản phẩm
productRouter.patch("/:id", ProductModel.updateStatusProduct);
// Xóa cứng sản phẩm
productRouter.delete("/:id", ProductModel.removeProductById);
// Xóa mềm sản phẩm
productRouter.patch("/:id", ProductModel.softRemoveProductById);
// Tìm kiếm sản phẩm theo tên
productRouter.get("/search", ProductModel.searchProduct);
// Đường dẫn
// http://localhost:3000/api/product//search?keyword="${keyword}"

// Phân trang sản phẩm

export default productRouter;
