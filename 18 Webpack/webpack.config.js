const webpack = require("webpack")

module.exports = {
    mode: "development",
    entry: "./src/principal.js",
    output: {
        filename: "principal.js",
        path: __dirname + "/public"
    },
    module: {
        rules: [ // Aqui será colocado os loaders
            {
                test: /\.css$/, // Expressão regular
                use: [
                    "style-loader", // Adiciona CSS a DOM injetando a tag <style>
                    "css-loader" // Interpreta @import, url(), etc.
                ]
            }
        ]
    }
}