const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

// Cloudinary config
cloudinary.config({
  cloud_name: "deffm8g7g",
  api_key: "388349343968194",
  api_secret: "Jv3S_Cm_yG2iyY0SONw1qFEU_TA",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'social_posts', // optional folder in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif'],
    transformation: [{ width: 800, crop: 'limit' }], // optional
  },
});

const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image/')) return cb(new Error('Only images allowed'), false);
  cb(null, true);
};

module.exports = multer({ storage, fileFilter });
