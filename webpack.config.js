
//
//  webpack.config.js
//
//  © 2022 Zoraja Consulting. All rights reserved but even though use it.
//

const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'public', 'scripts'),
  },
  module: {
	  rules: [
	    {
	      test: /\.m?jsx?$/,
	      exclude: /node_modules/,
	      use: ['babel-loader']
	    }
	  ]
	}
};
