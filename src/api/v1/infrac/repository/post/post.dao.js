import Post from "./post.do";
import Image from "../image/image.do";

export class PostDao {
  save = async (data) => {
    const post = new Post(data);
    await post.save();
    return post;
  };
  findById = async (_id) => {
    return await Post.findById({ _id: _id });
  };
  findByAuthorId = async (authorId) => {
    const posts = await Post.aggregate([
      { $addFields: { postId: { $toObjectId: "$_id" } } },
      {
        $lookup: {
          from: "images",
          localField: "postId",
          foreignField: "postId",
          as: "image",
        },
      },
    ]);

    return posts.filter((item) => {
      return String(item.authorId) === authorId;
    });
  };
  findByCondition = async (number, page, query) => {
    const posts = await Post.aggregate([
      { $addFields: { postId: { $toObjectId: "$_id" } } },
      {
        $lookup: {
          from: "images",
          localField: "postId",
          foreignField: "postId",
          as: "image",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "authorId",
          foreignField: "_id",
          as: "infoUser",
        },
      },
      {
        $unwind: "$infoUser",
      },
      { $limit: number },
      { $skip: page },
      { $sort: { createdAt: -1 } },
    ]);

    return posts;
  };
  updatePost = async (post) => {
    return await Post.findOneAndUpdate({ _id: post._id }, post);
  };
  deletePostById = async (_id) => {
    return Post.deleteOne({ _id: _id });
  };
  deletePostByAuthorId = async (authorId) => {
    return Post.deleteMany({ authorId: authorId });
  };
}
