import Joi from "joi";
const commentSchemaValid = Joi.object({
  content: Joi.string().required().min(3).max(255),
  rating: Joi.number().required().min(1).max(5),
  userId: Joi.string().required(),
  productId: Joi.string().required(),
});

export default commentSchemaValid;
