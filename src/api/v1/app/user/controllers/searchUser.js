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
    throw new Error(`function searchUser - ${error}`);
  }
};

export default searchUser;
