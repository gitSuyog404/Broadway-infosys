import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  age: Number,
});

// model ma small "m" wala model use hunxa
// jaile pani singular word use hunxa collection ko naam pas garda jastai Users ko satta ma User
// yo chai mongodb ma gayera users vanne collection banxa
// const User = mongoose.model("User", userSchema);

// export default User;

// OR

export default mongoose.model("User", userSchema);
