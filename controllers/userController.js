import routes from "../routes.js";

export const getJoin = (req, res) => {
	res.render("Join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
	const {
		body: { name, email, password, password2 },
	} = req;
	if (password !== password2) {
		res.status(400);
	} else {
		//toDo register User, also log user in
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

export const logout = (req, res) => res.render("Logout");
export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("user Detail");
export const editProfile = (req, res) =>
	res.render("editProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
	res.render("changePassword", { pageTitle: "changePssword" });
