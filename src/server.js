import express from "express";
import compression from "compression";
import ssr from "./backend/routes/ssr";
import moongoose from "mongoose";
import Data from "./backend/dataAccess/repository";
const app = express();
const dbRoute = "mongodb+srv://vijay:vijaymourya@cluster0-nsvjo.mongodb.net/test?retryWrites=true&w=majority";

app.use(compression());
app.use(express.static("dist/public"));

moongoose.connect(dbRoute, {useUnifiedTopology: true, useNewUrlParser: true});
const db = moongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use("/putData/", async (req, res) => {
    let data = new Data();

    const title = req.query.title, description = req.query.description;

    data.id = 1;
    data.title = title;
    data.description = description;

    data.save(err => {
        if(err) return res.json({success: false, error: err});
        return res.json({success: true, req : req.query});
    })
})
app.use("/", ssr);

const port = process.env.PORT || 3030;
app.listen(port, function(){
    console.log(`Running on ${port}`);
})