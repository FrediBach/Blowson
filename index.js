const writeFile = require('write');
const stringify = require('json-stringify-pretty-compact');
const _ = require('lodash');
const Chance = require('chance');

const chance = new Chance();

const dataPath = process.env.DATA_PATH || './data.js';
const savePath = process.env.SAVE_PATH || './data-extended.js';

const data = require(dataPath);

function extendData(data) {
	let types = [];

	for (let type in data) {
		let typeDef = {
				key: type,
				minID: 1,
				maxID: 1,
				totalCount: 0,
				fields: {}
			};

		for (let entry in data[type]) {
			for (let field in data[type][entry]) {
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
					if (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(fieldValue)) {
						fieldType = 'date';
					} else if (/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(fieldValue)) {
						fieldType = 'datetime';
					} else if (/^[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(fieldValue)) {
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
						cnt: 1
					};
				} else {
					typeDef.fields[field].types.push(fieldType);
					typeDef.fields[field].types = _.uniq(typeDef.fields[field].types);
					typeDef.fields[field].entries.push(fieldValue);
					typeDef.fields[field].entries = _.uniq(typeDef.fields[field].entries);
					typeDef.fields[field].cnt++;
				}
			}
		}

		for (let field in typeDef.fields) {
			if (field === 'id') {
				typeDef.totalCount = typeDef.fields[field].cnt;
			}
			if (typeDef.fields[field].types.length === 1) {
				typeDef.fields[field].type = typeDef.fields[field].types[0];
			}
			if (typeDef.fields[field].entries.length < typeDef.fields[field].cnt) {
				typeDef.fields[field].repeatEntries = true;
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
			for (let id = settings.gap.start; id <= settings.gap.end; id++){
				let row = {};

				for (let field in settings.fields) {
					let value = '';

					if (settings.fields[field].repeatEntries) {
						value = _.sample(settings.fields[field].entries);
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
							maxSentences = maxSentenceCount(settings.fields[field].entries);

						if (maxSentences > 1) {
							value = chance.paragraph({ words: Math.floor(Math.random() * maxSentences) + minSentences });
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

function randomTime() {
	let hours = String(chance.hour({ twentyfour: true })),
		minutes = String(chance.minute()),
		seconds = String(chance.second());

	if (hours.length === 1) '0' + hours;
	if (minutes.length === 1) '0' + minutes;
	if (seconds.length === 1) '0' + seconds;

	return [hours, minutes, seconds].join(':');
}

function randomDate(start, end) {
	var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('-');
}

function randomDatetime(start, end) {
	var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear(),
		hours = d.getHours(),
		minutes = d.getMinutes(),
		seconds = d.getSeconds();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [year, month, day].join('-') + 'T' + [hours, minutes, seconds].join(':') + '+01:00';
}

function findGap(numArray) {
	let min = Math.min.apply(Math, numArray),
		max = Math.max.apply(Math, numArray),
		missingNums = [];

	for (let i = min; i <= max; i++) {
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

function floatPrecision(a) {
	if (!isFinite(a)) return 0;

	var e = 1, p = 0;

	while (Math.round(a * e) / e !== a) {
		e *= 10; p++;
	}

	return p;
}

function getMaxPrecision(floatArray) {
	maxPrecision = 0;

	for (value of floatArray) {
		let precision = floatPrecision(value);

		if (precision > maxPrecision) {
			maxPrecision = precision;
		}
	}

	return maxPrecision;
}

function everythingCapitalized(stringArray) {
	isCapitalized = true;

	for (str of stringArray) {
		if (capitalize(str) !== str) {
			isCapitalized = false;
			break;
		}
	}

	return isCapitalized;
}

function minNumber(intArray) {
	return Math.min.apply(Math, intArray);
}

function maxNumber(intArray) {
	return Math.max.apply(Math, intArray);
}

function minGapOfIntArray(intArray) {
	let minGap = 999999999;

	for (let value1 of intArray) {
		for (let value2 of intArray) {
			if (value1 !== value2 && Math.abs(value1 - value2) < minGap) {
				minGap = Math.abs(value1 - value2);
			}
		}
	}

	return minGap;
}

function randomIntWithStep(min, max, step) {
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

function minStrLength(strArray) {
	return Math.min.apply(Math, strArray.map(function (str) { return str.length; }));
}

function maxStrLength(strArray) {
	return Math.max.apply(Math, strArray.map(function (str) { return str.length; }));
}

function minWordCount(strArray) {
	return Math.min.apply(Math, strArray.map(function (str) { return str.split(' ').length; }));
}

function maxWordCount(strArray) {
	return Math.max.apply(Math, strArray.map(function (str) { return str.split(' ').length; }));
}

function minSentenceCount(strArray) {
	return Math.min.apply(Math, strArray.map(function (str) { return str.split(/[\.\!\?]+/).length; }));
}

function maxSentenceCount(strArray) {
	return Math.max.apply(Math, strArray.map(function (str) { return str.split(/[\.\!\?]+/).length; }));
}

function minDate(dateArray) {
	return new Date(Math.min.apply(null, dateArray));
}

function maxDate(dateArray) {
	return new Date(Math.max.apply(null, dateArray));
}

function convertStringDateArray(stringDateArray) {
	let newArray = [];

	for (dateString of stringDateArray) {
		newArray.push(new Date(dateString));
	}

	return newArray;
}

capitalize = function(str) {
	return str.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
};

writeFile.sync(savePath, `module.exports = ${stringify(extendData(data))};`);
