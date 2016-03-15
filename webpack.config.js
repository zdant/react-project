module.exports = {
    entry: {
        'chapter_one' : './build/chapter_one/chapter_one.js',
        'chapter_two' : './build/chapter_two/chapter_two.js',
        'chapter_three': './build/chapter_three/chapter_three.js',
        'chapter_four': './build/chapter_four/chapter_four.js'
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
};