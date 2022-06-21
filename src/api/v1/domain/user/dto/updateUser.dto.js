export default class UpdateUser {
  constructor(fullName, password, nickName, job, amount) {
    this.setFullName(fullName);
    this.setPassword(password);
    this.setNickName(nickName);
    this.setJob(job);
    this.setAmount(amount);
  }

  setFullName = (fullName) => {
    if (fullName) {
      this.fullname = fullname;
    }
  };

  setPassword = (password) => {
    if (password) {
      this.password = password;
    }
  };

  setNickName = (nickName) => {
    if (nickName) {
      this.nickName = nickName;
    }
  };

  setJob = (job) => {
    if (job) {
      this.job = job;
    }
  };

  setAmount = (amount) => {
    if (amount) {
      this.amount = amount;
    }
  };
}
