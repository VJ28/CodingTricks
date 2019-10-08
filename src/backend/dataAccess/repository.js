import moongoose from "mongoose";
const Schema = moongoose.Schema;

const DataSchema = new Schema(
    {
        id: Number,
        title: String,
        description: String,
        author: String,
        publishedTime: Date,
        views: Number,
        likes: Number,
    },
    {timestamps: true}
);

module.exports = moongoose.model("Data", DataSchema);