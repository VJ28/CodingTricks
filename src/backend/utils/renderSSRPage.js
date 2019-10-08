import React from "react";
import App from "../../react-client/components/app";
import {StaticRouter} from "react-router-dom";
import { renderToString } from "react-dom/server";


export function ssrTemplate(req, res){
    const reactComp = renderToString(<StaticRouter location={req.url}><App /></StaticRouter>);

    res.send(`
    <html>
        <head>
            <title>My First SSR</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" type="text/css" href="/app.css"/>
        </head>
        <body>
        <div id="root">${reactComp}</div>
        </body>
        <script src="/app.js" charset="utf-8"></script>
    </html>`);
}