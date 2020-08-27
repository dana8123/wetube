import "./db";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
import "./models/video";
import "./models/comment";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
	console.log(`✅Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
