import Subscribe from "./subscribe.do";

export default class SubscribeDao {
  save = async (data) => {
    const subsribe = new Subscribe(data);
    await subsribe.save();
    return subsribe;
  }

  findById = async (id) => {
    return await Subscribe.findOne({ _id: id });
  }

  findOne = async (filter) => {
    const foundUser = await Subscribe.findOne(filter);
    return foundUser;
  }

  getOneAndUpdate = async (filter, update) => {
    const updatedUser = await Subscribe.findOneAndUpdate(filter, update);

    return updatedUser;
  }
}