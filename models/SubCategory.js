import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const subSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      minlength: [2, "must be at least 2 charachters"],
      maxlength: [32, "must be at least 2 charachters"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    parent: {
      type: ObjectId,
      ref: "Category",
      require: true,
    },
  },
  { timestamps: true }
);

const SubCategory =
  mongoose.models.SubCategory || mongoose.model("SubCategory", subSchema);

export default SubCategory;
