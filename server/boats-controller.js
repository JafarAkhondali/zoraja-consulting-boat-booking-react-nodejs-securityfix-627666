
//
//  boats-controller.js
//
//  © Zoraja Consulting. All rights reserved but even though use it.
//  vJan23
//

const { parse: parseUrl } = require('url');

class Boat {
	constructor(name, type, price, length) {
		this.name = name;
		this.type = type;
		this.price = price;
		this.length = length;
	}
}

const boats = [
	new Boat('Agram', 'yacht', 1000, 44),
	new Boat('Alfa Nero', 'yacht', 700, 81),
	new Boat('Bash', 'yacht', 2500, 56),
	new Boat('Bordeaux', 'sailing', 1500, 19),
	new Boat('Deja Too', 'yacht', 2300, 52),
	new Boat('Eleuthera', 'catamaran', 2300, 18),
	new Boat('Infatuation', 'sailing', 3000, 41),
	new Boat('Lagoon', 'catamaran', 3000, 19),
	new Boat('Maraya', 'yacht', 5000, 54),
	new Boat('Ocean 5', 'sailing', 7000, 20),
	new Boat('Perseus', 'sailing', 10000, 60),
	new Boat('Prana', 'sailing', 20000, 52),
	new Boat('Privilege', 'catamaran', 20000, 18),
	new Boat('Sea Force One', 'yacht', 20000, 54),
	new Boat('State of Grace', 'sailing', 20000, 39),
	new Boat('Swan', 'sailing', 20000, 28),
	new Boat('Yapluka', 'catamaran', 20000, 20)
];

function findBoats(request, response) {
	response.setHeader('Content-Type', 'application/json');
	// TODO: Filter boats based on query parameters
	response.write(JSON.stringify(boats));

	response.end();
}

function getBoatOffers(request, response) {
	const query = parseUrl(request.url, true).query;
	const type = query.type;
	let offer;

	switch (type) {
		case 'best':
			offer = [boats[0], boats[1], boats[10], boats[11], boats[14]];
			break;
		case 'popular':
			offer = [boats[3], boats[8], boats[12], boats[16]];
			break;
	}

	response.setHeader('Content-Type', 'application/json');
	response.write(JSON.stringify(offer));

	response.end();
}

module.exports = {
	findBoats,
	getBoatOffers,
}
