const httpStatus = require('http-status');
const { Meme } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Meme
 * @param {Object} MemeBody
 * @returns {Promise<Meme>}
 */
const createMeme = async (MemeBody) => {
  if (await Meme.isURLTaken(MemeBody.url)) {
    throw new ApiError(409, 'Meme already uploaded');
  }
  const meme = await Meme.create(MemeBody);
  return meme;
};

/**
 * Query for Memes
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 100)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryMemes = async (options) => {
  const Memes = await Meme.paginate(options);
  return Memes;
};

/**
 * Get Meme by id
 * @param {ObjectId} id
 * @returns {Promise<Meme>}
 */
const getMemeById = async (id) => {
  return Meme.findById(id);
};

/**
 * Update Meme by id
 * @param {ObjectId} MemeId
 * @param {Object} updateBody
 * @returns {Promise<Meme>}
 */
const updateMemeById = async (MemeId, updateBody) => {
  const Meme = await getMemeById(MemeId);
  if (!Meme) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meme not found');
  }
  if (updateBody.email && (await Meme.isURLTaken(updateBody.url, MemeId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Meme already uploaded');
  }
  Object.assign(Meme, updateBody);
  await Meme.save();
  return Meme;
};

/**
 * Delete Meme by id
 * @param {ObjectId} MemeId
 * @returns {Promise<Meme>}
 */
const deleteMemeById = async (MemeId) => {
  const Meme = await getMemeById(MemeId);
  if (!Meme) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meme not found');
  }
  await Meme.remove();
  return Meme;
};

module.exports = {
  createMeme,
  queryMemes,
  getMemeById,
  updateMemeById,
  deleteMemeById,
};
