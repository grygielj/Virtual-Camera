const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({mode})=>{
    return {
        mode,
        entry: ['./src/index.js'],
        output: {
            filename: "bundle.js"
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            watchContentBase: true
        },
        module:{
            rules:[
                {
                    test: /\.css$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                    ],
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins:["@babel/plugin-proposal-class-properties"]
                        },

                    }
                },
            ]
        },

        plugins: [new HtmlWebpackPlugin({template: __dirname+"/index.html", inject: 'body'}),new CopyWebpackPlugin([
            { from: './node_modules/@fortawesome/fontawesome-free/webfonts', to: './webfonts'}
        ])],

    }
}