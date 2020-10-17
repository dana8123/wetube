import routes from "../routes.js";
import User from "../models/User.js";

export const getJoin = (req, res) => {
	res.render("Join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
	const {
		body: { name, email, password, password2 },
	} = req;
	if (password !== password2) {
		res.status(400);
	} else {
		try {
			const user = await User({
				name,
				email,
			});
			await user.register(user, password);
		} catch (error) {
			console.log(error);
		}
		res.redirect(routes.home);
	}
	res.render("join", { pageTitle: "join" });
};

export const getLogin = (req, res) => {
	res.render("Login", { pageTitle: "Login" });
};
export const postLogin = (req, res) => {
	res.redirect(routes.home);
};

export const logout = (req, res) => {
	//Todo : process Log out
	res.redirect(routes.home);
};

export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) =>
	res.render("editProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
	res.render("changePassword", { pageTitle: "changePssword" });
