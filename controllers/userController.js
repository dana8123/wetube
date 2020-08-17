export const join = (req, res) => res.render("Join", { pageTitle: "Join" });
export const login = (req, res) => res.render("Login", { pageTitle: "Login" });
export const logout = (req, res) => res.render("Logout");
export const users = (req, res) => res.render("users");
export const userDetail = (req, res) => res.render("user Detail");
export const editProfile = (req, res) =>
	res.render("editProfile", { pageTitle: "editProfile" });
export const changePassword = (req, res) =>
	res.render("changePassword", { pageTitle: "changePssword" });
