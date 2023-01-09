
//
//  api-router.js
//
//  © 2022 Zoraja Consulting. All rights reserved but even though use it.
//

const { parse: parseUrl } = require('url');
const { API_BASE_PATH } = require('../constants');

class ApiRouter {
	constructor() {
		this.registeredRoutes = new Map();
	}

	handleRequest(request, response) {
		const { method, url } = request;
		const pathname = parseUrl(url).pathname;
		const key = `${method} - ${pathname}`;
		const callback = this.registeredRoutes.get(key);

		if (callback) {
			callback(request, response);
		}
	}

	registerRoute(method, url, callback) {
		const fullPathname = `${API_BASE_PATH}${url}`;

		this.registeredRoutes.set(`${method} - ${fullPathname}`, callback);
	}

	get(url, callback) {
		const method = 'GET';

		this.registerRoute(method, url, callback);

		return this;
	}

	post(url, callback) {
		const method = 'POST';

		this.registerRoute(method, url, callback);

		return this;
	}
}

module.exports = ApiRouter;
