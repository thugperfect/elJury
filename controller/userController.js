const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jwt-then");
const userController = {
  register: async (req, res) => {
    try {
      const { name, phone, email, password } = req.body;

      const phone_no = User.findOne({ phone });
      if (!phone_no) return res.json({ msg: "Phone Number already exists" });

      const email_syntax = /[.com]$/;
      if (!email_syntax.test(email))
        return res.json({ msg: "Enter valid Email" });

      const email_id = User.findOne({ email });

      if (!email_id) return res.json({ msg: "Email Id already exists" });
      const password_hash = await bcrypt.hash(password, 12);
      if (password.length < 8)
        return res.json({ msg: "Password must be more than 8 chars..." });
      const user = new User({ name, phone, email, password: password_hash });
      const token = await jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN);
      await user.save();

      res.json({
        msg: "Register Success",
        status: true,
        token,
        user: {
          ...user._doc,
        },
      });
    } catch (error) {
      return res.json({ msg: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) return res.json({ msg: "Invalid Username or password" });

      const ismatch = await bcrypt.compare(password, user.password);

      if (!ismatch) return res.json({ msg: "Invalid username or Password" });
      const token = await jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN);

      res.json({
        msg: "Logged In",
        status: true,
        token,
      });
    } catch (error) {
      return res.json({ msg: error.message });
    }
  },
};

module.exports = userController;
