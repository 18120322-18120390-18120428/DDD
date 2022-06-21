import User from "./user.entity";
import UserDao from "../../infrac/repository/user/user.dao";
import GetOneByEmail from "./dto/getOneByEmail.dto";
import generateToken from "../../infrac/jwt/generateToken";
import generateUUID from "../../interfaces/helpers/generateUUID";
import bcrypt from "bcrypt";

export default class UserService {
  static registerByEmail = async (registerByEmail) => {
    try {
      const { email } = registerByEmail;
      let userFoundByEmail;

      try {
        const getOneByEmail = new GetOneByEmail(email, false);
        userFoundByEmail = await UserService.getOne(getOneByEmail);
      } catch (error) {
      } finally {
        if (userFoundByEmail) throw new Error("Email đã tồn tại");
      }

      const newUser = await UserService.createNewUser(registerByEmail);

      return newUser;
    } catch (err) {
      // Error handling logic should go here
      throw new Error(`Register user by email failed: ${err.message}`);
    }
  };

  static createNewUser = async (userInfo) => {
    try {
      const savedUser = await new UserDao().save(userInfo);

      if (savedUser === null) {
        throw new Error("User is not exist");
      }

      return User.mappingFromUserRepository(savedUser);
    } catch (err) {
      // Error handling logic should go here
      throw new Error(`Create user failed: ${err.message}`);
    }
  };

  static loginByEmail = async (loginByEmail) => {
    try {
      const { email, password } = loginByEmail;
      console.log(loginByEmail);
      const getOneByEmail = new GetOneByEmail(email, false);
      console.log(getOneByEmail);
      const userFoundByEmail = await UserService.getOne(getOneByEmail);
      console.log(userFoundByEmail);
      if (userFoundByEmail == null) {
        console.log("23");
        throw new Error("Email is incorrect");
      }

      const isVerify = await bcrypt.compare(
        password,
        userFoundByEmail.password
      );
      console.log(isVerify, "23");
      if (isVerify) {
        const { accessToken, refreshToken } = generateToken(userFoundByEmail);

        return {
          accessToken,
          refreshToken,
          userFoundByEmail,
        };
      } else {
        throw new Error("Password is incorrect");
      }
    } catch (err) {
      // Error handling logic should go here
      throw new Error(`Login by email failed: ${err.message}`);
    }
  };

  static getOne = async (getOne) => {
    try {
      const foundUser = await new UserDao().findOne(getOne);

      if (foundUser === null) {
        throw new Error("User is not exist");
      }

      return User.mappingFromUserRepository(foundUser);
    } catch (err) {
      // Error handling logic should go here
      throw new Error(`Get failed: ${err.message}`);
    }
  };

  static getUsers = async (getUsers) => {
    try {
      const { number, page, filter } = getUsers;
      const listUsers = await new UserDao().queryByCondition(
        number,
        page,
        filter
      );

      return listUsers.map((user) => User.mappingFromUserRepository(user));
    } catch (err) {
      // Error handling logic should go here
      throw new Error(`Get failed: ${err.message}`);
    }
  };

  static getOneByIdAndUpdate = async (_id, updateUser) => {
    try {
      const updatedUser = await new UserDao().getOneAndUpdate(
        { _id },
        updateUser
      );

      return User.mappingFromUserRepository(updatedUser);
    } catch (err) {
      // Error handling logic should go here
      throw new Error(`Update User failed: ${err.message}`);
    }
  };

  static searchUser = async (searchUser) => {
    try {
      const { query, number, page } = searchUser;
      const listUsers = await new UserDao().search(query, number, page);

      return listUsers.map((user) => User.mappingFromUserRepository(user));
    } catch (error) {
      throw new Error(`function searchUser - ${error}`);
    }
  };
}
