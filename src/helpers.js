import _ from 'lodash';
import Chance from 'chance';
import slugify from 'slugify';
import md5 from 'md5';
import {format} from 'date-fns';
import numeral from 'numeral';
import marked from 'marked';
import Prob from 'prob.js';
import pluralize from 'pluralize';
import v from 'voca';
import RandExp from 'randexp';
import faker from 'faker';

import {
    sentence,
    paragraph,
    generator
} from './txtgen/main'; // Extended version of the Txtgen library. Original at: https://github.com/ndaidong/txtgen


const chance = new Chance();

export function randomTime() {
    let hours = String(chance.hour({ twentyfour: true })),
        minutes = String(chance.minute()),
        seconds = String(chance.second());

    if (hours.length === 1) hours = '0' + hours;
    if (minutes.length === 1) minutes = '0' + minutes;
    if (seconds.length === 1) seconds = '0' + seconds;

    if (Math.random() >= 0.5) {
        return [hours, minutes, seconds].join(':');
    } else {
        return [hours, minutes].join(':');
    }
}

export function randomDate(start, end) {
    var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export function randomDatetime(start, end) {
    var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hours = '' + d.getHours(),
        minutes = '' + d.getMinutes(),
        seconds = '' + d.getSeconds();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hours.length < 2) hours = '0' + hours;
    if (minutes.length < 2) minutes = '0' + minutes;
    if (seconds.length < 2) seconds = '0' + seconds;

    return [year, month, day].join('-') + 'T' + [hours, minutes, seconds].join(':') + '+01:00';
}

