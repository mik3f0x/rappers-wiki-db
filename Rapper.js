import mongoose from "mongoose";

const Schema = mongoose.Schema;

let RapperSchema = new Schema({
    Name: {
        type: String,
        trim: true
    },
    Wikipedia_Bio: {
        type: String
    },
    Date_of_Birth: {
        type: String,
        trim: true
    },
    Origin: {
        type: String,
        trim: true
    },
    Place_of_Birth: {
        type: String,
        trim: true
    },
    Birth_Name: {
        type: String,
        trim: true
    },
    Genres: [{
        type: String,
        trim: true,
        lowercase: true
    }],
    img_url: {
        type: String,
    }
});

export default mongoose.model("rappers", RapperSchema);