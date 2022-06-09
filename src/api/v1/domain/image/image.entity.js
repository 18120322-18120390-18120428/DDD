import { ImageDao } from "../../infrac/repository/image/image.dao";

export class Image {
    constructor(postId, url, order) {
        this.postId = postId;
        this.url = url;
        this.order = order;
    }
    static getImageById = async (_id) => {
        try {
            const image = await new ImageDao().findById(_id);
            return image;
        } catch (error) {
            throw new Error(`Get failed: ${error.message}`);
        }
    }
    static getImageByPostId = async (postId) => {
        try {
            const images = await new ImageDao().findByPostId(postId);
            return images;
        } catch (error) {
            throw new Error(`Get failed: ${error.message}`);
        }
    }
    static uploadImage = async (data) => {
        try {
            const image = await new ImageDao().save(data);
            return image;
        } catch (error) {
            throw new Error(`Get failed: ${error.message}`);
        }
    }
    static updateImage = async (data) => {
        try {
            const image = await new ImageDao().updateImage(data);
            return image;
        } catch (error) {
            throw new Error(`Get failed: ${error.message}`);
        }
    }
    static deleteImageById = async (_id) => {
        try {
            const status = await new ImageDao().deleteImageById(_id);
            return status;
        } catch (error) {
            throw new Error(`Get failed: ${error.message}`);
        }
    }
    static deleleImageByPostId = async (postId) => {
        try {
            const status = await new ImageDao().deleleImageByPostId(postId);
            return status;
        } catch (error) {
            throw new Error(`Get failed: ${error.message}`);
        }
    }
}