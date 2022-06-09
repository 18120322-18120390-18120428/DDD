export default class UpdatePost {
    constructor(_id, authorId, content, fee, numberOfImages, numberOfVideos, likeCount, commentCount, shareCount) {
        this._id = _id;
        this.authorId = authorId;
        this.content = content;
        this.fee = fee;
        this.numberOfImages = numberOfImages;
        this.numberOfVideos = numberOfVideos;
        this.likeCount = likeCount;
        this.commentCount = commentCount;
        this.shareCount = shareCount;
    }
}