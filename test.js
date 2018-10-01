const writeFile = require('write');
const stringify = require('json-stringify-pretty-compact');

const blowson = require('./dist/blowson');

const testFiles = {
    './examples/kitchensink.js': './examples/kitchensink-extended.js',
    './examples/poi-comp.js': './examples/poi-comp-extended.js'
};

for (original in testFiles) {
    let extended = testFiles[original];
    const data = require(original);

    try {
        writeFile.sync(extended, `module.exports = ${stringify(blowson(data))};`);
    } catch (error) {
        console.error(error);
    }
}