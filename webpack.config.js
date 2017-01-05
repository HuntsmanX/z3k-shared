'use strict';

var path = require('path');

module.exports = {

  entry: path.join(__dirname, 'src', 'index.js'),

  output: {
    path:          path.join(__dirname, 'dist'),
    filename:      'z3k-shared.js',
    library:       'z3kShared',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test:    /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        loader:  'babel-loader',
        options: {
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy', 'transform-class-properties']
        }
      }
    ]
  },

  externals: {

    "jquery": {
      commonjs:  "jquery",
      commonjs2: "jquery",
      amd:       "jquery",
      root:      "$"
    },

    "lodash": {
      commonjs:  "lodash",
      commonjs2: "lodash",
      amd:       "lodash",
      root:      "_"
    },

    "mobx": {
      commonjs:  "mobx",
      commonjs2: "mobx",
      amd:       "mobx",
      root:      "mobx"
    },

    "mobx-react": {
      commonjs:  "mobx-react",
      commonjs2: "mobx-react",
      amd:       "mobx-react",
      root:      "mobxReact"
    },

    "react": {
      commonjs:  "react",
      commonjs2: "react",
      amd:       "react",
      root:      "React"
    },

    "react-dom": {
      commonjs:  "react-dom",
      commonjs2: "react-dom",
      amd:       "react-dom",
      root:      "ReactDOM"
    }

  }

};
