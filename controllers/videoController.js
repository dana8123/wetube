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

export const videoDetail = async (req, res) => {
	const {
		params: { id },
	} = req;
	try {
		const video = await Video.findById(id);
		res.render("videoDetail", { pageTitle: "Video Detail", video });
	} catch (error) {
		console.log(error);
	}
};
export const deleteVideo = (req, res) => {
	res.render("DeleteVideo", { pageTitle: "delete Video" });
};

export const getEditVideo = async (req, res) => {
	const {
		params: { id },
	} = req;
	try {
		const video = await Video.findById(id);
		res.render("editVideo", { pageTitle: `Edit ${Video.title}`, video });
	} catch (error) {
		res.redirect(routes.home);
	}
};

export const postEditVideo = async (req, res) => {
	const {
		params: { id },
		body: { title, description },
	} = req;
	try {
		await Video.findOneAndUpdate({ _id: id }, { title, description });
		res.redirect(routes.videoDetail(id));
	} catch (error) {
		res.redirect(routes.home);
	}
};
