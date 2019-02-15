import _ from 'lodash';
import Chance from 'chance';
import faker from 'faker';
import stringify from 'json-stringify-pretty-compact';

import {
    sentence,
    paragraph,
    article,
    addTemplates,
} from './txtgen/main'; // Extended version of the Txtgen library. Original at: https://github.com/ndaidong/txtgen

import {
    randomTime,
    randomDate,
    randomDatetime,
    findGap,
    getMaxPrecision,
    everythingCapitalized,
    minNumber,
    maxNumber,
    minGapOfIntArray,
    randomIntWithStep,
    minStrLength,
    maxStrLength,
    minWordCount,
    maxWordCount,
    minSentenceCount,
    maxSentenceCount,
    minParagraphCount,
    maxParagraphCount,
    minDate,
    maxDate,
    convertStringDateArray,
    capitalize,
    getWeights,
    getNumberDirection,
    getDateDirection,
    detectFieldType,
    normalDistRandomInt,
    renameProperty,
    getFieldRules,
    removeIncompatibleRules,
    rulesAreValid,
    ruleBasedValue,
    detectStringpattern,
    stringFromPattern,
    parseTemplateVariables,
    arrayToObject
} from './helpers';

const chance = new Chance();

addTemplates([
    'congratulations to the {{noun}} that won the {{adjective}} {{noun}} with {{a_noun}}',
    'incomprehensibilities of a {{adjective}} {{noun}} and {{a_noun}} made {{a_noun}} {{adjective}}'
]);

