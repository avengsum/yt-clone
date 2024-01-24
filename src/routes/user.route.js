import {Router, } from "express";
import { registerUser } from "../controllers/user.controller";

const Router = Router();

Router.route('/register').post(registerUser)

export default Router