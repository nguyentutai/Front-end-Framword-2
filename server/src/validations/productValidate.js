import Joi from "joi";
const productSchemaValid = Joi.object({
  name: Joi.string().required().min(3).max(255),
  slug: Joi.string().required().min(3),
  price: Joi.number().required().min(0),
  status: Joi.boolean(),
});

export default productSchemaValid;
