const path = require('path');
const SRC_DIR = path.join(__dirname, 'client', 'src');
const OUT_DIR = path.resolve(__dirname, 'public', 'build');

const rules = [
    {
        test: /\.(tsx|ts|js|jsx)/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    },
    {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                },
            },
        ],
    },
    {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry:  './client/src/index.js',
    output:{
        path: OUT_DIR,
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: {extensions: ['.js', '.jsx', '.tsx', '.ts']}
}