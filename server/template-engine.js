
//
//  template-engine.js
//
//  © 2022 Zoraja Consulting. All rights reserved but even though use it.
//

const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');
const { PUBLIC_PATH } = require('../constants');

class TemplateEngine extends Transform {
	constructor(options) {
		super(options);
	}

	_transform(chunk, encoding, callback) {
		let chunkString = chunk.toString();

		// Don't do this at home
		while(/<%include (.+)\.html%>/.test(chunkString)) {
			const startDelimiter = '<%include';
			const endDelimiter = '%>';
			const startIndex = chunkString.indexOf(startDelimiter);
			const endIndex = chunkString.indexOf(endDelimiter);

			if (startIndex > -1 && endIndex > - 1 && startIndex < endIndex) {
				const includeSubstring = chunkString.substring(startIndex, endIndex + endDelimiter.length);
				const fileName = chunkString.substring(startIndex + startDelimiter.length, endIndex).trim();
				const fileContents = fs.readFileSync(path.join(PUBLIC_PATH, fileName));

				chunkString = chunkString.replace(includeSubstring, fileContents);
			}
		}

		this.push(chunkString);
		callback();
	}
}

module.exports = TemplateEngine;
