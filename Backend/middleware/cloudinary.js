const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: "deffm8g7g",
  api_key: "388349343968194",
  api_secret: "Jv3S_Cm_yG2iyY0SONw1qFEU_TA",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'social_media_uploads',
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

module.exports = { cloudinary, storage };
