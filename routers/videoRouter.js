import express from "express";
import routes from "../routes.js";
import {
	postUpload,
	getUpload,
	videoDetail,
	deleteVideo,
	getEditVideo,
	postEditVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
//video Detail
videoRouter.get(routes.videoDetail(), videoDetail);
//edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
//delete video
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
