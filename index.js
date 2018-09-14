const writeFile = require('write');
const stringify = require('json-stringify-pretty-compact');

const blowson = require('./src/blowson');

const dataPath = process.env.DATA_PATH || './data.js';
const savePath = process.env.SAVE_PATH || './data-extended.js';

const data = require(dataPath);

try {
	writeFile.sync(savePath, `module.exports = ${stringify(blowson(data))};`);
} catch (error) {
	console.error(error);
}