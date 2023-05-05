import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [2, "must be at least 2 charachters"],
      maxlength: [32, "must be less than 32 charachters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
