import { Router } from "express";
import CategoryController from "../controllers/CategoryController.js";
import validBodyRequest from "../middlewares/vlidateBodyReq.js";
import categorySchemaValid from "../validations/categoryValidate.js";

const categoryRouter = Router();
const CategoryModel = new CategoryController();

// Lấy tất cả danh mục
categoryRouter.get("/", CategoryModel.getAllCategorys);
// Lấy danh mục theo id
categoryRouter.get("/:id", CategoryModel.getCategoryById);
// Sửa status danh mục
categoryRouter.patch("/:id", CategoryModel.updateStatusCategory);
// Xóa cứng danh mục
categoryRouter.delete("/:id", CategoryModel.removeCategoryById);
// Validate
// categoryRouter.use("/", validBodyRequest(categorySchemaValid));
// Thêm danh mục
categoryRouter.post("/", CategoryModel.postCategory);
// Sửa danh mục
categoryRouter.put("/:id", CategoryModel.updateCategory);
// Xóa mềm danh mục
categoryRouter.patch("/:id", CategoryModel.softRemoveCategoryById);

export default categoryRouter;
