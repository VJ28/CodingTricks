import moongoose from "mongoose";
const Schema = moongoose.Schema;

const DataSchema = new Schema(
    {
        id: Number,
        title: String,
        description: String
    },
    {timestamps: true}
);

module.exports = moongoose.model("Data", DataSchema);