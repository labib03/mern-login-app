import { Router } from "express";
/** import all controllers */
import * as controller from "../controllers/controller.js";
import Auth, { localVariables } from "../middlewares/auth.js";

const router = Router();

/** POST Methods */
router.route("/register").post(controller.register); // register user
// router.route('/registerMail').post(registerMail); // send the email
router
  .route("/authenticate")
  .post(controller.verifyUser, (req, res) => res.end()); // authenticate user
router.route("/login").post(controller.verifyUser, controller.login); // login in app

// /** GET Methods */
router.route("/user/:username").get(controller.getUser); // user with username
router
  .route("/generateOTP")
  .get(controller.verifyUser, localVariables, controller.generateOTP); // generate random OTP
router.route("/verifyOTP").get(controller.verifyUser, controller.verifyOTP); // verify generated OTP
router.route("/createResetSession").get(controller.createResetSession); // reset all the variables

// /** PUT Methods */
router.route("/updateUser").put(Auth, controller.updateUser); // is use to update the user profile
router.put("/resetPassword", controller.resetPassword); // use to reset password

export { router };
