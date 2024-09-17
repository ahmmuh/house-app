import sharp from "sharp"

const imageOptimazationHandler = async (imagePath) => {
  try {
    const optimizedImage = await sharp(imagePath).resize(300).toBuffer()
    console.log("Optimazied image", optimizedImage)
    return optimizedImage
  } catch (error) {
    console.error("Image Optimazation has an ERROR", error)
    throw error
  }
}

export default imageOptimazationHandler
