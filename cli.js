#!/usr/bin/env node

const writeFile = require('write');
const stringify = require('json-stringify-pretty-compact');

const blowson = require('./dist/blowson');

const [, , ...args] = process.argv;

if (args.length < 2) {
    console.log('Source and destination arguments missing!');
    process.exit();
}

const src = './' + args[0];
const dest = './' + args[1];

const data = require(src);

try {
    writeFile.sync(dest, `module.exports = ${stringify(blowson(data))};`);
    console.log('Sample data successfully extended!');
} catch (error) {
    console.error(error);
}

process.exit();