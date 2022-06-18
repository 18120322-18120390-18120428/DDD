import parseErrorIntoMessage from "../../../interfaces/helpers/parseErrorIntoMessage";
import UserService from "../../../domain/user/user.service";
import LoginByEmail from "../../../domain/user/dto/loginByEmail.dto";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const loginByEmail = new LoginByEmail(email, password);

    const { accessToken, refreshToken, userFoundByEmail } =
      await UserService.loginByEmail(loginByEmail);
      
    userFoundByEmail.password = 0;
    res.cookie(process.env.REFRESH_TOKEN_KEY, refreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });

    res.status(200).send({
      user: userFoundByEmail,
      accessToken: accessToken,
    });
  } catch (error) {
    res.status(400).send(parseErrorIntoMessage(error));
  }
};

export default login;
