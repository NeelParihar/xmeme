/* eslint-disable no-param-reassign */

const paginate = (schema) => {
  /**
   * @typedef {Object} QueryResult
   * @property {Document[]} results - Results found
   * @property {number} page - Current page
   * @property {number} limit - Maximum number of results per page
   * @property {number} totalPages - Total number of pages
   * @property {number} totalResults - Total number of documents
   */
  /**
   * Query for documents with pagination
   * @param {Object} [filter] - Mongo filter
   * @param {Object} [options] - Query options
   * @param {string} [options.sortBy] - Sorting criteria using the format: sortField:(desc|asc). Multiple sorting criteria should be separated by commas (,)
   * @param {number} [options.limit] - Maximum number of results per page (default = 100)
   * @param {number} [options.hasCreatedAt] - if the reponse should contain createdAt key or not
   * @param {number} [options.page] - Current page (default = 1)
   * @returns {Promise<QueryResult>}
   */
  schema.statics.paginate = async function (options) {
    let sort = '';
    if (options.sortBy) {
      const sortingCriteria = [];
      options.sortBy.split(',').forEach((sortOption) => {
        const [key, order] = sortOption.split(':');
        sortingCriteria.push((order === 'desc' ? '-' : '') + key);
      });
      sort = sortingCriteria.join(' ');
    } else {
      sort = { createdAt: -1 };
    }

    const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 100;
    const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
    const skip = (page - 1) * limit;

    const countPromise = this.countDocuments().exec();

    let docsPromise;
    if (options.hasCreatedAt) {
      docsPromise = this.find().sort(sort).skip(skip).limit(limit);
    } else {
      docsPromise = this.find({}, { createdAt: 0, likes: 0 }).sort(sort).skip(skip).limit(limit);
    }

    docsPromise = docsPromise.exec();

    return Promise.all([countPromise, docsPromise]).then((values) => {
      const [, results] = values;
      // const totalPages = Math.ceil(totalResults / limit);
      // const result = {
      //   results,
      //   page,
      //   limit,
      //   totalPages,
      //   totalResults,
      // };
      return Promise.resolve(results);
    });
  };
};

module.exports = paginate;
