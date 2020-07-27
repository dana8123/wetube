export const home = (req, res) => res.render("home", { pageTitle: "home" });

export const videos = (req, res) =>
	res.render("videos", { pageTitle: "videos" });

export const upload = (req, res) =>
	res.render("upload", { pageTitle: "upload" });

export const videoDetail = (req, res) =>
	res.render("ViedoDetail", { pageTitle: "video Detail" });

export const deleteVideo = (req, res) =>
	res.render("Delete Video", { pageTitle: "delete Video" });

export const search = (req, res) => {
	const {
		query: { term: searchingBy },
	} = req;
	res.render("SEARCH", { pageTitle: "search", searchingBy });
};

export const editVideo = (req, res) =>
	res.render("editVideo", { pageTitle: "edit video" });
