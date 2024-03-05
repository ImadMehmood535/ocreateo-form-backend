const Joi = require("joi");

const loginSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    email: Joi.string().email().max(100).required(),
    password: Joi.string().min(8).max(20).required(),
  }),
});

const registerSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().max(100).required(),
    password: Joi.string().min(8).max(20).required(),
  }),
});

const updateSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    name: Joi.string().allow(""),
    email: Joi.string().email().max(100).allow(""),
    password: Joi.string().min(8).max(10).allow(""),
  }),
});
const passwordSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    oldPassword: Joi.string().min(8).max(20).required(),
    newPassword: Joi.string().min(8).max(20).required(),
  }),
});

module.exports = {
  loginSchema,
  registerSchema,
  updateSchema,
  passwordSchema
};
