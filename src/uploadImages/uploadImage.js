import multer from "multer"

const uploadImages = () => {
  const storage = multer.memoryStorage()
  const upload = multer({ storage: storage })
  return upload
}

export default uploadImages
