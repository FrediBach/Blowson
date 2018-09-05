import _ from 'lodash';
import txtgen from 'txtgen';
import Chance from 'chance';

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
    isDateString,
    isDatetimeString,
    isTimeString,
    getWeights
} from './helpers';

const chance = new Chance();

module.exports = function extendData(data) {
    let types = [],
        type;

    for (type in data) {
        let typeDef = {
                key: type,
                minID: 1,
                maxID: 1,
                totalCount: 0,
                fields: {}
            },
            entry,
            field;

        for (entry in data[type]) {
            for (field in data[type][entry]) {
                let fieldValue = data[type][entry][field],
                    fieldType = 'undefined';

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
                        fieldType = 'string';
                    }
                } else if (typeof fieldValue === 'object') {
                    fieldType = 'JSON';
                }

                if (typeof typeDef.fields[field] === 'undefined') {
                    typeDef.fields[field] = {
                        types: [fieldType],
                        entries: [fieldValue],
                        allEntries: [fieldValue],
                        cnt: 1
                    };
                } else {
                    typeDef.fields[field].types.push(fieldType);
                    typeDef.fields[field].types = _.uniq(typeDef.fields[field].types);
                    typeDef.fields[field].entries.push(fieldValue);
                    typeDef.fields[field].entries = _.uniq(typeDef.fields[field].entries);
                    typeDef.fields[field].allEntries.push(fieldValue);
                    typeDef.fields[field].cnt++;
                }
            }
        }

        for (field in typeDef.fields) {
            if (field === 'id') {
                typeDef.totalCount = typeDef.fields[field].cnt;
            }
            if (typeDef.fields[field].types.length === 1) {
                typeDef.fields[field].type = typeDef.fields[field].types[0];
            }
            if (typeDef.fields[field].entries.length < typeDef.fields[field].cnt) {
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

                    if (settings.fields[field].repeatEntries) {
                        value = chance.weighted(settings.fields[field].entries, settings.fields[field].weights);
                    }

                    if (field === 'id') value = id;
                    if (field === 'age' && settings.fields[field].type === 'int') value = chance.age();
                    if (field === 'firstname' && settings.fields[field].type === 'string') value = chance.first();
                    if (field === 'lastname' && settings.fields[field].type === 'string') value = chance.last();
                    if (field === 'company' && settings.fields[field].type === 'string') value = chance.company();
                    if (field === 'country' && settings.fields[field].type === 'string') value = chance.country();
                    if (field === 'email' && settings.fields[field].type === 'string') value = chance.email();
                    if (field === 'color' && settings.fields[field].type === 'string') value = chance.color();
                    if (field === 'ip' && settings.fields[field].type === 'string') value = chance.ip();
                    if (field === 'profession' && settings.fields[field].type === 'string') value = chance.profession();
                    if (field === 'url' && settings.fields[field].type === 'string') value = chance.url();
                    if (field === 'city' && settings.fields[field].type === 'string') value = chance.city();
                    if (field === 'street' && settings.fields[field].type === 'string') value = chance.street();
                    if (field === 'zip' && settings.fields[field].type === 'int') value = parseInt(chance.zip());
                    if (field === 'weekday' && settings.fields[field].type === 'string') value = chance.weekday();
                    if (field === 'year' && settings.fields[field].type === 'int') value = parseInt(chance.year());
                    if (field === 'password' && settings.fields[field].type === 'string') value = chance.hash();
                    if (field === 'guid' && settings.fields[field].type === 'string') value = chance.guid();

                    if (value === '' && settings.fields[field].type === 'JSON') {
                        value = {};
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
                            value = txtgen.article(Math.floor(Math.random() * maxParagraphs) + minParagraphs);
                        } else if (maxSentences > 1) {
                            value = txtgen.paragraph(Math.floor(Math.random() * maxSentences) + minSentences);
                        } else if (maxWords > 1) {
                            value = chance.sentence({ words: Math.floor(Math.random() * maxWords) + minWords }).slice(0, -1);
                        } else {
                            if (settings.fields[field].entries[0][0].toUpperCase() === settings.fields[field].entries[0][0]) {
                                value = chance.capitalize(chance.word({ length: Math.floor(Math.random() * minLength) + maxLength }));
                            } else {
                                value = chance.string({ length: Math.floor(Math.random() * minLength) + maxLength });
                            }
                        }

                        if (settings.fields[field].entries[0] === settings.fields[field].entries[0].toUpperCase()) {
                            value = value.toUpperCase();
                        } else if (settings.fields[field].entries[0] === settings.fields[field].entries[0].toLowerCase()) {
                            value = value.toLowerCase();
                        } else if (everythingCapitalized(settings.fields[field].entries)) {
                            value = capitalize(value);
                        }
                    }

                    if (value === '' && settings.fields[field].type === 'int') {
                        let minInt = minNumber(settings.fields[field].entries),
                            maxInt = maxNumber(settings.fields[field].entries),
                            minGap = minGapOfIntArray(settings.fields[field].entries);

                        value = randomIntWithStep(minInt, maxInt, minGap);
                    }

                    if (value === '' && settings.fields[field].type === 'float') {
                        let minFloat = minNumber(settings.fields[field].entries),
                            maxFloat = maxNumber(settings.fields[field].entries),
                            maxPrecision = getMaxPrecision(settings.fields[field].entries);

                        value = Number((Math.random() * maxFloat + minFloat).toFixed(maxPrecision));
                    }

                    if (value === '' && settings.fields[field].type === 'char') {
                        if (settings.fields[field].entries[0] === settings.fields[field].entries[0].toUpperCase()) {
                            value = chance.letter({ casing: 'upper' });
                        } else if (settings.fields[field].entries[0] === settings.fields[field].entries[0].toLowerCase()) {
                            value = chance.letter({ casing: 'lower' });
                        } else {
                            value = chance.letter();
                        }
                    }

                    if (value === '' && settings.fields[field].type === 'date') {
                        let minDateDate = minDate(convertStringDateArray(settings.fields[field].entries)),
                            maxDateDate = maxDate(convertStringDateArray(settings.fields[field].entries));

                        value = randomDate(minDateDate, maxDateDate);
                    }

                    if (value === '' && settings.fields[field].type === 'datetime') {
                        let minDateDate = minDate(convertStringDateArray(settings.fields[field].entries)),
                            maxDateDate = maxDate(convertStringDateArray(settings.fields[field].entries));

                        value = randomDatetime(minDateDate, maxDateDate);
                    }

                    if (value === '' && settings.fields[field].type === 'time') {
                        value = randomTime();
                    }

                    if (settings.fields[field].required || Math.random() >= 0.5) {
                        row[field] = value;
                    }
                }

                data[settings.key].push(row);
            }

        }
    }

    return data;
}