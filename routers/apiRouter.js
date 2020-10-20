import express from "express";
import routes from "../routes";
import {
	postAddComment,
	postregisterView,
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postregisterView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
