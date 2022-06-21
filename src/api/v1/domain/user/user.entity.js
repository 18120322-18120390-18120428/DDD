export default class User {
  constructor(
    id,
    email,
    password,
    name,
    isVerified,
    isActive,
    isDeleted,
    avatar,
    background,
    nickName,
    type,
    job,
    amount,
    createdAt
  ) {
    this._id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.isVerified = isVerified;
    this.isActive = isActive;
    this.isDeleted = isDeleted;
    this.type = type;
    this.avatar = avatar;
    this.background = background;
    this.nickName = nickName;
    this.job = job;
    this.amount = amount;

    this.createdAt = createdAt;
  }

  static mappingFromUserRepository = (userRepo) => {
    const user = new User();

    const keys = Object.keys(user);

    keys.forEach((key) => {
      user[key] = userRepo[key];
    });

    return user;
  };
}
