import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJSON = function () {
  const userObject = this.toObject();
  delete userObject.password;
  return userObject;
};

userSchema.methods.generateToken = function () {
  const user = this;
  const token = jwt.sign(
    {
      data: {
        id: user._id.toString(),
        email: user.email,
        isVerified: user.isVerified,
      },
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
};

userSchema.statics.generateToken = function (user) {
  const accessToken = jwt.sign(
    {
      data: {
        _id: user._id.toString(),
        email: user.email,
        isVerified: user.isVerified,
      },
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  const refreshToken = jwt.sign(
    {
      data: {
        _id: user._id.toString(),
        email: user.email,
        isVerified: user.isVerified,
      },
    },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  );
  return { accessToken, refreshToken };
};

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(
      user.password,
      Number(process.env.ROUNDS)
    );
  }
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
