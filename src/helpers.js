import Chance from 'chance';
import slugify from 'slugify';
import md5 from 'md5';

const chance = new Chance();

export function randomTime() {
    let hours = String(chance.hour({ twentyfour: true })),
        minutes = String(chance.minute()),
        seconds = String(chance.second());

    if (hours.length === 1) '0' + hours;
    if (minutes.length === 1) '0' + minutes;
    if (seconds.length === 1) '0' + seconds;

    return [hours, minutes, seconds].join(':');
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
        hours = d.getHours(),
        minutes = d.getMinutes(),
        seconds = d.getSeconds();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

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

export function minStrLength(strArray) {
    return Math.min.apply(Math, strArray.map(function (str) { return str.length; }));
}

export function maxStrLength(strArray) {
    return Math.max.apply(Math, strArray.map(function (str) { return str.length; }));
}

export function minWordCount(strArray) {
    return Math.min.apply(Math, strArray.map(function (str) { return str.split(' ').length; }));
}

export function maxWordCount(strArray) {
    return Math.max.apply(Math, strArray.map(function (str) { return str.split(' ').length; }));
}

export function minSentenceCount(strArray) {
    return Math.min.apply(Math, strArray.map(function (str) { return str.split(/[\.\!\?]+/).length; }));
}

export function maxSentenceCount(strArray) {
    return Math.max.apply(Math, strArray.map(function (str) { return str.split(/[\.\!\?]+/).length; }));
}

export function minParagraphCount(strArray) {
    return Math.min.apply(Math, strArray.map(function (str) { return str.replace(/\n$/gm, '').split(/\n/).length; }));
}

export function maxParagraphCount(strArray) {
    return Math.max.apply(Math, strArray.map(function (str) { return str.replace(/\n$/gm, '').split(/\n/).length; }));
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
    return /^[0-9]{2}:[0-9]{2}:[0-9]{2}$/.test(str);
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

export function filterValue(value, filter) {
    value = String(value);

    if (filter === 'slug') {
        return slugify(value, { lower: true });
    } else if (filter === 'lower') {
        return value.toLowerCase();
    } else if (filter === 'uppper') {
        return value.toLowerCase();
    } else if (filter === 'md5') {
        return md5(value);
    } else {
        return value;
    }
}