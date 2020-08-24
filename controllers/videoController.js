import { videos } from "../db";
import { routes } from "../routes";

export const home = (req, res) => {
	res.render("Home", { pageTitle: "home", videos });
};

export const getUpload = (req, res) => {
	res.render("Upload", { pageTitle: "Upload" });
};

export const postUpload = (req, res) => {
	const {
		body: { file, title, description },
	} = req;
	res.redirect(routes.videoDetail(3526666));
};
// TO DO: upload and save video

export const videoDetail = (req, res) => {
	res.render("VideoDetail", { pageTitle: "video Detail" });
};
export const deleteVideo = (req, res) => {
	res.render("DeleteVideo", { pageTitle: "delete Video" });
};
export const search = (req, res) => {
	const {
		query: { term: searchingBy },
	} = req;
	res.render("search", { pageTitle: "search", searchingBy, videos });
};

export const editVideo = (req, res) =>
	res.render("editVideo", { pageTitle: "edit video" });