module.exports = function blowson(inputData) {
    let dataIsJSON = false,
        data = {},
        types = [],
        type,
        field,
        entry,
        customKeyNames = {},
        tempKeys = [],
        objKeys = [];

    if (typeof data === 'string') {
        data = JSON.parse(inputData);
        dataIsJSON = true;
    } else {
        data = inputData;
    }

    for (type in data) {
        for (entry in data[type]) {
            for (field in data[type][entry]) {
                let fieldSplit = field.split('__');

                if (field.substr(0, 3) === '___') {
                    objKeys.push(`${type}.${field.substr(3)}`);
                    renameProperty(data[type][entry], field, field.substr(3));
                    continue;
                }

                if (field.substr(0, 2) === '__') {
                    tempKeys.push(`${type}.${field.substr(2)}`);
                    renameProperty(data[type][entry], field, field.substr(2));
                    continue;
                }

                if (fieldSplit.length > 1) {
                    customKeyNames[`${type}.${fieldSplit[1]}`] = `${type}.${fieldSplit[0]}`;
                    renameProperty(data[type][entry], field, fieldSplit[1]);
                }
            }
        }
    }

    for (type in data) {
        let typeDef = {
                key: type,
                minID: 1,
                maxID: 1,
                totalCount: 0,
                fields: {}
            };

        for (entry in data[type]) {
            let prevFields = [];

            for (field in data[type][entry]) {
                let fieldValue = data[type][entry][field],
                    { fieldType, containsTemplate, refTypes, refTypeIds } = detectFieldType(fieldValue);

                if (typeof typeDef.fields[field] === 'undefined') {
                    typeDef.fields[field] = {
                        types: [fieldType],
                        entries: [fieldValue],
                        allEntries: [fieldValue],
                        containsTemplate: containsTemplate,
                        refTypes: refTypes,
                        refTypeIds: refTypeIds,
                        rules: [],
                        cnt: 1
                    };
                } else {
                    typeDef.fields[field].types.push(fieldType);
                    typeDef.fields[field].types = _.uniq(typeDef.fields[field].types);
                    typeDef.fields[field].entries.push(fieldValue);
                    typeDef.fields[field].entries = _.uniq(typeDef.fields[field].entries);
                    typeDef.fields[field].allEntries.push(fieldValue);
                    typeDef.fields[field].cnt++;
                    typeDef.fields[field].refTypes = _.union(typeDef.fields[field].refTypes, refTypes);
                    for (const ref in refTypeIds) {
                        if (typeof typeDef.fields[field].refTypeIds[ref] !== 'undefined') {
                            typeDef.fields[field].refTypeIds[ref] = _.union(typeDef.fields[field].refTypeIds[ref], refTypeIds[ref]);
                        } else {
                            typeDef.fields[field].refTypeIds[ref] = refTypeIds[ref];
                        }
                    }
                    if (containsTemplate) {
                        typeDef.fields[field].containsTemplate = true;
                    }
                }

                if (fieldType === 'JSON') {
                    let objField;

                    for (objField in fieldValue) {
                        let objFieldValue = fieldValue[objField],
                            result = detectFieldType(objFieldValue),
                            objFieldType = result.fieldType,
                            objContainsTemplate = result.containsTemplate,
                            objRefTypes = result.refTypes,
                            objRefTypeIds = result.refTypeIds

                        if (typeof typeDef.fields[field + '.' + objField] === 'undefined') {
                            typeDef.fields[field + '.' + objField] = {
                                types: [objFieldType],
                                entries: [objFieldValue],
                                allEntries: [objFieldValue],
                                containsTemplate: objContainsTemplate,
                                refTypes: objRefTypes,
                                refTypeIds: objRefTypeIds,
                                cnt: 1
                            };
                        } else {
                            typeDef.fields[field + '.' + objField].types.push(objFieldType);
                            typeDef.fields[field + '.' + objField].types = _.uniq(typeDef.fields[field + '.' + objField].types);
                            typeDef.fields[field + '.' + objField].entries.push(objFieldValue);
                            typeDef.fields[field + '.' + objField].entries = _.uniq(typeDef.fields[field + '.' + objField].entries);
                            typeDef.fields[field + '.' + objField].allEntries.push(objFieldValue);
                            typeDef.fields[field + '.' + objField].refTypes = _.union(typeDef.fields[field + '.' + objField].refTypes, objRefTypes);
                            for (const ref in objRefTypeIds) {
                                if (typeof typeDef.fields[field + '.' + objField].refTypeIds[ref] !== 'undefined') {
                                    typeDef.fields[field + '.' + objField].refTypeIds[ref] = _.union(typeDef.fields[field + '.' + objField].refTypeIds[ref], objRefTypeIds[ref]);
                                } else {
                                    typeDef.fields[field + '.' + objField].refTypeIds[ref] = objRefTypeIds[ref];
                                }
                            }
                            typeDef.fields[field + '.' + objField].cnt++;
                            if (objContainsTemplate) {
                                typeDef.fields[field + '.' + objField].objContainsTemplate = true;
                            }
                        }
                    }
                }

                if (prevFields.length > 0 && field !== 'id' && !field.endsWith('_id') && !field.endsWith('_ids')) {
                    let rules = getFieldRules(field, fieldValue, fieldType, prevFields);
                    
                    if (rules.length > 0) {
                        typeDef.fields[field].rules = typeDef.fields[field].rules.concat(rules);
                    }
                }

                if (field !== 'id' && !field.endsWith('_id') && !field.endsWith('_ids')) {
                    prevFields.push({
                        key: field,
                        value: fieldValue,
                        type: fieldType
                    });
                }
            }
        }

        for (field in typeDef.fields) {
            if (field === 'id') {
                typeDef.totalCount = typeDef.fields[field].cnt;
            }
        }

        for (field in typeDef.fields) {
            if (typeDef.fields[field].types.length === 1) {
                typeDef.fields[field].type = typeDef.fields[field].types[0];
            } else {
                if (typeDef.fields[field].types.length == 2 && typeDef.fields[field].types.indexOf('int') > -1 && typeDef.fields[field].types.indexOf('float') > -1) {
                    typeDef.fields[field].type = 'float';
                } else {
                    typeDef.fields[field].type = 'string';
                }
            }

            if (typeDef.fields[field].type === 'string' && !typeDef.fields[field].containsTemplate) {
                typeDef.fields[field].pattern = detectStringpattern(typeDef.fields[field].entries);
            } else {
                typeDef.fields[field].pattern = false;
            }

            if (typeDef.fields[field].entries.length < typeDef.fields[field].cnt || typeDef.fields[field].containsTemplate) {
                typeDef.fields[field].repeatEntries = true;
                typeDef.fields[field].weights = getWeights(typeDef.fields[field].allEntries, typeDef.fields[field].entries);
            } else {
                typeDef.fields[field].repeatEntries = false;
            }

            if (typeDef.fields[field].cnt < typeDef.totalCount) {
                typeDef.fields[field].required = false;
            } else {
                typeDef.fields[field].required = true;
            }

            typeDef.fields[field].rules = removeIncompatibleRules(_.uniq(typeDef.fields[field].rules));
            
            typeDef.fields[field].dir = false;

            if (typeDef.fields[field].type === 'int' || typeDef.fields[field].type === 'float') {
                typeDef.fields[field].dir = getNumberDirection(typeDef.fields[field].entries);
            }
            if (typeDef.fields[field].type === 'date' || typeDef.fields[field].type === 'datetime') {
                typeDef.fields[field].dir = getDateDirection(typeDef.fields[field].entries);
            }
        }

        typeDef.gap = findGap(typeDef.fields['id'].entries);

        types.push(typeDef);
    }

    for (type in types) {
        let settings = types[type];

        if (settings.gap) {
            let id,
                field;

            for (id = settings.gap.start; id <= settings.gap.end; id++) {
                let row = {};

                for (field in settings.fields) {
                    let value = '';

                    if (settings.fields[field].repeatEntries || settings.fields[field].containsTemplate) {
                        value = chance.weighted(settings.fields[field].entries, settings.fields[field].weights);
                    } else {

                        if (field === 'id') value = id;
                        if ((field === 'age' || field.endsWith('.age')) && settings.fields[field].type === 'int') value = chance.age();
                        if ((field === 'firstname' || field.endsWith('.firstname')) && settings.fields[field].type === 'string') value = chance.first();
                        if ((field === 'lastname' || field.endsWith('.lastname')) && settings.fields[field].type === 'string') value = chance.last();
                        if ((field === 'company' || field.endsWith('.company')) && settings.fields[field].type === 'string') value = chance.company();
                        if ((field === 'country' || field.endsWith('.country')) && settings.fields[field].type === 'string') value = chance.country();
                        if ((field === 'email' || field.endsWith('.email')) && settings.fields[field].type === 'string') value = faker.internet.exampleEmail();
                        if ((field === 'color' || field.endsWith('.color')) && settings.fields[field].type === 'string') value = chance.color();
                        if ((field === 'ip' || field.endsWith('.ip')) && settings.fields[field].type === 'string') value = chance.ip();
                        if ((field === 'profession' || field.endsWith('.profession')) && settings.fields[field].type === 'string') value = chance.profession();
                        if ((field === 'url' || field.endsWith('.url')) && settings.fields[field].type === 'string') value = chance.url();
                        if ((field === 'city' || field.endsWith('.city')) && settings.fields[field].type === 'string') value = chance.city();
                        if ((field === 'street' || field.endsWith('.street')) && settings.fields[field].type === 'string') value = chance.street();
                        if ((field === 'zip' || field.endsWith('.zip')) && settings.fields[field].type === 'int') value = parseInt(chance.zip());
                        if ((field === 'weekday' || field.endsWith('.weekday')) && settings.fields[field].type === 'string') value = chance.weekday();
                        if ((field === 'year' || field.endsWith('.year')) && settings.fields[field].type === 'int') value = parseInt(chance.year());
                        if ((field === 'password' || field.endsWith('.password')) && settings.fields[field].type === 'string') value = chance.hash();
                        if ((field === 'guid' || field.endsWith('.guid')) && settings.fields[field].type === 'string') value = chance.guid();
                        if ((field === 'product' || field.endsWith('.product')) && settings.fields[field].type === 'string') value = faker.commerce.productName();
                        if ((field === 'material' || field.endsWith('.material')) && settings.fields[field].type === 'string') value = faker.commerce.productMaterial();
                        if ((field === 'iban' || field.endsWith('.iban')) && settings.fields[field].type === 'string') value = faker.finance.iban();
                        if ((field === 'bic' || field.endsWith('.bic')) && settings.fields[field].type === 'string') value = faker.finance.bic();
                        if ((field === 'avatar' || field.endsWith('.avatar')) && settings.fields[field].type === 'string') value = faker.image.avatar();
                        if ((field === 'username' || field.endsWith('.username')) && settings.fields[field].type === 'string') value = faker.internet.userName();
                        if ((field === 'homepage' || field.endsWith('.homepage')) && settings.fields[field].type === 'string') value = faker.internet.url();
                        if ((field === 'job' || field.endsWith('.job')) && settings.fields[field].type === 'string') value = faker.name.jobTitle();
                        if ((field === 'mimetype' || field.endsWith('.mimetype')) && settings.fields[field].type === 'string') value = faker.system.mimeType();

                        if (value === '' && settings.fields[field].type === 'JSON') {
                            value = {};
                        }

                        if (value === '' && settings.fields[field].type.startsWith('array')) {
                            let typeSplit = settings.fields[field].type.split('.'),
                                arrayType = 'normal',
                                maxCount = 0,
                                arrEntry;

                            if (typeSplit.length > 1) {
                                arrayType = typeSplit[1];
                            }

                            for (arrEntry of settings.fields[field].entries) {
                                let arrCount = arrEntry.length;
                                if (arrCount > maxCount) {
                                    maxCount = arrCount;
                                }
                            }

                            if (arrayType === 'int' || arrayType === 'float') {
                                let min = null,
                                    max = null;

                                for (arrEntry of settings.fields[field].entries) {
                                    let arrMin = minNumber(arrEntry),
                                        arrMax = maxNumber(arrEntry),
                                        arrCount = arrEntry.length;
                                    
                                    if (arrCount > 0 && (min === null || arrMin < min)) {
                                        min = arrMin;
                                    }
                                    if (arrCount > 0 && (max === null || arrMax > max)) {
                                        max = arrMax;
                                    }
                                }

                                value = Array.from(Array(Math.floor(Math.random() * maxCount) + 1).keys());
                                value = value.map(() => randomIntWithStep(min, max, 1));

                                value.sort(function (a, b) {
                                    return a - b;
                                });
                            } else if (arrayType === 'string') {
                                value = Array.from(Array(Math.floor(Math.random() * maxCount) + 1).keys());
                                value = value.map(() => sentence());
                            } else if (arrayType === 'date') {
                                value = Array.from(Array(Math.floor(Math.random() * maxCount) + 1).keys());
                                value = value.map(() => randomDate(new Date('1950-01-01'), new Date()));
                            } else if (arrayType === 'datetime') {
                                value = Array.from(Array(Math.floor(Math.random() * maxCount) + 1).keys());
                                value = value.map(() => randomDatetime(new Date('1950-01-01'), new Date()));
                            } else if (arrayType === 'time') {
                                value = Array.from(Array(Math.floor(Math.random() * maxCount) + 1).keys());
                                value = value.map(() => randomTime());
                            } else if (arrayType === 'boolean') {
                                value = Array.from(Array(Math.floor(Math.random() * maxCount) + 1).keys());
                                value = value.map(() => _.sample([true, false]));
                            } else if (arrayType === 'char') {
                                value = Array.from(Array(Math.floor(Math.random() * maxCount) + 1).keys());
                                value = value.map(() => _.sample('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
                            } else if (arrayType === 'JSON') {
                                let refs = settings.fields[field].refTypes.map(ref => `${ref}_id`);
                                value = Array.from(Array(Math.floor(Math.random() * maxCount) + 1).keys());
                                value = value.map(() => {
                                    let ref = _.sample(settings.fields[field].refTypes),
                                        minRef = minNumber(settings.fields[field].refTypeIds[ref]),
                                        maxRef = maxNumber(settings.fields[field].refTypeIds[ref]);
                                    return {[ref+'_id']: _.random(minRef, maxRef)}
                                });
                            } else {
                                value = [];
                            }
                        }

                        if (value === '' && settings.fields[field].type === 'string') {
                            let minLength = minStrLength(settings.fields[field].entries),
                                maxLength = maxStrLength(settings.fields[field].entries),
                                minWords = minWordCount(settings.fields[field].entries),
                                maxWords = maxWordCount(settings.fields[field].entries),
                                minSentences = minSentenceCount(settings.fields[field].entries),
                                maxSentences = maxSentenceCount(settings.fields[field].entries),
                                minParagraphs = minParagraphCount(settings.fields[field].entries),
                                maxParagraphs = maxParagraphCount(settings.fields[field].entries);

                            if (maxParagraphs > 1) {
                                value = article(Math.floor(Math.random() * maxParagraphs) + minParagraphs);
                            } else if (maxSentences > 1) {
                                value = paragraph(Math.floor(Math.random() * maxSentences) + minSentences);
                            } else if (maxWords > 1) {
                                value = sentence();
                                if (!(settings.fields[field].entries[0].endsWith('.') || settings.fields[field].entries[0].endsWith('!') || settings.fields[field].entries[0].endsWith('?'))) {
                                    value = value.slice(0, -1);
                                }
                            } else {
                                if (settings.fields[field].pattern) {
                                    value = stringFromPattern(settings.fields[field].pattern);
                                } else {
                                    if (typeof settings.fields[field].entries[0][0] === 'string' && settings.fields[field].entries[0][0].toUpperCase() === settings.fields[field].entries[0][0]) {
                                        value = chance.capitalize(chance.word({ length: Math.floor(Math.random() * minLength) + maxLength }));
                                    } else {
                                        value = chance.string({ length: Math.floor(Math.random() * minLength) + maxLength });
                                    }
                                }
                            }

                            if (typeof settings.fields[field].entries[0] === 'string' && settings.fields[field].entries[0] === settings.fields[field].entries[0].toUpperCase()) {
                                value = value.toUpperCase();
                            } else if (typeof settings.fields[field].entries[0] === 'string' && settings.fields[field].entries[0] === settings.fields[field].entries[0].toLowerCase()) {
                                value = value.toLowerCase();
                            } else if (everythingCapitalized(settings.fields[field].entries)) {
                                value = capitalize(value);
                            }
                        }

                        if (value === '' && settings.fields[field].type === 'int') {
                            let minInt = minNumber(settings.fields[field].entries),
                                maxInt = maxNumber(settings.fields[field].entries),
                                minGap = minGapOfIntArray(settings.fields[field].entries),
                                cnt = 0,
                                ruleValue = ruleBasedValue(settings.fields[field].rules, row, field),
                                dirSteps = settings.gap.end - settings.gap.start + 1,
                                averageStepGap = (maxInt - minInt) / dirSteps;

                            if (settings.fields[field].dir === 'asc') {
                                maxInt = Math.ceil(minInt + ((id - settings.gap.start + 1) * averageStepGap) - 1);
                                minInt = Math.floor(minInt + ((id - settings.gap.start) * averageStepGap) + 1);
                            } else if (settings.fields[field].dir === 'desc') {
                                minInt = Math.ceil(maxInt - ((id - settings.gap.start + 1) * averageStepGap) + 1);
                                maxInt = Math.floor(maxInt - ((id - settings.gap.start) * averageStepGap) - 1);
                            }
                            
                            if (field.endsWith('_id')) {
                                value = normalDistRandomInt(minInt, maxInt);
                            } else {
                                if (ruleValue === null) {
                                    while (cnt === 0 || (!rulesAreValid(value, settings.fields[field].rules, row, settings.fields[field].type) && cnt < 100)) {
                                        value = randomIntWithStep(minInt, maxInt, minGap);
                                        cnt++;
                                    }
                                } else {
                                    value = ruleValue;
                                }
                            }
                        }

                        if (value === '' && settings.fields[field].type === 'float') {
                            let minFloat = minNumber(settings.fields[field].entries),
                                maxFloat = maxNumber(settings.fields[field].entries),
                                maxPrecision = getMaxPrecision(settings.fields[field].entries),
                                cnt = 0,
                                ruleValue = ruleBasedValue(settings.fields[field].rules, row, field),
                                dirSteps = settings.gap.end - settings.gap.start + 1,
                                averageStepGap = (maxFloat - minFloat - 1) / dirSteps;

                            if (settings.fields[field].dir === 'asc') {
                                maxFloat = minFloat + ((id - settings.gap.start + 1) * averageStepGap) + 1;
                                minFloat = minFloat + ((id - settings.gap.start) * averageStepGap) + 1;
                            } else if (settings.fields[field].dir === 'desc') {
                                minFloat = maxFloat - ((id - settings.gap.start + 1) * averageStepGap) - 1;
                                maxFloat = maxFloat - ((id - settings.gap.start) * averageStepGap) - 1;
                            }

                            if (ruleValue === null) {
                                while (cnt === 0 || (!rulesAreValid(value, settings.fields[field].rules, row, settings.fields[field].type) && cnt < 100)) {
                                    value = Number(chance.floating({ min: minFloat, max: maxFloat }).toFixed(maxPrecision));
                                    cnt++;
                                }
                            } else {
                                value = ruleValue;
                            }
                        }

                        if (value === '' && settings.fields[field].type === 'char') {
                            if (typeof settings.fields[field].entries[0] === 'string' && settings.fields[field].entries[0] === settings.fields[field].entries[0].toUpperCase()) {
                                value = chance.letter({ casing: 'upper' });
                            } else if (typeof settings.fields[field].entries[0] === 'string' && settings.fields[field].entries[0] === settings.fields[field].entries[0].toLowerCase()) {
                                value = chance.letter({ casing: 'lower' });
                            } else {
                                value = chance.letter();
                            }
                        }

                        if (value === '' && settings.fields[field].type === 'date') {
                            let minDateDate = minDate(convertStringDateArray(settings.fields[field].entries)),
                                maxDateDate = maxDate(convertStringDateArray(settings.fields[field].entries)),
                                cnt = 0,
                                ruleValue = ruleBasedValue(settings.fields[field].rules, row, field),
                                dirSteps = settings.gap.end - settings.gap.start + 1,
                                averageStepGap = (maxDateDate.getTime() - minDateDate.getTime() - 1) / dirSteps;

                            if (settings.fields[field].dir === 'asc') {
                                maxDateDate = new Date(minDateDate.getTime() + ((id - settings.gap.start + 1) * averageStepGap) + 1);
                                minDateDate = new Date(minDateDate.getTime() + ((id - settings.gap.start) * averageStepGap) + 1);
                            } else if (settings.fields[field].dir === 'desc') {
                                minDateDate = new Date(maxDateDate.getTime() - ((id - settings.gap.start + 1) * averageStepGap) - 1);
                                maxDateDate = new Date(maxDateDate.getTime() - ((id - settings.gap.start) * averageStepGap) - 1);
                            }

                            if (ruleValue === null) {
                                while (cnt === 0 || (!rulesAreValid(value, settings.fields[field].rules, row, settings.fields[field].type) && cnt < 100)) {
                                    value = randomDate(minDateDate, maxDateDate);
                                    cnt++;
                                }
                            } else {
                                value = ruleValue;
                            }
                        }

                        if (value === '' && settings.fields[field].type === 'datetime') {
                            let minDateDate = minDate(convertStringDateArray(settings.fields[field].entries)),
                                maxDateDate = maxDate(convertStringDateArray(settings.fields[field].entries)),
                                cnt = 0,
                                ruleValue = ruleBasedValue(settings.fields[field].rules, row, field),
                                dirSteps = settings.gap.end - settings.gap.start + 1,
                                averageStepGap = (maxDateDate.getTime() - minDateDate.getTime() - 1) / dirSteps;

                            if (settings.fields[field].dir === 'asc') {
                                maxDateDate = new Date(minDateDate.getTime() + ((id - settings.gap.start + 1) * averageStepGap) + 1);
                                minDateDate = new Date(minDateDate.getTime() + ((id - settings.gap.start) * averageStepGap) + 1);
                            } else if (settings.fields[field].dir === 'desc') {
                                minDateDate = new Date(maxDateDate.getTime() - ((id - settings.gap.start + 1) * averageStepGap) - 1);
                                maxDateDate = new Date(maxDateDate.getTime() - ((id - settings.gap.start) * averageStepGap) - 1);
                            }

                            if (ruleValue === null) {
                                while (cnt === 0 || (!rulesAreValid(value, settings.fields[field].rules, row, settings.fields[field].type) && cnt < 100)) {
                                    value = randomDatetime(minDateDate, maxDateDate);
                                    cnt++;
                                }
                            } else {
                                value = ruleValue;
                            }
                        }

                        if (value === '' && settings.fields[field].type === 'time') {
                            value = randomTime();
                        }

                        if (value === '' && settings.fields[field].type === 'boolean') {
                            if (Math.random() >= 0.5) {
                                value = true;
                            } else {
                                value = false;
                            }
                        }

                    }

                    if (settings.fields[field].required || Math.random() >= 0.5) {
                        if (field.indexOf('.') > -1) {
                            let fieldSplit = field.split('.');

                            if (typeof row[fieldSplit[0]] !== 'undefined') {
                                row[fieldSplit[0]][fieldSplit[1]] = value;
                            }
                        } else {
                            row[field] = value;
                        }
                    }
                }

                data[settings.key].push(row);
            }

            // Sort by id:
            data[settings.key] = data[settings.key].sort(function (a, b) {
                return a.id - b.id;
            });

        }

    }

    parseTemplateVariables(data);

    // Repeat template variable parsing, so we can at least once reference a field that contains template variables:
    parseTemplateVariables(data);

    for (type in data) {
        for (entry in data[type]) {
            for (field in data[type][entry]) {
                if (tempKeys.indexOf(`${type}.${field}`) > -1) {
                    delete (data[type][entry][field]);
                }
                if (typeof customKeyNames[`${type}.${field}`] !== 'undefined') {
                    renameProperty(data[type][entry], field, customKeyNames[`${type}.${field}`].split('.')[1]);
                }
            }
        }
    }

    // Convert this type array to an object with this key
    for (type in data) {
        for (entry in data[type]) {
            for (field in data[type][entry]) {
                if (objKeys.indexOf(`${type}.${field}`) > -1) {
                    if (Array.isArray(data[type])) {
                        data[type] = arrayToObject(data[type], field);
                    }
                }
            }
        }
    }

    if (dataIsJSON) {
        return stringify(data);
    }

    return data;
}