export function findGap(numArray) {
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

export function floatPrecision(a) {
    if (!isFinite(a)) return 0;

    var e = 1, p = 0;

    while (Math.round(a * e) / e !== a) {
        e *= 10; p++;
    }

    return p;
}

export function getMaxPrecision(floatArray) {
    let maxPrecision = 0,
        value;

    for (value of floatArray) {
        let precision = floatPrecision(value);

        if (precision > maxPrecision) {
            maxPrecision = precision;
        }
    }

    return maxPrecision;
}

export function everythingCapitalized(stringArray) {
    let isCapitalized = true,
        str;

    for (str of stringArray) {
        if (capitalize(str) !== str) {
            isCapitalized = false;
            break;
        }
    }

    return isCapitalized;
}

export function minNumber(intArray) {
    return Math.min.apply(Math, intArray);
}

export function maxNumber(intArray) {
    return Math.max.apply(Math, intArray);
}

export function minGapOfIntArray(intArray) {
    let minGap = 999999999,
        value1,
        value2;

    for (value1 of intArray) {
        for (value2 of intArray) {
            if (value1 !== value2 && Math.abs(value1 - value2) < minGap) {
                minGap = Math.abs(value1 - value2);
            }
        }
    }

    return minGap;
}

export function randomIntWithStep(min, max, step) {
    let delta,
        range,
        rand;

    if (arguments.length < 2) {
        max = min;
        min = 0;
    }

    if (!step) {
        step = 1;
    }

    delta = max - min;
    range = delta / step;
    rand = Math.random();
    rand *= range;
    rand = Math.floor(rand);
    rand *= step;
    rand += min;

    return rand;
}

export function normalDistRandomInt(min, max) {
    let normal = Math.abs((Prob.normal(0, 1)() + 3) / 6),
        result = Math.floor((normal * (max - min)) + min);

    if (result < min) result = min;
    if (result > max) result = max;

    return result;
}

export function minStrLength(strArray) {
    return Math.min.apply(Math, strArray.map(function (str) { return str.length; }));
}

export function maxStrLength(strArray) {
    return Math.max.apply(Math, strArray.map(function (str) { return str.length; }));
}

export function minWordCount(strArray) {
    return Math.min.apply(Math, strArray.map(function (str) {
        let parts = _.compact(str.replace(/[^\sA-Za-z]/g, '').split(' '));
        return parts.length; 
    }));
}

export function maxWordCount(strArray) {
    return Math.max.apply(Math, strArray.map(function (str) {
        let parts = _.compact(str.replace(/[^\sA-Za-z]/g, '').split(' '));
        return parts.length; 
    }));
}

export function minSentenceCount(strArray) {
    return Math.min.apply(Math, strArray.map(function (str) {
        let parts = _.compact(str.split(/[\.\!\?]+/));
        return parts.length; 
    }));
}

export function maxSentenceCount(strArray) {
    return Math.max.apply(Math, strArray.map(function (str) {
        let parts = _.compact(str.split(/[\.\!\?]+/));
        return parts.length; 
    }));
}

export function minParagraphCount(strArray) {
    return Math.min.apply(Math, strArray.map(function (str) {
        let parts = _.compact(str.replace(/\n$/gm, '').split(/\n/));
        return parts.length;
    }));
}

export function maxParagraphCount(strArray) {
    return Math.max.apply(Math, strArray.map(function (str) {
        let parts = _.compact(str.replace(/\n$/gm, '').split(/\n/));
        return parts.length;
    }));
}

export function minDate(dateArray) {
    return new Date(Math.min.apply(null, dateArray));
}

export function maxDate(dateArray) {
    return new Date(Math.max.apply(null, dateArray));
}

export function convertStringDateArray(stringDateArray) {
    let newArray = [],
        dateString;

    for (dateString of stringDateArray) {
        newArray.push(new Date(dateString));
    }

    return newArray;
}

export function capitalize(str) {
    return str.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
};

export function isDateString(str) {
    return /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(str);
}

export function isDatetimeString(str) {
    return /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(str);
}

export function isTimeString(str) {
    return /^[0-9]{2}:[0-9]{2}:[0-9]{2}$|^[0-9]{2}:[0-9]{2}$/.test(str);
}

export function getWeights(allEntries, uniqueEntries) {
    let weightedEntries = {},
        weights = [],
        entry;
    
    for (entry of allEntries) {
        if (typeof weightedEntries[entry] === 'undefined') {
            weightedEntries[entry] = 1;
        } else {
            weightedEntries[entry]++;
        }
    }

    for (entry of uniqueEntries) {
        weights.push(weightedEntries[entry]);
    }

    return weights;
}

export function getNumberDirection(entries) {
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

export function getDateDirection(entries) {
    let direction = null,
        lastValue = null,
        noDirection = false,
        value;

    for (value of entries) {
        let dateValue = new Date(value);

        if (lastValue !== null && dateValue > lastValue) {
            if (direction === 'desc') {
                noDirection = true;
                break;
            }
            direction = 'asc';
        }
        if (lastValue !== null && dateValue < lastValue) {
            if (direction === 'asc') {
                noDirection = true;
                break;
            }
            direction = 'desc';
        }
        lastValue = dateValue;
    }

    if (noDirection || direction === null) {
        return false;
    } else {
        return direction;
    }
}

export function filterValue(value, filter) {
    if (value.constructor !== Array) {
        value = String(value);
        let numValue = Number(value);

        if (filter === 'slug') {
            return slugify(value, { lower: true });
        } else if (filter === 'lower') {
            return value.toLowerCase();
        } else if (filter === 'upper') {
            return value.toUpperCase();
        } else if (filter === 'md5') {
            return md5(value);
        } else if (filter === 'capitalize') {
            return capitalize(value);
        } else if (filter === 'plural') {
            return pluralize.plural(value);
        } else if (filter === 'singular') {
            return pluralize.singular(value);
        } else if (filter === 'trim') {
            return _.trim(value);
        } else if (filter === 'md') {
            return marked(value);
        } else if (numValue !== NaN && filter === 'round') {
            return Math.round(value);
        } else if (numValue !== NaN && filter === 'floor') {
            return Math.floor(value);
        } else if (numValue !== NaN && filter === 'ceil') {
            return Math.ceil(value);
        } else if (numValue !== NaN && filter.substring(0, 5) === 'plus:') {
            let filterSplit = filter.split(':');
            return (numValue + Number(filterSplit[1]));
        } else if (numValue !== NaN && filter.substring(0, 6) === 'minus:') {
            let filterSplit = filter.split(':');
            return (numValue - Number(filterSplit[1]));
        } else if (numValue !== NaN && filter.substring(0, 6) === 'times:') {
            let filterSplit = filter.split(':');
            return (numValue * Number(filterSplit[1]));
        } else if (numValue !== NaN && filter.substring(0, 4) === 'max:') {
            let filterSplit = filter.split(':'),
                limit = Number(filterSplit[1]);
            if (numValue > limit) {
                return limit;
            } else {
                return numValue;
            }
        } else if (numValue !== NaN && filter.substring(0, 4) === 'min:') {
            let filterSplit = filter.split(':'),
                limit = Number(filterSplit[1]);
            if (numValue < limit) {
                return limit;
            } else {
                return numValue;
            }
        } else if (numValue !== NaN && filter.substring(0, 4) === 'num:') {
            let filterSplit = filter.split(':');
            return numeral(numValue).format(filterSplit[1]);
        } else if (filter === 'optional' && Math.random() >= 0.5) {
            return '';
        } else if (filter.substring(0, 5) === 'date:') {
            let filterSplit = filter.split(':');
            return format(new Date(value), filterSplit[1]);
        } else {
            return value;
        }
    } else {
        if (filter === 'count') {
            return value.length;
        } else if (filter === 'max') {
            return maxNumber(value);
        } else if (filter === 'min') {
            return minNumber(value);
        } else if (filter === 'sum') {
            return _.sum(value);
        } else if (filter === 'avg') {
            return _.mean(value);
        } else if (filter === 'rand') {
            return _.sample(value);
        } else {
            return value;
        }
    }
}

export function applyFilters(value, filters) {
    let filtered = filterValue(value, filters[1]),
        nr = 2;

    while (filters.length > nr) {
        filtered = filterValue(filtered, filters[nr]);
        nr++;
    }

    return filtered;
}

export function getValuesByPath(path, reftype, id, data) {
    let type = path[0];

    if (typeof data[type] !== 'undefined') {
        let row, values = [];

        for (row of data[type]) {
            if (row[`${reftype}_id`] === id) {
                if (path.length > 1) {
                    values.push(row[path[1]]);
                } else {
                    values.push(row.id);
                }
            }
        }

        // Just return the ids
        return values;
    } else {
        return [];
    }
}

export function getFieldByPath(row, path, data) {
    let found = false,
        nextSteps = path.slice(0),
        currentRow = row;

    if (path.length === 0) {
        return null;
    }

    while (!found) {
        let nextStep = nextSteps.shift();

        if (typeof currentRow[nextStep + '_id'] !== 'undefined') {
            let item,
                pluralNextStep = pluralize.plural(nextStep);

            if (typeof data[pluralNextStep] !== 'undefined') {
                for (item in data[pluralNextStep]) {
                    if (data[pluralNextStep][item]['id'] === currentRow[nextStep + '_id']) {
                        currentRow = data[pluralNextStep][item];
                    }
                }
            }
        } else if (typeof currentRow[nextStep] !== 'undefined') {
            if (typeof currentRow[nextStep][path[path.length - 1]] !== 'undefined') {
                return currentRow[nextStep][path[path.length - 1]];
            } else {
                if (typeof currentRow[nextStep] !== 'object') {
                    return currentRow[nextStep];
                } else {
                    return null;
                }
            }
        } else {
            return null;
        }

        if (nextSteps.length === 0) {
            found = true;
        }
    }

    return null;
}

export function detectFieldType(fieldValue) {
    let fieldType = 'undefined',
        containsTemplate = false;

    if (typeof fieldValue === 'boolean') {
        fieldType = 'boolean';
    } else if (typeof fieldValue === 'number') {
        if (Math.round(fieldValue) === fieldValue) {
            fieldType = 'int';
        } else {
            fieldType = 'float';
        }
    } else if (typeof fieldValue === 'string') {
        if (isDateString(fieldValue)) {
            fieldType = 'date';
        } else if (isDatetimeString(fieldValue)) {
            fieldType = 'datetime';
        } else if (isTimeString(fieldValue)) {
            fieldType = 'time';
        } else if (fieldValue.length === 1) {
            fieldType = 'char';
        } else {
            if (/{{\s*([\w\.\?\|\:\, ]+)\s*}}/.test(fieldValue)) {
                containsTemplate = true;
            }
            fieldType = 'string';
        }
    } else if (typeof fieldValue === 'object') {
        if (Array.isArray(fieldValue)) {
            fieldType = 'array';
        } else {
            fieldType = 'JSON';
        }
    }

    return {
        fieldType: fieldType,
        containsTemplate: containsTemplate
    }
}

export function renameProperty(obj, oldName, newName) {
    if (oldName == newName) {
        return obj;
    }

    if (obj.hasOwnProperty(oldName)) {
        obj[newName] = obj[oldName];
        delete obj[oldName];
    }

    return obj;
}

export function getFieldRules(key, value, type, prevFields) {
    let rules = [];

    for (prevField of prevFields) {
        if ((type === 'int' || type === 'float') && (prevField.type === 'int' || prevField.type === 'float')) {
            if (value > prevField.value) {
                rules.push(`${key}>${prevField.key}`);
            } else if (value < prevField.value) {
                rules.push(`${key}<${prevField.key}`);
            } else {
                rules.push(`${key}=${prevField.key}`);
            }
        } else if ((type === 'date' && prevField.type === 'date') || (type === 'datetime' && prevField.type === 'datetime')) {
            let valueDate = new Date(value),
                prevValueDate = new Date(prevField.value);

            if (valueDate > prevValueDate) {
                rules.push(`${key}>${prevField.key}`);
            } else if (valueDate < prevValueDate) {
                rules.push(`${key}<${prevField.key}`);
            } else {
                rules.push(`${key}=${prevField.key}`);
            }
        }
    }

    return rules;
}

export function removeIncompatibleRules(rules) {
    let filteredRules = [],
        rule;

    for (rule of rules) {
        let ruleSplit = rule.split(/>|<|=/);
        
        if (rule.indexOf('<') > -1 && rules.indexOf(`${ruleSplit[0]}>${ruleSplit[1]}`) === -1 && rules.indexOf(`${ruleSplit[0]}=${ruleSplit[1]}`) === -1) {
            filteredRules.push(rule);
        }
        if (rule.indexOf('>') > -1 && rules.indexOf(`${ruleSplit[0]}<${ruleSplit[1]}`) === -1 && rules.indexOf(`${ruleSplit[0]}=${ruleSplit[1]}`) === -1) {
            filteredRules.push(rule);
        }
        if (rule.indexOf('=') > -1 && rules.indexOf(`${ruleSplit[0]}>${ruleSplit[1]}`) === -1 && rules.indexOf(`${ruleSplit[0]}<${ruleSplit[1]}`) === -1) {
            filteredRules.push(rule);
        }
    }

    return filteredRules;
}

export function rulesAreValid(value, rules, row, type) {
    if (rules.length === 0) return true;
    if (value === '') return false;

    let rule;

    for (rule of rules) {
        let ruleSplit = rule.split(/>|<|=/);

        if (typeof row[ruleSplit[1]] !== 'undefined' && row[ruleSplit[1]] !== '') {
            if (type === 'int' || type === 'float') {
                if (rule.indexOf('<') > -1 && value >= row[ruleSplit[1]]) {
                    return false;
                }
                if (rule.indexOf('>') > -1 && value <= row[ruleSplit[1]]) {
                    return false;
                }
                if (rule.indexOf('=') > -1 && value !== row[ruleSplit[1]]) {
                    return false;
                }
            } else if (type === 'date' || type === 'datetime') {
                let valueDate = new Date(value),
                    rowValueDate = new Date(row[ruleSplit[1]]);

                if (rule.indexOf('<') > -1 && valueDate >= rowValueDate) {
                    return false;
                }
                if (rule.indexOf('>') > -1 && valueDate <= rowValueDate) {
                    return false;
                }
                if (rule.indexOf('=') > -1 && valueDate !== rowValueDate) {
                    return false;
                }
            }
        }
    }

    return true;
}

export function ruleBasedValue(rules, row, key) {
    let field;

    for (field in row) {
        if (rules.indexOf(`${key}=${field}`) > -1) {
            return row[field];
        }
    }

    return null;
}

export function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export function detectStringpattern(strings) {
    let stringLength = null,
        pattern = '',
        str;

    for (str of strings) {
        let newPattern = '';

        if (str.length < 2) return false;

        if (stringLength === null) {
            stringLength = str.length;
        } else {
            if (str.length !== stringLength) {
                return false;
            }
        }

        for (char of str) {
            if (v.isAlpha(char)) {
                if (v.isLowerCase(char)) {
                    newPattern += 'a';
                } else {
                    newPattern += 'A';
                }
            } else if (v.isDigit(char)) {
                newPattern += 'D';
            } else if (v.isBlank(char)) {
                newPattern += 'B';
            } else {
                newPattern += char;
            }
        }

        if (pattern === '') {
            pattern = newPattern;
        } else {
            if (pattern !== newPattern) {
                return false;
            }
        }
    }

    return pattern;
}

export function stringFromPattern(pattern) {
    let output = ''
        char;

    for (char of pattern) {
        if (char === 'A') {
            output += _.sample('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        } else if (char === 'a') {
            output += _.sample('abcdefghijklmnopqrstuvwxyz');
        } else if (char === 'D') {
            output += Math.floor(Math.random() * 10);
        } else if (char === 'B') {
            output += ' ';
        } else {
            output += char;
        }
    }

    return output;
}

export function parseTemplateVariables(data) {
    for (type in data) {
        for (row in data[type]) {
            for (field in data[type][row]) {
                let value = data[type][row][field],
                    id = data[type][row].id;

                if (typeof value === 'string') {
                    data[type][row][field] = value.replace(/{{\s*([^\}]+)\s*}}/g, function (match, capture) {
                        let randomPart = _.sample(capture.split('||')),
                            defaultParts = randomPart.split('?'),
                            filterParts = defaultParts[0].split('|'),
                            parts = filterParts[0].split('.');

                        if (randomPart[0] === '/' && randomPart.endsWith('/')) {
                            return RandExp.randexp(randomPart.slice(1, -1).replace(/❵/g, '}'));
                        } else if (parts[0] === 'number' && parts.length === 1) {
                            return Math.floor(Math.random() * 10);
                        } else if (parts[0] === 'sentence' && parts.length === 1) {
                            return sentence();
                        } else if (parts[0] === 'paragraph' && parts.length === 1) {
                            return paragraph();
                        } else if (parts[0] === 'word' && parts.length === 2) {
                            if (typeof generator[parts[1]] !== 'undefined') {
                                if (filterParts.length > 1) {
                                    return applyFilters(generator[parts[1]](), filterParts);
                                } else {
                                    return generator[parts[1]]();
                                }
                            }
                        } else if (parts[0] === 'fake' && parts.length === 2) {
                            if (typeof chance[parts[1]] === 'function') {
                                if (filterParts.length > 1) {
                                    return applyFilters(chance[parts[1]](), filterParts);
                                } else {
                                    return chance[parts[1]]();
                                }
                            }
                        } else if (parts[0] === 'fake' && parts.length === 3) {
                            if (typeof faker[parts[1]][parts[2]] === 'function') {
                                if (filterParts.length > 1) {
                                    return applyFilters(faker[parts[1]][parts[2]](), filterParts);
                                } else {
                                    return faker[parts[1]][parts[2]]();
                                }
                            }
                        } else if (parts[0] === 'field' && parts.length === 2 && typeof data[type][row][parts[1]] !== 'undefined') {
                            if (filterParts.length > 1) {
                                return applyFilters(data[type][row][parts[1]], filterParts);
                            } else {
                                return data[type][row][parts[1]];
                            }
                        } else if (parts[0] === 'field' && parts.length > 2) {
                            let path = parts.slice(1),
                                value = getFieldByPath(data[type][row], path, data);

                            if (value !== null) {
                                if (filterParts.length > 1) {
                                    return applyFilters(value, filterParts);
                                } else {
                                    return value;
                                }
                            }

                            if (defaultParts.length > 1) {
                                return defaultParts[1];
                            }
                        } else if (parts[0] === 'connected' && parts.length > 1) {
                            let path = parts.slice(1),
                                values = getValuesByPath(path, pluralize.singular(type), id, data);

                            if (filterParts.length > 1) {
                                return applyFilters(values, filterParts);
                            } else {
                                if (values.length > 1) {
                                    return [values.slice(0, -1).join(', '), values.slice(-1)[0]].join(values.length < 2 ? '' : ' and ');
                                } else {
                                    return values.join(',');
                                }
                            }
                        } else if (defaultParts.length > 1) {
                            return defaultParts[1];
                        }

                        return match;
                    });

                    data[type][row][field] = _.trim(data[type][row][field].replace(/  +/g, ' '));

                    if (isNumeric(data[type][row][field])) {
                        data[type][row][field] = Number(data[type][row][field]);
                    }
                }
            }
        }
    }
}