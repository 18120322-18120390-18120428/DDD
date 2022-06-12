import bcrypt from "bcrypt";

const hashPassword = (password) => {
  const passHash = bcrypt.hashSync(password, Number(process.env.ROUNDS));

  return passHash;
};

export default hashPassword;
