import routes from "../routes";
import Video from "../models/video";

export const home = async (req, res) => {
	try {
		const videos = await Video.find({});
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

export const postUpload = async (req, res) => {
	const {
		body: { title, description },
		file: { path },
	} = req;
	const newVideo = await Video.create({
		fileUrl: path,
		title,
		description,
	});
	res.redirect(routes.videoDetail(newVideo.id));
};
// TO DO: upload and save video
export const search = (req, res) => {
	const {
		query: { term: searchingBy },
	} = req;
	res.render("search", { pageTitle: "search", searchingBy, videos });
};

export const videoDetail = (req, res) => {
	res.render("VideoDetail", { pageTitle: "video Detail" });
};
export const deleteVideo = (req, res) => {
	res.render("DeleteVideo", { pageTitle: "delete Video" });
};

export const editVideo = (req, res) =>
	res.render("editVideo", { pageTitle: "edit video" });
