import Joi from "joi";

export const registerSchemaValide = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  username: Joi.string().min(6),
});

export const loginSchemaValide = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
