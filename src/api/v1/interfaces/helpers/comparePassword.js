import bcrypt from "bcrypt";

const comparePassword = (password, currentPassword) => {
  const ret = bcrypt.compareSync(password, currentPassword);

  return ret;
};

export default comparePassword;
