
//
//  webpack.config.js
//
//  © 2022 Zoraja Consulting. All rights reserved but even though use it.
//

const path = require('path');

module.exports = {
  entry: './client/index.tsx',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'public', 'scripts'),
  },
  module: {
	  rules: [
	    {
	      test: /\.[jt]sx?$/,
	      exclude: /node_modules/,
	      use: ['babel-loader']
	    }
	  ]
	},
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
