import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import UserService from "../../../domain/user/user.service";
import GetOneByNickName from "../../../domain/user/dto/getOneByNickName.dto";

const getUserByNickName = async (req, res) => {
  try {
    const query = req.query;
    const { nickName } = query;

    const getOneByNickName = new GetOneByNickName(nickName);
    const user = await UserService.getOne(getOneByNickName);

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default getUserByNickName;
