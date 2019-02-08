const writeFile = require('write');
const stringify = require('json-stringify-pretty-compact');
const expect = require('unexpected');
const _ = require('lodash');

const blowson = require('../dist/blowson');

const testFiles = {
    '../examples/kitchensink.js': 'examples/kitchensink-extended.js',
    '../examples/poi-comp.js': 'examples/poi-comp-extended.js',
    '../examples/quotes.js': 'examples/quotes-extended.js',
    '../examples/union-types.js': 'examples/union-types-extended.js'
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

describe('Detections', function () {
    describe('Keys', function () {
        it('age', function () {
            expect(parsed['../examples/kitchensink.js'].keyDetections[7].age, 'to be positive');
        });
        it('country', function () {
            expect(parsed['../examples/kitchensink.js'].keyDetections[7].country, 'to have length', 2);
        });
        it('email', function () {
            expect(parsed['../examples/kitchensink.js'].keyDetections[7].email, 'to contain', '@');
        });
    });
    describe('Content', function () {
        it('word', function () {
            expect(parsed['../examples/kitchensink.js'].contentDetections[7].word, 'to be non-empty');
            expect(parsed['../examples/kitchensink.js'].contentDetections[7].word.split(' ').length, 'to equal', 1);
        });
        it('sentence', function () {
            expect(parsed['../examples/kitchensink.js'].contentDetections[7].sentence, 'to be non-empty');
            expect(parsed['../examples/kitchensink.js'].contentDetections[7].sentence.split(' ').length, 'to be greater than', 1);
            expect(parsed['../examples/kitchensink.js'].contentDetections[7].sentence.slice(-1), 'to be one of', ['.','!','?','"']);
        });
        it('headline', function () {
            expect(parsed['../examples/kitchensink.js'].contentDetections[7].headline, 'to be non-empty');
            expect(parsed['../examples/kitchensink.js'].contentDetections[7].headline.split(' ').length, 'to be greater than', 1);
            expect(parsed['../examples/kitchensink.js'].contentDetections[7].headline.slice(-1), 'not to be one of', ['.', '!', '?','"']);
        });
    });
    describe('String Patterns', function () {
        it('code', function () {
            expect(parsed['../examples/kitchensink.js'].contentDetections[7].pattern, 'to match', /[0-9]{2}:[A-Z]{4}:[0-9]{2}-[a-z]{1}/);
        });
        it('phone', function () {
            expect(parsed['../examples/kitchensink.js'].contentDetections[7].phone, 'to match', /\+\+[0-9]{2} \([0-9]{2}\) [0-9]{3} [0-9]{2} [0-9]{2}/);
        });
    });
    describe('Repeated Values', function () {
        it('points', function () {
            expect(parsed['../examples/poi-comp.js'].waypoints[7].points, 'to be one of', [10, 100]);
            expect(parsed['../examples/poi-comp.js'].waypoints[34].points, 'to be one of', [10, 100]);
            expect(parsed['../examples/poi-comp.js'].waypoints[66].points, 'to be one of', [10, 100]);
            expect(parsed['../examples/poi-comp.js'].waypoints[243].points, 'to be one of', [10, 100]);
        });
    });
    describe('Ranges', function () {
        it('lat', function () {
            expect(parsed['../examples/poi-comp.js'].waypoints[21].lat, 'to be within', 2.589, 3.889);
            expect(parsed['../examples/poi-comp.js'].waypoints[99].lat, 'to be within', 2.589, 3.889);
            expect(parsed['../examples/poi-comp.js'].waypoints[177].lat, 'to be within', 2.589, 3.889);
            expect(parsed['../examples/poi-comp.js'].waypoints[217].lat, 'to be within', 2.589, 3.889);
        });
        it('lng', function () {
            expect(parsed['../examples/poi-comp.js'].waypoints[21].lng, 'to be within', 40.787, 51.787);
            expect(parsed['../examples/poi-comp.js'].waypoints[99].lng, 'to be within', 40.787, 51.787);
            expect(parsed['../examples/poi-comp.js'].waypoints[177].lng, 'to be within', 40.787, 51.787);
            expect(parsed['../examples/poi-comp.js'].waypoints[217].lng, 'to be within', 40.787, 51.787);
        });
    });
    describe('Direction', function () {
        it('growing', function () {
            expect(parsed['../examples/kitchensink.js'].numberDetections[5].growingFloat, 'to be less than', parsed['../examples/kitchensink.js'].numberDetections[6].growingFloat);
            expect(parsed['../examples/kitchensink.js'].numberDetections[10].growingFloat, 'to be less than', parsed['../examples/kitchensink.js'].numberDetections[11].growingFloat);
            expect(parsed['../examples/kitchensink.js'].numberDetections[18].growingFloat, 'to be less than', parsed['../examples/kitchensink.js'].numberDetections[19].growingFloat);
        });
        it('shrinking', function () {
            expect(parsed['../examples/kitchensink.js'].numberDetections[5].shrinkingInt, 'to be greater than', parsed['../examples/kitchensink.js'].numberDetections[6].shrinkingInt);
            expect(parsed['../examples/kitchensink.js'].numberDetections[10].shrinkingInt, 'to be greater than', parsed['../examples/kitchensink.js'].numberDetections[11].shrinkingInt);
            expect(parsed['../examples/kitchensink.js'].numberDetections[18].shrinkingInt, 'to be greater than', parsed['../examples/kitchensink.js'].numberDetections[19].shrinkingInt);
        });
    });
    describe('Inter Field Rules', function () {
        it('from to', function () {
            expect(parsed['../examples/kitchensink.js'].interFieldRules[5].from, 'to be less than', parsed['../examples/kitchensink.js'].interFieldRules[5].to);
            expect(parsed['../examples/kitchensink.js'].interFieldRules[10].from, 'to be less than', parsed['../examples/kitchensink.js'].interFieldRules[10].to);
            expect(parsed['../examples/kitchensink.js'].interFieldRules[18].from, 'to be less than', parsed['../examples/kitchensink.js'].interFieldRules[18].to);
        });
        it('big small', function () {
            expect(parsed['../examples/kitchensink.js'].interFieldRules[5].big, 'to be greater than', parsed['../examples/kitchensink.js'].interFieldRules[5].small);
            expect(parsed['../examples/kitchensink.js'].interFieldRules[10].big, 'to be greater than', parsed['../examples/kitchensink.js'].interFieldRules[10].small);
            expect(parsed['../examples/kitchensink.js'].interFieldRules[18].big, 'to be greater than', parsed['../examples/kitchensink.js'].interFieldRules[18].small);
        });
    });
    describe('Occurrence Frequency', function () {
        it('sex', function () {
            expect(
                _.sumBy(
                    parsed['../examples/kitchensink.js'].occurrencyFrequencies,
                    ({ sex }) => Number(sex === 'm')
                ), 
                'to be close to',
                _.sumBy(
                    parsed['../examples/kitchensink.js'].occurrencyFrequencies,
                    ({ sex }) => Number(sex === 'f')
                ),
                15
            );
        });
    });
    describe('Optionals', function () {
        it('field is optional', function () {
            expect(
                _.sumBy(
                    parsed['../examples/kitchensink.js'].optionals,
                    ({ optional }) => Number(typeof optional !== 'undefined')
                ),
                'to be close to',
                _.sumBy(
                    parsed['../examples/kitchensink.js'].optionals,
                    ({ optional }) => Number(typeof optional === 'undefined')
                ),
                15
            );
        });
    });
    describe('Steps', function () {
        it('100s', function () {
            expect(parsed['../examples/kitchensink.js'].steps[6].step100 % 100, 'to equal', 0);
            expect(parsed['../examples/kitchensink.js'].steps[11].step100 % 100, 'to equal', 0);
            expect(parsed['../examples/kitchensink.js'].steps[16].step100 % 100, 'to equal', 0);
            expect(parsed['../examples/kitchensink.js'].steps[21].step100 % 100, 'to equal', 0);
        });
        it('250s', function () {
            expect(parsed['../examples/kitchensink.js'].steps[6].step250 % 250, 'to equal', 0);
            expect(parsed['../examples/kitchensink.js'].steps[11].step250 % 250, 'to equal', 0);
            expect(parsed['../examples/kitchensink.js'].steps[16].step250 % 250, 'to equal', 0);
            expect(parsed['../examples/kitchensink.js'].steps[21].step250 % 250, 'to equal', 0);
        });
    });
    describe('Floating point Precision', function () {
        it('precision 1', function () {
            expect(parsed['../examples/kitchensink.js'].floatingPointPrecision[7].precision1, 'to equal', Number(parsed['../examples/kitchensink.js'].floatingPointPrecision[7].precision1.toFixed(1)));
            expect(parsed['../examples/kitchensink.js'].floatingPointPrecision[9].precision1, 'to equal', Number(parsed['../examples/kitchensink.js'].floatingPointPrecision[9].precision1.toFixed(1)));
            expect(parsed['../examples/kitchensink.js'].floatingPointPrecision[16].precision1, 'to equal', Number(parsed['../examples/kitchensink.js'].floatingPointPrecision[16].precision1.toFixed(1)));
            expect(parsed['../examples/kitchensink.js'].floatingPointPrecision[22].precision1, 'to equal', Number(parsed['../examples/kitchensink.js'].floatingPointPrecision[22].precision1.toFixed(1)));
        });
        it('precision 2', function () {
            expect(parsed['../examples/kitchensink.js'].floatingPointPrecision[7].precision2, 'to equal', Number(parsed['../examples/kitchensink.js'].floatingPointPrecision[7].precision2.toFixed(2)));
            expect(parsed['../examples/kitchensink.js'].floatingPointPrecision[9].precision2, 'to equal', Number(parsed['../examples/kitchensink.js'].floatingPointPrecision[9].precision2.toFixed(2)));
            expect(parsed['../examples/kitchensink.js'].floatingPointPrecision[16].precision2, 'to equal', Number(parsed['../examples/kitchensink.js'].floatingPointPrecision[16].precision2.toFixed(2)));
            expect(parsed['../examples/kitchensink.js'].floatingPointPrecision[22].precision2, 'to equal', Number(parsed['../examples/kitchensink.js'].floatingPointPrecision[22].precision2.toFixed(2)));
        });
        it('precision 4', function () {
            expect(parsed['../examples/kitchensink.js'].floatingPointPrecision[7].precision4, 'to equal', Number(parsed['../examples/kitchensink.js'].floatingPointPrecision[7].precision4.toFixed(4)));
            expect(parsed['../examples/kitchensink.js'].floatingPointPrecision[9].precision4, 'to equal', Number(parsed['../examples/kitchensink.js'].floatingPointPrecision[9].precision4.toFixed(4)));
            expect(parsed['../examples/kitchensink.js'].floatingPointPrecision[16].precision4, 'to equal', Number(parsed['../examples/kitchensink.js'].floatingPointPrecision[16].precision4.toFixed(4)));
            expect(parsed['../examples/kitchensink.js'].floatingPointPrecision[22].precision4, 'to equal', Number(parsed['../examples/kitchensink.js'].floatingPointPrecision[22].precision4.toFixed(4)));
        });
    });
    describe('Relationship Fields', function () {
        it('firstname', function () {
            expect(parsed['../examples/kitchensink.js'].relationShipTargets[3].text, 'to contain', parsed['../examples/kitchensink.js'].relationshipSources[parsed['../examples/kitchensink.js'].relationShipTargets[3].relationshipSource_id-1].firstname);
            expect(parsed['../examples/kitchensink.js'].relationShipTargets[9].text, 'to contain', parsed['../examples/kitchensink.js'].relationshipSources[parsed['../examples/kitchensink.js'].relationShipTargets[9].relationshipSource_id - 1].firstname);
            expect(parsed['../examples/kitchensink.js'].relationShipTargets[19].text, 'to contain', parsed['../examples/kitchensink.js'].relationshipSources[parsed['../examples/kitchensink.js'].relationShipTargets[19].relationshipSource_id - 1].firstname);
        });
        it('age', function () {
            expect(parsed['../examples/kitchensink.js'].relationShipTargets[3].text, 'to contain', String(parsed['../examples/kitchensink.js'].relationshipSources[parsed['../examples/kitchensink.js'].relationShipTargets[3].relationshipSource_id - 1].age));
            expect(parsed['../examples/kitchensink.js'].relationShipTargets[9].text, 'to contain', String(parsed['../examples/kitchensink.js'].relationshipSources[parsed['../examples/kitchensink.js'].relationShipTargets[9].relationshipSource_id - 1].age));
            expect(parsed['../examples/kitchensink.js'].relationShipTargets[19].text, 'to contain', String(parsed['../examples/kitchensink.js'].relationshipSources[parsed['../examples/kitchensink.js'].relationShipTargets[19].relationshipSource_id - 1].age));
        });
    });
});

describe('Templates', function () {
    describe('Filters', function () {
        it('slug', function () {
            expect(parsed['../examples/kitchensink.js'].filters[0].slug, 'to equal', 'test-string');
        });
        it('lower', function () {
            expect(parsed['../examples/kitchensink.js'].filters[0].lower, 'to equal', 'test string');
        });
    });
    describe('Defaults', function () {

    });
    describe('Random Variable', function () {

    });
    describe('Faker JS API Methods', function () {

    });
    describe('Regex Patterns', function () {

    });
    describe('Sentence Construction', function () {

    });
});