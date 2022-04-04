const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin =        require('mini-css-extract-Plugin');
const devMode = process.env.NODE_ENV!=='production';

module.exports = {
    entry: './frontend/app.js',
    output:{
        path:path.join(__dirname, 'backend/public'),
        filename: 'js/bundle.js'
    },
    performance: { hints: false },
    mode: 'production',
    module:{
        rules: [
            { 
                test:/\.css/,
                use:[
                   devMode ? 'style-loader': MiniCssExtractPlugin.loader,
                   'css-loader' 
                ]

            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin ({
            template: './frontend/index.html',
            minify: {
                collapseWhitespace:true,
                removeComments:true,
                removeRedundantAttributes:true,
                removeScriptTypeAttributes:true,
                removeStyleLinkTypeAttributes:true,
                useShortDoctype:true

            }
        }),
        new MiniCssExtractPlugin({
            filename:'css/bundle.css'
        })
    ],
    devtool:'source-map'
    
};