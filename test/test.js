const writeFile = require('write');
const stringify = require('json-stringify-pretty-compact');
const expect = require('unexpected');
const _ = require('lodash');

const blowson = require('../dist/blowson');

const testFiles = {
    '../examples/kitchensink.js': '../examples/kitchensink-extended.js',
    '../examples/poi-comp.js': '../examples/poi-comp-extended.js',
    '../examples/quotes.js': '../examples/quotes-extended.js'
};

let parsed = {};

for (original in testFiles) {
    let extended = testFiles[original];
    const data = require(original);

    let extendedData = blowson(data);

    parsed[original] = extendedData;
    writeFile.sync(extended, `module.exports = ${stringify(extendedData)};`);
}

describe('Basics', function () {
    describe('Extend ID range', function () {
        it('in quotes: is filled', function () {
            expect(parsed['../examples/quotes.js'].quotes, 'to have length', 25);
        });
        it('in poi comp: users is filled', function () {
            expect(parsed['../examples/poi-comp.js'].users, 'to have length', 30);
        });
        it('in poi comp: userStatus is not filled', function () {
            expect(parsed['../examples/poi-comp.js'].userStatus, 'to have length', 3);
        });
        it('in kitchensink: comments is filled', function () {
            expect(parsed['../examples/kitchensink.js'].comments, 'to have length', 20);
        });
        it('in kitchensink: posts ids are correct', function () {
            let ids = _.map(parsed['../examples/kitchensink.js'].posts, 'id');
            expect(ids, 'to equal', [1, 2, 3, 4, 5]);
        });
    });
    describe('Custom field names', function() {
        it('in kitchensink: customFieldNames has surnames', function () {
            expect(parsed['../examples/kitchensink.js'].customFieldNames[0], 'to have key', 'surname');
        });
    });
    describe('Temporary fields', function () {
        it('in kitchensink: temporaryFileds has not __firstname', function () {
            expect(parsed['../examples/kitchensink.js'].temporaryFileds[0], 'not to have key', '__firstname');
            expect(parsed['../examples/kitchensink.js'].temporaryFileds[0], 'not to have key', 'firstname');
        });
        it('in quotes: temporaryFileds has not __date1', function () {
            expect(parsed['../examples/kitchensink.js'].temporaryFileds[0], 'not to have key', '__date1');
            expect(parsed['../examples/kitchensink.js'].temporaryFileds[0], 'not to have key', 'date1');
        });
    });
});