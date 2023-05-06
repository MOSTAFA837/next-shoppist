import nc from "next-connect";
import cloudinary from "cloudinary";
import bodyParser from "body-parser";
import fs from "fs";
import fileUpload from "express-fileupload";
import { imgMiddleware } from "@/middleware/imgMiddleware";

// configration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const handler = nc()
  .use(
    fileUpload({
      useTempFiles: true,
    })
  )
  .use(imgMiddleware);
export const config = {
  api: {
    bodyParser: false,
  },
};

// upload images
handler.post(async (req, res) => {
  try {
    let files = Object.values(req.files).flat();
    let images = [];
    const { path } = req.body;

    for (const file of files) {
      const img = await new Promise((resolve) => {
        cloudinary.v2.uploader.upload(
          file.tempFilePath,
          {
            folder: path,
          },
          (err, res) => {
            if (err) {
              removeTmp(file.tempFilePath);
              console.log(err);

              return res.json({ message: "Upload image failed." });
            }

            resolve({
              url: res.secure_url,
              public_id: res.public_id,
            });
          }
        );
      });

      images.push(img);
      removeTmp(file.tempFilePath);
    }

    res.json(images);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

const removeTmp = (path) => {
  fs.unlink(path, (err) => {
    if (err) throw err;
  });
};

// delete image
handler.delete(async (req, res) => {
  let image_id = req.body.public_id;

  cloudinary.v2.uploader.destroy(image_id, (err, res) => {
    if (err) return res.json({ success: false, err });

    res.json({ success: true });
  });
});

export default handler;
