export class CreatePost {
    constructor(authorId, content, fee, numberOfImages,numberOfVideos) {
        this.authorId = authorId;
        this.content = content;
        this.fee = fee;
        this.numberOfImages = numberOfImages;
        this.numberOfVideos = numberOfVideos;
        this.likeCount = 0;
        this.commentCount = 0;
        this.shareCount = 0;
    }
}