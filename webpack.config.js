const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/entry/main.js",
    output: {
        filename: "code.js",
        path: path.join(__dirname, "src", "js")
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}