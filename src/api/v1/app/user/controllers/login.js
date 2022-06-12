import { User } from "../../../domain/user/user.entity";
import { LoginUser } from "../../../domain/user/dto/loginUser.dto";
import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";

const login = async (req, res) => {
  try {
    //get Condition by tutor or startTime
    const condition = whereCondition(req);
    console.log(condition);
    const data = await User.getUserById;

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

const whereCondition = (req) => {
  const { email, password } = req.query;
  const condition = new LoginUser(email, password);

  return condition;
};

export default login;
