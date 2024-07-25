import Joi from "joi";
const categorySchemaValid = Joi.object({
  name: Joi.string().required().min(3).max(255),
  slug: Joi.string().required().min(3).max(255),
});

export default categorySchemaValid;
