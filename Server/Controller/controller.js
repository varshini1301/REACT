// import { Sign } from "../Model/SignUp_Model.js";
import bcrypt from "bcrypt";
import { Sign } from "../model/model.js";

export const SignUp = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    let password = req.body.Password;
    const data = await Sign.findOne({ name: name });
    if (!data) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const result = await Sign.create({
        name: name,
        email:email,
        Password: hashedPassword,
      });
      res.send("success");
    } else {
      res.send("Username is Not Available");
    }
  } catch (err) {
    res.status(500)
    res.send(err.message);  }
};

export const SignIN = async (req, res) => {
  const { name,email, Password } = req.body;
  try {
    const user = await Sign.findOne({ name });
    if (!user) {
      return res.send("Invalid username ") ;
    }
    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
      return res.send("Invalid password");
    }
    res.send("success");
  } catch (error) {
    res.status(500)
    res.send(err.message);  }
};
