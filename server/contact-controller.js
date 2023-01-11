
//
//  contact-controller.js
//
//  © Zoraja Consulting. All rights reserved but even though use it.
//  vJan23
//

const { parse: parseQuerystring } = require('querystring');

function createContactMessage(request, response) {
	let data = '';

	request.on('data', (chunk) => {
		data += chunk.toString();
	})

	request.on('end', () => {
		const messageInfo = parseQuerystring(data);

		response.setHeader('Content-Type', 'text/html');
		response.write(`
			<h3>Message successfully created!</h3>
			<p><strong>Contact name:</strong> ${messageInfo.name}</p>
			<p><strong>Contact surname:</strong> ${messageInfo.surname}</p>
			<p><strong>Contact email:</strong> ${messageInfo.email}</p>
			<p><strong>Message:</strong> ${messageInfo.message}</p>
		`);

		response.end();
	})
}

module.exports = {
	createContactMessage,
};
