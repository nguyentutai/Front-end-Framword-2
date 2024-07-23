import { Router } from "express";
import CommentController from "../controllers/CommentController.js";
import validBodyRequest from "../middlewares/vlidateBodyReq.js";
import commentSchemaValid from "../validations/commentValidate.js";

const commentRouter = Router();
const CommentModel = new CommentController();

// Lấy tất cả voucher
commentRouter.get("/", CommentModel.getAllComment);
// Lấy voucher theo id
commentRouter.get("/:id", CommentModel.getCommentById);
// Xóa cứng voucher
commentRouter.delete("/:id", CommentModel.removeCommentById);
// Validate
commentRouter.use("/", validBodyRequest(commentSchemaValid));
// Thêm voucher
commentRouter.post("/", CommentModel.postComment);
// Sửa voucher
commentRouter.put("/:id", CommentModel.updateComment);
// Xóa mềm voucher
commentRouter.patch("/:id", CommentModel.softRemoveCommentById);

export default commentRouter;
