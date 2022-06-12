import User from "./user.do";

export class UserDao {
  save = async (data) => {
    const user = new User(data);
    await user.save();
  };

  findById = async (id) => {
    return await User.findOne({ _id: id });
  };

  findByCondition = async (condition) => {
    return await User.find(condition);
  };
}
