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
  const memes = await Meme.paginate(options);
  return memes;
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
  const meme = await getMemeById(MemeId);
  if (!meme) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meme not found');
  }
  if (updateBody.url && (await Meme.isURLTaken(updateBody.url, MemeId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Meme already uploaded');
  }
  Object.assign(meme, updateBody);
  await meme.save();
  return meme;
};

/**
 * Update Meme Likes by id
 * @param {ObjectId} MemeId
 * @returns {Promise<Meme>}
 */
const updateMemeLikesById = async (MemeId) => {
  const meme = await getMemeById(MemeId);
  if (!meme) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meme not found');
  }
  meme.likes = meme.likes + 1;

  await meme.save();
  return meme;
};

/**
 * Delete Meme by id
 * @param {ObjectId} MemeId
 * @returns {Promise<Meme>}
 */
const deleteMemeById = async (MemeId) => {
  const meme = await getMemeById(MemeId);
  if (!meme) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Meme not found');
  }
  await meme.remove();
  return meme;
};

module.exports = {
  createMeme,
  queryMemes,
  getMemeById,
  updateMemeById,
  updateMemeLikesById,
  deleteMemeById,
};
