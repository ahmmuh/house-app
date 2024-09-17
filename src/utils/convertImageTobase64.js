export const convertImageToBase64 = (req) => {
  if (!req.body.images || req.body.images.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: "Files are required" })
  }

  return req.body.images.map((image) => {
    if (typeof image.base64 !== "string") {
      throw new Error("Invalid base64 string")
    }
    return {
      type: Buffer.from(image.base64.split(",")[1], "base64"),
      contentType: image.type,
    }
  })
}
