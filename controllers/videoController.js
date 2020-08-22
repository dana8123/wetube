import { videos } from "../db";

export const home = (req, res) => {
	res.render("Home", { pageTitle: "home", videos });
};
export const upload = (req, res) => {
	res.render("Upload", { pageTitle: "Upload" });
};
export const videoDetail = (req, res) => {
	res.render("ViedoDetail", { pageTitle: "video Detail" });
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
