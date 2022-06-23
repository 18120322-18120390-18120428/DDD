import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import UserService from "../../../domain/user/user.service";
import SearchUser from "../../../domain/user/dto/searchUser.dto";

const searchUser = async (req, res) => {
  try {
    const { query, number, page } = req.body;
    const searchUser = new SearchUser(query, number, page);
    const listUsersSearch = await UserService.searchUser(searchUser);

    res.status(200).send(listUsersSearch);
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default searchUser;
