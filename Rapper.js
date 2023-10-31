import mongoose from "mongoose";

const Schema = mongoose.Schema;

let RapperSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    wikipedia_bio: {
        type: String
    },
    date_of_birth: {
        type: String,
        trim: true
    },
    origin: {
        type: String,
        trim: true
    },
    place_of_birth: {
        type: String,
        trim: true
    },
    birth_name: {
        type: String,
        trim: true
    },
    genres: [{
        type: String,
        trim: true,
        lowercase: true
    }],
    img_url: {
        type: String,
    }
});

export default mongoose.model("rappers", RapperSchema);