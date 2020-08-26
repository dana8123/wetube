import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
	fileUrl: {
		type: String,
		required: "File URL is required"
    },
    title: {
		type: String,
		required: "Title is required"
    },
    description: String,
    view: {
        type: Number,
        default:0
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
        
    }

});

const model = mongoose.model("video", VideoSchema);
export defualt model;

