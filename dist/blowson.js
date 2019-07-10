'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));
var traverse = _interopDefault(require('traverse'));
var Chance = _interopDefault(require('chance'));
require('slugify');
require('md5');
require('date-fns');
require('numeral');
require('marked');
require('prob.js');
require('pluralize');
require('voca');
require('randexp');
require('faker');
var is = _interopDefault(require('is_js'));

// utils

// samples

/**
 * txtgen
 * @ndaidong
**/

const chance = new Chance();

function findGap(numArray) {
    let min = Math.min.apply(Math, numArray),
        max = Math.max.apply(Math, numArray),
        missingNums = [],
        i;

    for (i = min; i <= max; i++) {
        if (numArray.indexOf(i) == -1) {
            missingNums.push(i);
        }
    }

    if (missingNums.length > 0) {
        return {
            start: Math.min.apply(Math, missingNums),
            end: Math.max.apply(Math, missingNums)
        };
    } else {
        return false;
    }
}

function getNumberDirection(entries) {
    let direction = null,
        lastValue = null,
        noDirection = false,
        value;

    for (value of entries) {
        if (lastValue !== null && value > lastValue) {
            if (direction === 'desc') {
                noDirection = true;
                break;
            }
            direction = 'asc';
        }
        if (lastValue !== null && value < lastValue) {
            if (direction === 'asc') {
                noDirection = true;
                break;
            }
            direction = 'desc';
        }
        lastValue = value;
    }

    if (noDirection || direction === null) {
        return false;
    } else {
        return direction;
    }
}

function _integer(values) {
    let yes = 0;
    let no = 0;
    let intValues = [];

    values.forEach(value => {
        if (is.number(value) && Number(value) % 1 === 0) {
            yes++;
            intValues.push(parseInt(value));
        } else {
            no++;
        }
    });

    return {
        type: 'integer',
        confidence: (no === 0 ? 1 : yes / no),
        min: Math.min.apply(Math, intValues),
        max: Math.max.apply(Math, intValues),
        dir: getNumberDirection(intValues),
    };
}

function _float(values) {
    let yes = 0;
    let no = 0;
    let floatValues = [];

    values.forEach(value => {
        if (is.number(value) && Number(value) % 1 !== 0) {
            yes++;
            floatValues.push(Number(value));
        } else {
            no++;
        }
    });

    return {
        type: 'float',
        confidence: (no === 0 ? 1 : yes / no),
        min: Math.min.apply(Math, floatValues),
        max: Math.max.apply(Math, floatValues),
        dir: getNumberDirection(floatValues),
    };
}



var detectors = /*#__PURE__*/Object.freeze({
  _integer: _integer,
  _float: _float
});

module.exports = function blowson(inputData) {
    const types = {};
    const traversedData = traverse(inputData);
    const paths = traversedData.paths();
    
    // Get all types and prepare type metadata:
    paths.forEach(path => {
        if (path.length === 1) {
            types[path[0]] = {
                fields: {},
                gaps: [],
                ids: [],
            };
        }
    });

    // Get all fields for each type:
    paths.forEach(path => {
        if (path.length === 3) {
            if (types[path[0]].fields[path[2]]) {
                types[path[0]].fields[path[2]].values.push(traversedData.get(path));
            } else {
                types[path[0]].fields[path[2]] = {
                    values: [traversedData.get(path)],
                    types: [],
                    type: 'undefined',
                };
            }

            if (path[2] === 'id') {
                types[path[0]].ids.push(traversedData.get(path));
            }
        }
    });

    // Detect gaps and possible field types:
    for (const type in types) {
        types[type].gaps.push(findGap(types[type].ids));
        for (const field in types[type].fields) {
            Object.values(detectors).forEach(detector => {
                const result = detector(types[type].fields[field].values);
                if (result.confidence > 0) {
                    types[type].fields[field].types.push(detector(types[type].fields[field].values));
                }
            });
        }
    }

    // Get the most likely field type for each field:
    for (const type in types) {
        for (const field in types[type].fields) {
            types[type].fields[field].types = _.sortBy(types[type].fields[field].types, ['confidence']);
            types[type].fields[field].type = types[type].fields[field].types[0];
        }
    }

    return types;
};
