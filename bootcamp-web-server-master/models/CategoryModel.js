import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    categoryTitle: {type: String, unique: false, required: true},
    postId: {type: String, unique: false, required: true},
  }
  );


const CategoryModel = mongoose.model('Category', categorySchema);

const save = async model => new CategoryModel(model).save();

const getCategoryById = async id => CategoryModel.findOne({ _id: id});

export { save, getCategoryById, categorySchema };
