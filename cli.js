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
    let parsedData = blowson(data);

    if (typeof parsedData === 'string') {
        writeFile.sync(dest, parsedData);
    } else {
        writeFile.sync(dest, `module.exports = ${stringify(blowson(parsedData))};`);
    }
    console.log('Sample data successfully extended!');
} catch (error) {
    console.error(error);
}

process.exit();