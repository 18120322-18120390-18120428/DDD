import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import UserService from "../../../domain/user/user.service";
import UpdateUser from "../../../domain/user/dto/updateUser.dto";
const updateUser = async (req, res) => {
  try {
    const { _id, dataUpdate } = req.body;
    const { fullName, password, nickName, job, amount } = dataUpdate;

    const updateUser = new UpdateUser(
      fullName,
      password,
      nickName,
      job,
      amount
    );

    const updatedUser = await UserService.getOneByIdAndUpdate(_id, updateUser);

    res.status(200).send(updatedUser);
  } catch (error) {
    console.log(parseErrorIntoMessage(error));
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default updateUser;
