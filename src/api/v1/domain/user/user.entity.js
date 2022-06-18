export default class User {
  constructor(
    id,
    email,
    password,
    name,
    isVerified,
    isActive,
    isDeleted,
    type,
    minutesPerDay,
    daysPerWeek,
    expiredTime
  ) {
    this._id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.isVerified = isVerified;
    this.isActive = isActive;
    this.isDeleted = isDeleted;
    this.type = type;
    this.minutesPerDay = minutesPerDay;
    this.daysPerWeek = daysPerWeek;
    this.expiredTime = expiredTime;
    this.createdAt = undefined;
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
