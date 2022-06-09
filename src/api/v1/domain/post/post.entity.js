import { PostDao } from "../../infrac/repository/post/post.dao";

export class Post {
    constructor(authorId, content, fee, numberOfImages, numberOfVideos, likeCount, commentCount, shareCount) {
        this.authorId = authorId;
        this.content = content;
        this.fee = fee;
        this.numberOfImages = numberOfImages;
        this.numberOfVideos = numberOfVideos;
        this.likeCount = likeCount;
        this.commentCount = commentCount;
        this.shareCount = shareCount;
    }
    static getPostById = async (_id) => {
        try {
            const post = await new PostDao().findById(_id);
            return post;
        } catch (error) {
            throw new Error(`Get failed: ${error.message}`);
        }
    }
    static getPostByAuthorId = async (authorId) => {
        try {
            const posts = await new PostDao().findByAuthorId(authorId);
            return posts;
        } catch (error) {
            throw new Error(`Get failed: ${error.message}`);
        }
    }
    static createPost = async (data) => {
        try {
            const post = await new PostDao().save(data);
            console.log("1", post)
            return post;
        } catch (error) {
            throw new Error(`Get failed: ${error.message}`);
        }
    }
    static updatePost = async (data) => {
        try {
            const post = await new PostDao().updatePost(data);
            return post;
        } catch (error) {
            throw new Error(`Get failed: ${error.message}`);
        }
    }
    static deletePostById = async (_id) => {
        try {
            const status = await new PostDao().deletePostById(_id);
            return status;
        } catch (error) {
            throw new Error(`Get failed: ${error.message}`);
        }
    }
    static delelePostByAuthorId = async (authorId) => {
        try {
            const status = await new PostDao().delelePostByAuthorId(authorId);
            return status;
        } catch (error) {
            throw new Error(`Get failed: ${error.message}`);
        }
    }
}