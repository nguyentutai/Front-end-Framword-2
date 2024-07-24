import Joi from "joi";
const voucherSchemaValid = Joi.object({
  code: Joi.string().required().min(3).max(255),
  discount: Joi.number().required().min(0).max(100),
});

export default voucherSchemaValid;
