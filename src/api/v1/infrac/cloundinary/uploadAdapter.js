import cloudinary from "./cloudinary";

export class UploadAdapter {
  static uploadImage = async (URLFile) => {
    try {
      const uploadResponse = await cloudinary.uploader.upload(URLFile, {
        upload_preset: "products",
      });
      return uploadResponse;
    } catch (error) {
      throw new Error(`Upload failed: ${error}`);
    }
  }
  static uploadVideo = async (URLFile) => {
    let linkVideo;
    try {
      const uploadResponse = await cloudinary.uploader.upload(URLFile, {
        resource_type: "video",
        upload_preset: "dev_setups",
      });
      if (uploadResponse) {
        linkVideo = uploadResponse.url;
      }
    } catch (error) {
      linkVideo = error;
    }
    return linkVideo;
  }

}