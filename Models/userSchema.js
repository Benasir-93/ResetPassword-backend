import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const userSchema = new mongoose.Schema({
  
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});


userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  const saltRounds = 10;
  bcrypt.hash(this.password, saltRounds, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

const User = mongoose.model("UserPasswordReset", userSchema);

export default User
