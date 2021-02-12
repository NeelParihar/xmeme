const Joi = require('joi');
const { objectId, validURL } = require('./custom.validation');

const createMeme = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    caption: Joi.string().required(),
    url: Joi.string().required().custom(validURL),
  }),
};

const getMemes = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    hasCreatedAt: Joi.boolean(),
  }),
};

const getMeme = {
  params: Joi.object().keys({
    memeId: Joi.string().custom(objectId),
  }),
};

const updateMeme = {
  params: Joi.object().keys({
    memeId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      url: Joi.string().custom(validURL),
      caption: Joi.string(),
    })
    .min(1),
};

const updateMemeLikes = {
  params: Joi.object().keys({
    memeId: Joi.required().custom(objectId),
  }),
};

const deleteMeme = {
  params: Joi.object().keys({
    memeId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createMeme,
  getMemes,
  getMeme,
  updateMeme,
  updateMemeLikes,
  deleteMeme,
};
