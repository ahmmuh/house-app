import multer from "multer"
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, ("./uploads") );  // ->("./uploads")  this is the destination where files will save in the HArdDisk Storage
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    },
});

//   const upload = multer({ storage :storage }); OR
export const upload = multer({ storage:storage });
