const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: {
        vendor: ["react"],
        app: ["./src/client.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist/public"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
                exclude: /node_modules/,
            },
            { 
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, "src/styles")
                ],             
                use: [
                     { loader: "style-loader" },
                     { loader: MiniCssExtractPlugin.loader },
                     { loader: "css-loader" },
                     { loader: "sass-loader" }
                ]
            },
            {
                test: /\.jpg$/,
                use: [{
                    loader: 'url-loader'
                }]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    plugins: [
        new MiniCssExtractPlugin({
        filename: "[name].css"
        })
    ]
};

module.exports = config;