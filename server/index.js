
//
//  index.js
//
//  © 2022 Zoraja Consulting. All rights reserved but even though use it.
//

const fs = require('fs');
const http = require('http');
const path = require('path');
const ApiRouter = require('./api-router');
const TemplateEngine = require('./template-engine');
const { findBoats, getBoatOffers } = require('./boats-controller');
const { createContactMessage } = require('./contact-controller');
const { API_BASE_PATH, PORT, PUBLIC_PATH } = require('../constants');

const apiRouter = new ApiRouter();

apiRouter
	.get('/boats', findBoats)
	.get('/boats/offers', getBoatOffers)
	.post('/contact-message', createContactMessage);

const server = http.createServer();

server.on('request', (request, response) => {
	if (request.url.startsWith(API_BASE_PATH)) {
		apiRouter.handleRequest(request, response);

		return;
	}

	const decodedUrl = decodeURIComponent(request.url)
	const filePath = fs.existsSync(path.join(PUBLIC_PATH, decodedUrl)) && decodedUrl !== '/'
		? decodedUrl
		: 'index.html';
	const fileStream = fs.createReadStream(path.join(PUBLIC_PATH, filePath));

	fileStream.on('error', (error) => {
		console.log(error);

		const statusCode = error.code === 'ENOENT' ? 404 : 500;

		response.writeHead(statusCode);
		response.end();
	});

	if (filePath.endsWith('.html')) {
		const htmlProcessor = new TemplateEngine();

		fileStream.pipe(htmlProcessor).pipe(response);
	} else {
		if (filePath.endsWith('.css')) {
			response.setHeader('Content-Type', 'text/css');
		}
		fileStream.pipe(response);
	}
});

server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
