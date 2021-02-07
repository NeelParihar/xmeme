const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { memeService } = require('../services');

const createMeme = catchAsync(async (req, res) => {
  const meme = await memeService.createMeme(req.body);
  res.status(httpStatus.CREATED).send({ id: meme.id });
});

const getMemes = catchAsync(async (req, res) => {
  const options = pick(req.query, ['sortBy', 'limit', 'page', 'hasCreatedAt']);
  const result = await memeService.queryMemes(options);
  res.status(200).send(result);
});

const getMeme = catchAsync(async (req, res) => {
  const meme = await memeService.getMemeById(req.params.memeId);
  if (!meme) {
    throw new ApiError(httpStatus.NOT_FOUND, 'meme not found');
  }
  delete meme.createdAt;
  delete meme.updatedAt;
  res.send(meme);
});

const updateMeme = catchAsync(async (req, res) => {
  const meme = await memeService.updateMemeById(req.params.memeId, req.body);
  res.status(httpStatus.CREATED).send(meme);
});

const deleteMeme = catchAsync(async (req, res) => {
  await memeService.deletememeById(req.params.memeId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createMeme,
  getMemes,
  getMeme,
  updateMeme,
  deleteMeme,
};
