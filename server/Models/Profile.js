import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    linkedin: {
        required: true,
        type: String
    },
    birthday: {
        required: true,
        type: String
    },
    bio: {
        required: true,
        type: String
    },
});

export default mongoose.model("Profile", schema);