import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js";

const categoryRouter = Router();
const CategoryModel = new CategoryController();

// Lấy tất cả danh mục
categoryRouter.get("/", CategoryModel.getAllCategorys);
// Lấy danh mục theo id
categoryRouter.get("/:id", CategoryModel.getCategoryById);
// Thêm danh mục
categoryRouter.post("/", CategoryModel.postCategory);
// Sửa danh mục
categoryRouter.put("/:id", CategoryModel.updateCategory);
// Sửa status danh mục
categoryRouter.patch("/:id", CategoryModel.updateStatusCategory);
// Xóa mềm danh mục
categoryRouter.delete("/:id", CategoryModel.removeCategoryById);
// Xóa cứng danh mục
categoryRouter.delete("/:id", CategoryModel.softRemoveCategoryById);

export default categoryRouter;
