const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/apiError");

const userService = require("../service/userService");
// const ApiError = require("../error/ApiError");
// const { User, Basket } = require("../models/models");

// const genereteJwt = (id, email, role) => {
//   return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
//     expiresIn: "24h",
//   });
// };

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Validation error", errors));
      }
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // secure: true // if https
      });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // secure: true // if https
      });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }
  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        // secure: true // if https
      });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }
  
  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  // async registration(req, res, next) {
  //   const { email, password, role } = req.body;
  //   if (!email || !password) {
  //     return next(ApiError.badRequest("Wrong email or password"));
  //   }
  //   const candidate = await User.findOne({ where: { email } });
  //   if (candidate) {
  //     return next(ApiError.badRequest("User email is exist."));
  //   }
  //   const hashPassword = await bcrypt.hash(password, 5);
  //   const user = await User.create({ email, role, password: hashPassword });
  //   const basket = await Basket.create({ userId: user.id });
  //   const token = genereteJwt(user.id, user.email, user.role);
  //   return res.json({ token });
  // }
  // async login(req, res, next) {
  //   const { email, password } = req.body;
  //   const user = await User.findOne({ where: { email } });
  //   if (!user) {
  //     return next(ApiError.internal("Try again!")); //User is not found.
  //   }
  //   let comparePassword = bcrypt.compareSync(password, user.password);
  //   if (!comparePassword) {
  //     return next(ApiError.internal("Try again!")); //Password is wrong
  //   }
  //   const token = genereteJwt(user.id, user.email, user.role);
  //   return res.json({ token });
  // }
  // async check(req, res, next) {
  //   const token = genereteJwt(req.user.id, req.user.email, req.user.role);
  //   // console.log("---userControler.check");
  //   return res.json({ token });
  // }
}

module.exports = new UserController();
