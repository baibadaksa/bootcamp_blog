import * as PostModel from '../models/PostModel';
// import AppError from '../errors/AppError';

const getPostById = (req, res) => {
  const post = await PostModel.getPostById(req.params);
  res.status(200).send( post );
};

export { getPostById };
