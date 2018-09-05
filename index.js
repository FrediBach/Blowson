const writeFile = require('write');
const stringify = require('json-stringify-pretty-compact');

const extendData = require('./src/extend');

const dataPath = process.env.DATA_PATH || './data.js';
const savePath = process.env.SAVE_PATH || './data-extended.js';

const data = require(dataPath);

try {
	writeFile.sync(savePath, `module.exports = ${stringify(extendData(data))};`);
} catch (error) {
	console.error(error);
}