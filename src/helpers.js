const Chance = require('chance');
const chance = new Chance();

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

function floatPrecision(a) {
    if (!isFinite(a)) return 0;

    var e = 1, p = 0;

    while (Math.round(a * e) / e !== a) {
        e *= 10; p++;
    }

    return p;
}

function getMaxPrecision(floatArray) {
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

function everythingCapitalized(stringArray) {
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

function minNumber(intArray) {
    return Math.min.apply(Math, intArray);
}

function maxNumber(intArray) {
    return Math.max.apply(Math, intArray);
}

function minGapOfIntArray(intArray) {
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
    let newArray = [],
        dateString;

    for (dateString of stringDateArray) {
        newArray.push(new Date(dateString));
    }

    return newArray;
}

function capitalize(str) {
    return str.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
};

function isDateString(str) {
    return /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(str);
}

function isDatetimeString(str) {
    return /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(str);
}

function isTimeString(str) {
    return /^[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(str);
}

function getWeights(allEntries, uniqueEntries) {
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

module.exports = {
    randomTime,
    randomDate,
    randomDatetime,
    findGap,
    floatPrecision,
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
    minDate,
    maxDate,
    convertStringDateArray,
    capitalize,
    isDateString,
    isDatetimeString,
    isTimeString,
    getWeights
};