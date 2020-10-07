import passport from "passport";
import User from "./models/User";

passport.use(User.creatstrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
