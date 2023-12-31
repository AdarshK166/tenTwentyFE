const path = require("path");

module.exports = {
    mode: "development",
    entry: "/src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js",
    },

    target: "web",
    devServer: {
        port: "3000",
        static: ["./public"],
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        extensions: [".js"],
    },
    module: {
        rules: [
            {
                test: /\.sass|scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use: 'file-loader',     
            }
        ],
    },
};