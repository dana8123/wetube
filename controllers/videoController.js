import routes from "../routes";
import video from "../models/video";

export const home = async (req, res) => {
	try {
		const videos = await video.find({});
		console.log(videos);
		res.render("Home", { pageTitle: "home", videos });
	} catch (error) {
		console.log(error);
		res.render("Home", { pageTitle: "home", videos: [] });
	}
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
