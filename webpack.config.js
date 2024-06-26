const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "build"),
        library: {
            type: "umd",
        },
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".tsx"],
    },
    externals: {
        react: "react",
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
};