import { UserDao } from "../../infrac/repository/user/user.dao";

export class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  //   getTutor() {
  //     //Lấy từ Domain tutor
  //     // this.tutor =
  //     this.tutor = {
  //       name: "A",
  //       email: "A@gmail.com",
  //     };
  //   }

  static mappingFromUserRepository = async (userRepo) => {
    const user = new User(
      userRepo._id,
      userRepo.name,
      userRepo.email,
      userRepo.password
    );

    return user;
  };

  static getUserById = async (_id) => {
    try {
      const userCollection = await new UserDao().findById(_id);
      const user = User.mappingFromUserRepository(userCollection);
      return user;
    } catch (err) {
      // Error handling logic should go here
      throw new Error(`Get failed: ${err.message}`);
    }
  };

  static getUserCollections = async (queryCondition) => {
    try {
      const userCollections = await new UserDao().findByCondition(
        queryCondition
      );

      return userCollections.map((user) =>
        User.mappingFromUserRepository(user)
      );
    } catch (err) {
      // Error handling logic should go here
      throw new Error(`Get failed: ${err.message}`);
    }
  };

  static userReservation = async (createUser) => {
    try {
      await new UserDao().save(createUser);
    } catch (err) {
      throw new Error("Schedule reservation failed: " + err.message);
    }
  };
}
