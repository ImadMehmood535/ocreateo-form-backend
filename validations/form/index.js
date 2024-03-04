const Joi = require("joi");

const feedbackSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().max(100).required(),
    satisfactionRating: Joi.number().valid(1, 2, 3, 4, 5).required(),
    effectiveness: Joi.number().valid(1, 2, 3, 4, 5).required(),
    relevance: Joi.number().valid(1, 2, 3, 4, 5).required(),
    quality: Joi.number().valid(1, 2, 3, 4, 5).required(),
    analytics: Joi.number().valid(1, 2, 3, 4, 5).required(),
    efficiency: Joi.number().valid(1, 2, 3, 4, 5).required(),
    strategy: Joi.number().valid(1, 2, 3, 4, 5).required(),
    service: Joi.number().valid(1, 2, 3, 4, 5).required(),
    specificContent: Joi.string().max(255).allow(""),
    additionalData: Joi.string().max(255).allow(""),
    competitors: Joi.string().max(255).allow(""),
    support: Joi.string().max(255).allow(""),
    message: Joi.string().max(255).required(),
  }).required(),
});

module.exports = {
  feedbackSchema,
};
