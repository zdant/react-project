module.exports = {
    entry: {
        'chapter_one' : './build/chapter_one/chapter_one.js',
        'chapter_two' : './build/chapter_two/chapter_two.js'
    },
    output: {
        path: './release/dist',
        filename: '[name].build.js'
    },
    resolve: {
        extensions: ['', '.Webpack.js', '.web.js', '.ts', '.js', '.tsx']
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader?harmony'}
        ]
    }
}