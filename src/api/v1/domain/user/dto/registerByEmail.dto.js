import generateNickName from "../../../interfaces/helpers/generateNickName";

export default class RegisterByEmail {
  constructor(email, password, name, type = "user") {
    this.email = email;
    this.password = password;
    this.name = name;
    this.type = type;
    this.setNickName(name);
  }

  setNickName = (name) => {
    this.nickName = generateNickName(name);
  };
}
