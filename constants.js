
//
//  constants.js
//
//  © 2020 Zoraja Consulting. All rights reserved but even though use it.
//

const path = require('path');

const PORT = process.env.PORT || 8080;
const PUBLIC_PATH = path.join(__dirname, 'public');
const API_BASE_PATH = '/api/v1';

module.exports = {
	PORT,
	PUBLIC_PATH,
	API_BASE_PATH,
};
