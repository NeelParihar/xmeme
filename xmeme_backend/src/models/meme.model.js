const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const memeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    caption: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      unique: true,
    },
    likes: {
      type: Number,
      default: 0
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
memeSchema.plugin(toJSON);
memeSchema.plugin(paginate);

/**
 * Check if meme URL is taken
 * @param {string} url - The meme URL
 * @param {ObjectId} [excludeMemeId] - The id of the meme to be excluded
 * @returns {Promise<boolean>}
 */
memeSchema.statics.isURLTaken = async function (url, excludeUserId) {
  const user = await this.findOne({ url, _id: { $ne: excludeUserId } });
  return !!user;
};

memeSchema.pre('save', async function (next) {
  // const user = this;
  // if (user.isModified('password')) {
  //   user.password = await bcrypt.hash(user.password, 8);
  // }
  next();
});

/**
 * @typedef Meme
 */
const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;
