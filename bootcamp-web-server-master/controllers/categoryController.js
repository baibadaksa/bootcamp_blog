import * as CategoryModel from '../models/CategoryModel';
// import * as PostModel from '../models/PostModel';

const logger = require('../utils/logger')('logController');

const getCategoryById = async (req, res) => {
  logger.log('info', 'getPostById: %j', req.body);
  const category = await CategoryModel.getCategoryById(req.params.categoryId);
  res.status(200).send({ payload: category});

};

export { getCategoryById };
