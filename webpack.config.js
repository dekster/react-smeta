'use strict';

module.exports = {
    entry: './src/app.js',
    output: {
      filename: './build/scripts.js',
      library: 'apps'
    },
    watch: true,
    devtool: "eval", 
    watchOptions: {
      aggregateTimeout: 100
    }
};