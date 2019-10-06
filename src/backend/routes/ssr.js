import express from "express";
import React from "react";
import App from "../../react-client/components/app";
import {StaticRouter} from "react-router-dom";
import { renderToString } from "react-dom/server";
const router = express.Router();

router.get("/", async (req, res) => {

    const reactComp = renderToString(<StaticRouter location="/"><App /></StaticRouter>);

    res.send(`
    <html>
        <head>
            <title>My First SSR</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
        <div id="root">${reactComp}</div>
        </body>
        <script src="/app.js" charset="utf-8"></script>
    </html>`);
});

export default router;
