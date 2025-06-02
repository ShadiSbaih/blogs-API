import multer from "multer";
import { nanoid } from "nanoid";
function fileUpload() {
  //Multer way
  /*
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      console.log(file);
      // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const uniqueSuffix = nanoid();
      cb(null, file.originalname + "_" + uniqueSuffix);
    },
  });
  */
  //now the cloudinary way
  const storage = multer.diskStorage({});
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  };
  const upload = multer({ fileFilter, storage: storage });
  return upload;
}

export default fileUpload;
