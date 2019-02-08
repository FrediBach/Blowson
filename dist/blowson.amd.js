define(['lodash', 'chance', 'faker', 'json-stringify-pretty-compact', 'slugify', 'md5', 'date-fns', 'numeral', 'marked', 'prob.js', 'pluralize', 'voca', 'randexp'], function (_, Chance, faker, stringify, slugify, md5, dateFns, numeral, marked, Prob, pluralize, v, RandExp) { 'use strict';

  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;
  Chance = Chance && Chance.hasOwnProperty('default') ? Chance['default'] : Chance;
  faker = faker && faker.hasOwnProperty('default') ? faker['default'] : faker;
  stringify = stringify && stringify.hasOwnProperty('default') ? stringify['default'] : stringify;
  slugify = slugify && slugify.hasOwnProperty('default') ? slugify['default'] : slugify;
  md5 = md5 && md5.hasOwnProperty('default') ? md5['default'] : md5;
  numeral = numeral && numeral.hasOwnProperty('default') ? numeral['default'] : numeral;
  marked = marked && marked.hasOwnProperty('default') ? marked['default'] : marked;
  Prob = Prob && Prob.hasOwnProperty('default') ? Prob['default'] : Prob;
  pluralize = pluralize && pluralize.hasOwnProperty('default') ? pluralize['default'] : pluralize;
  v = v && v.hasOwnProperty('default') ? v['default'] : v;
  RandExp = RandExp && RandExp.hasOwnProperty('default') ? RandExp['default'] : RandExp;

  // utils

  const unique = (a) => {
    let r = [];
    for (let i = 0; i < a.length; i++) {
      if (r.indexOf(a[i]) === -1) {
        r.push(a[i]);
      }
    }
    return r;
  };

  const random = (min, max) => {
    let offset = min;
    let range = max - min + 1;
    let rd = Math.floor(Math.random() * range) + offset;
    return rd;
  };

  const rand = (a) => {
    let w;
    while (!w) {
      w = a[random(0, a.length - 1)];
    }
    return w;
  };

  const pickLastPunc = () => {
    let a = '.......!?!?;...'.split('');
    return rand(a);
  };

  const pluralize$1 = (word) => {
    if (word.endsWith('s')) {
      return word;
    }
    if (word.match(/(ss|ish|ch|x|us)$/)) {
      word += 'e';
    } else if (word.endsWith('y') && !vowels.includes(word.charAt(word.length - 2))) {
      word = word.slice(0, word.length - 1);
      word += 'ie';
    }
    return word + 's';
  };

  const normalize = (word) => {
    let a = 'a';
    if (word.match(/^(a|e|i|o)/)) {
      a = 'an';
    }
    return `${a} ${word}`;
  };

  // samples

  /* eslint-disable */
  var nouns = [ 'alligator', 'ant', 'bear', 'bee', 'bird', 'camel', 'cat', 'cheetah', 'chicken', 'chimpanzee', 'cow', 'crocodile', 'deer', 'dog', 'dolphin', 'duck', 'eagle', 'elephant', 'fish', 'fly', 'fox', 'frog', 'giraffe', 'goat', 'goldfish', 'hamster', 'hippopotamus', 'horse', 'kangaroo', 'kitten', 'lion', 'lobster', 'monkey', 'octopus', 'owl', 'panda', 'pig', 'puppy', 'rabbit', 'rat', 'scorpion', 'seal', 'shark', 'sheep', 'snail', 'snake', 'spider', 'squirrel', 'tiger', 'turtle', 'wolf', 'zebra', 'apple', 'apricot', 'banana', 'blackberry', 'blueberry', 'cherry', 'cranberry', 'currant', 'fig', 'grape', 'grapefruit', 'grapes', 'kiwi', 'kumquat', 'lemon', 'lime', 'melon', 'nectarine', 'orange', 'peach', 'pear', 'persimmon', 'pineapple', 'plum', 'pomegranate', 'prune', 'raspberry', 'strawberry', 'tangerine', 'watermelon' ];
  var adjectives = [ 'adaptable', 'adventurous', 'affable', 'affectionate', 'agreeable', 'alert', 'alluring', 'ambitious', 'ambitious', 'amiable', 'amicable', 'amused', 'amusing', 'boundless', 'brave', 'brave', 'bright', 'bright', 'broad-minded', 'calm', 'calm', 'capable', 'careful', 'charming', 'charming', 'cheerful', 'coherent', 'comfortable', 'communicative', 'compassionate', 'confident', 'conscientious', 'considerate', 'convivial', 'cooperative', 'courageous', 'courageous', 'courteous', 'creative', 'credible', 'cultured', 'dashing', 'dazzling', 'debonair', 'decisive', 'decisive', 'decorous', 'delightful', 'detailed', 'determined', 'determined', 'diligent', 'diligent', 'diplomatic', 'discreet', 'discreet', 'dynamic', 'dynamic', 'eager', 'easygoing', 'efficient', 'elated', 'eminent', 'emotional', 'enchanting', 'encouraging', 'endurable', 'energetic', 'energetic', 'entertaining', 'enthusiastic', 'enthusiastic', 'excellent', 'excited', 'exclusive', 'exuberant', 'exuberant', 'fabulous', 'fair', 'fair-minded', 'faithful', 'faithful', 'fantastic', 'fearless', 'fearless', 'fine', 'forceful', 'frank', 'frank', 'friendly', 'friendly', 'funny', 'funny', 'generous', 'generous', 'gentle', 'gentle', 'glorious', 'good', 'good', 'gregarious', 'happy', 'hard-working', 'harmonious', 'helpful', 'helpful', 'hilarious', 'honest', 'honorable', 'humorous', 'imaginative', 'impartial', 'impartial', 'independent', 'industrious', 'instinctive', 'intellectual', 'intelligent', 'intuitive', 'inventive', 'jolly', 'joyous', 'kind', 'kind', 'kind-hearted', 'knowledgeable', 'level', 'likeable', 'lively', 'lovely', 'loving', 'loving', 'loyal', 'lucky', 'mature', 'modern', 'modest', 'neat', 'nice', 'nice', 'obedient', 'optimistic', 'painstaking', 'passionate', 'patient', 'peaceful', 'perfect', 'persistent', 'philosophical', 'pioneering', 'placid', 'placid', 'plausible', 'pleasant', 'plucky', 'plucky', 'polite', 'powerful', 'practical', 'pro-active', 'productive', 'protective', 'proud', 'punctual', 'quick-witted', 'quiet', 'quiet', 'rational', 'receptive', 'reflective', 'reliable', 'relieved', 'reserved', 'resolute', 'resourceful', 'responsible', 'rhetorical', 'righteous', 'romantic', 'romantic', 'sedate', 'seemly', 'selective', 'self-assured', 'self-confident', 'self-disciplined', 'sensible', 'sensitive', 'sensitive', 'shrewd', 'shy', 'silly', 'sincere', 'sincere', 'skillful', 'smiling', 'sociable', 'splendid', 'steadfast', 'stimulating', 'straightforward', 'successful', 'succinct', 'sympathetic', 'talented', 'thoughtful', 'thoughtful', 'thrifty', 'tidy', 'tough', 'tough', 'trustworthy', 'unassuming', 'unbiased', 'understanding', 'unusual', 'upbeat', 'versatile', 'vigorous', 'vivacious', 'warm', 'warmhearted', 'willing', 'willing', 'wise', 'witty', 'witty', 'wonderful' ];

  var vowels = [
    'a', 'e', 'i', 'o', 'u', 'y'
  ];

  var sentenceTemplates = [
    'the {{noun}} is {{a_noun}}',
    '{{a_noun}} is {{an_adjective}} {{noun}}',
    'the first {{adjective}} {{noun}} is, in its own way, {{a_noun}}',
    'their {{noun}} was, in this moment, {{an_adjective}} {{noun}}',
    '{{a_noun}} is {{a_noun}} from the right perspective',
    'the literature would have us believe that {{an_adjective}} {{noun}} is not but {{a_noun}}',
    '{{an_adjective}} {{noun}} is {{a_noun}} of the mind',
    'the {{adjective}} {{noun}} reveals itself as {{an_adjective}} {{noun}} to those who look',
    'authors often misinterpret the {{noun}} as {{an_adjective}} {{noun}}, when in actuality it feels more like {{an_adjective}} {{noun}}',
    'we can assume that any instance of {{a_noun}} can be construed as {{an_adjective}} {{noun}}',
    'they were lost without the {{adjective}} {{noun}} that composed their {{noun}}',
    'the {{adjective}} {{noun}} comes from {{an_adjective}} {{noun}}',
    '{{a_noun}} can hardly be considered {{an_adjective}} {{noun}} without also being {{a_noun}}',
    'few can name {{an_adjective}} {{noun}} that isn\'t {{an_adjective}} {{noun}}',
    'some posit the {{adjective}} {{noun}} to be less than {{adjective}}',
    '{{a_noun}} of the {{noun}} is assumed to be {{an_adjective}} {{noun}}',
    '{{a_noun}} sees {{a_noun}} as {{an_adjective}} {{noun}}',
    'the {{noun}} of {{a_noun}} becomes {{an_adjective}} {{noun}}',
    '{{a_noun}} is {{a_noun}}\'s {{noun}}',
    '{{a_noun}} is the {{noun}} of {{a_noun}}',
    '{{an_adjective}} {{noun}}\'s {{noun}} comes with it the thought that the {{adjective}} {{noun}} is {{a_noun}}',
    '{{nouns}} are {{adjective}} {{nouns}}',
    '{{adjective}} {{nouns}} show us how {{nouns}} can be {{nouns}}',
    'before {{nouns}}, {{nouns}} were only {{nouns}}',
    'those {{nouns}} are nothing more than {{nouns}}',
    'some {{adjective}} {{nouns}} are thought of simply as {{nouns}}',
    'one cannot separate {{nouns}} from {{adjective}} {{nouns}}',
    'the {{nouns}} could be said to resemble {{adjective}} {{nouns}}',
    '{{an_adjective}} {{noun}} without {{nouns}} is truly a {{noun}} of {{adjective}} {{nouns}}'
  ];

  var phrases = [
    'to be more specific, ',
    'in recent years, ',
    'however, ',
    'by the way',
    'of course, ',
    'some assert that ',
    'if this was somewhat unclear, ',
    'unfortunately, that is wrong; on the contrary, ',
    'it\'s very tricky, if not impossible, ',
    'this could be, or perhaps ',
    'this is not to discredit the idea that ',
    'we know that ',
    'it\'s an undeniable fact, really; ',
    'framed in a different way, ',
    'what we don\'t know for sure is whether or not ',
    'as far as we can estimate, ',
    'as far as he is concerned, ',
    'the zeitgeist contends that ',
    'though we assume the latter, ',
    'far from the truth, ',
    'extending this logic, ',
    'nowhere is it disputed that ',
    'in modern times ',
    'in ancient times ',
    'recent controversy aside, ',
    'washing and polishing the car,',
    'having been a gymnast, ',
    'after a long day at school and work, ',
    'waking to the buzz of the alarm clock, ',
    'draped neatly on a hanger, ',
    'shouting with happiness, '
  ];

  const addTemplates = (ls) => {
    let a = sentenceTemplates.concat(ls);
    sentenceTemplates = unique(a);
    return sentenceTemplates.length;
  };

  /**
   * txtgen
   * @ndaidong
  **/

  let actions = [
    'noun', 'a_noun', 'nouns',
    'adjective', 'an_adjective',
  ];

  const generator = {
    noun: () => {
      return rand(nouns);
    },
    a_noun: () => { // eslint-disable-line camelcase
      return normalize(rand(nouns));
    },
    nouns: () => {
      return pluralize$1(rand(nouns));
    },
    adjective: () => {
      return rand(adjectives);
    },
    an_adjective: () => { // eslint-disable-line camelcase
      return normalize(rand(adjectives));
    },
  };

  const trim = (s) => {
    return s.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '')
      .replace(/\r?\n|\r/g, ' ')
      .replace(/\s\s+|\r/g, ' ');
  };

  const make = (template) => {
    let sentence = template;
    let occurrences = template.match(/\{\{(.+?)\}\}/g);

    if (occurrences && occurrences.length) {
      for (let i = 0; i < occurrences.length; i++) {
        let action = trim(occurrences[i].replace('{{', '').replace('}}', ''));
        let result;
        if (actions.includes(action)) {
          result = generator[action]();
        }
        sentence = sentence.replace(occurrences[i], result);
      }
    }
    return sentence;
  };

  const randomStartingPhrase = () => {
    if (Math.random() < 0.33) {
      return rand(phrases);
    }
    return '';
  };

  const makeSentenceFromTemplate = () => {
    return make(rand(sentenceTemplates));
  };

  const sentence = () => {
    let phrase = randomStartingPhrase();
    let s = phrase + makeSentenceFromTemplate();
    s = s.charAt(0).toUpperCase() + s.slice(1);
    s += pickLastPunc();
    if (Math.random() >= 0.9) {
      let quotationEntries = [
        'He said',
        'She said',
        'In his own words',
        'In her own words',
        'Yelling',
        'Wispering',
        'Quoting with intend'
      ];
      s = `${rand(quotationEntries)}: "${s}"`;
    }
    return s;
  };

  const paragraph = (len = 0) => {
    if (!len) {
      len = random(3, 10);
    }
    let t = Math.min(len, 15);
    let a = [];
    while (a.length < t) {
      let s = sentence();
      a.push(s);
    }
    return a.join(' ');
  };

  const article = (len = 0) => {
    if (!len) {
      len = random(3, 10);
    }
    let t = Math.min(len, 15);
    let a = [];
    while (a.length < t) {
      let s = paragraph();
      a.push(s);
    }
    return a.join('\n\n');
  };

  const chance = new Chance();

  function randomTime() {
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

  function normalDistRandomInt(min, max) {
      let normal = Math.abs((Prob.normal(0, 1)() + 3) / 6),
          result = Math.floor((normal * (max - min)) + min);

      if (result < min) result = min;
      if (result > max) result = max;

      return result;
  }

  function minStrLength(strArray) {
      return Math.min.apply(Math, strArray.map(function (str) { return str.length; }));
  }

  function maxStrLength(strArray) {
      return Math.max.apply(Math, strArray.map(function (str) { return str.length; }));
  }

  function minWordCount(strArray) {
      return Math.min.apply(Math, strArray.map(function (str) {
          let parts = _.compact(str.replace(/[^\sA-Za-z]/g, '').split(' '));
          return parts.length; 
      }));
  }

  function maxWordCount(strArray) {
      return Math.max.apply(Math, strArray.map(function (str) {
          let parts = _.compact(str.replace(/[^\sA-Za-z]/g, '').split(' '));
          return parts.length; 
      }));
  }

  function minSentenceCount(strArray) {
      return Math.min.apply(Math, strArray.map(function (str) {
          let parts = _.compact(str.split(/[\.\!\?]+/));
          return parts.length; 
      }));
  }

  function maxSentenceCount(strArray) {
      return Math.max.apply(Math, strArray.map(function (str) {
          let parts = _.compact(str.split(/[\.\!\?]+/));
          return parts.length; 
      }));
  }

  function minParagraphCount(strArray) {
      return Math.min.apply(Math, strArray.map(function (str) {
          let parts = _.compact(str.replace(/\n$/gm, '').split(/\n/));
          return parts.length;
      }));
  }

  function maxParagraphCount(strArray) {
      return Math.max.apply(Math, strArray.map(function (str) {
          let parts = _.compact(str.replace(/\n$/gm, '').split(/\n/));
          return parts.length;
      }));
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
  }
  function isDateString(str) {
      return /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(str);
  }

  function isDatetimeString(str) {
      return /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\+[0-9]{2}:[0-9]{2}$/.test(str);
  }

  function isTimeString(str) {
      return /^[0-9]{2}:[0-9]{2}:[0-9]{2}$|^[0-9]{2}:[0-9]{2}$/.test(str);
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

  function getDateDirection(entries) {
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

  function filterValue(value, filter) {
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
              return dateFns.format(new Date(value), filterSplit[1]);
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

  function applyFilters(value, filters) {
      let filtered = filterValue(value, filters[1]),
          nr = 2;

      while (filters.length > nr) {
          filtered = filterValue(filtered, filters[nr]);
          nr++;
      }

      return filtered;
  }

  function getValuesByPath(path, reftype, id, data) {
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

  function getFieldByPath(row, path, data) {
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

  function detectFieldType(fieldValue) {
      let fieldType = 'undefined',
          containsTemplate = false,
          refTypes = [],
          refTypeIds = {};

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
              if (fieldValue.length > 0) {
                  let subType = detectFieldType(fieldValue[0]).fieldType;
                  if (subType === 'JSON' && Object.keys(fieldValue[0])[0].endsWith('_id')) {
                      let v$$1;

                      for (v$$1 of fieldValue) {
                          let type = Object.keys(v$$1)[0].slice(0, -3),
                              id = v$$1[Object.keys(v$$1)[0]];
                          refTypes.push(type);
                          if (typeof refTypeIds[type] === 'undefined') {
                              refTypeIds[type] = [id];
                          } else {
                              refTypeIds[type].push(id);
                          }
                      }
                  }
                  fieldType += '.' + subType;
              }
          } else {
              fieldType = 'JSON';
          }
      }

      return {
          fieldType: fieldType,
          containsTemplate: containsTemplate,
          refTypes: _.uniq(refTypes),
          refTypeIds: refTypeIds
      }
  }

  function renameProperty(obj, oldName, newName) {
      if (oldName == newName) {
          return obj;
      }

      if (obj.hasOwnProperty(oldName)) {
          obj[newName] = obj[oldName];
          delete obj[oldName];
      }

      return obj;
  }

  function getFieldRules(key, value, type, prevFields) {
      let rules = [],
          prevField;

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

  function removeIncompatibleRules(rules) {
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

  function rulesAreValid(value, rules, row, type) {
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

  function ruleBasedValue(rules, row, key) {
      let field;

      for (field in row) {
          if (rules.indexOf(`${key}=${field}`) > -1) {
              return row[field];
          }
      }

      return null;
  }

  function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function detectStringpattern(strings) {
      let stringLength = null,
          pattern = '',
          str;

      for (str of strings) {
          let newPattern = '',
              char;

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

  function stringFromPattern(pattern) {
      let output = '',
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

  function arrayToObject(array, key) {
      return array.reduce((obj, item) => {
          obj[item[key]] = item;
          delete(obj[item[key]][key]);
          return obj
      }, {});
  }

  function parseTemplateVariables(data) {
      let type, row, field;
      
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

  const chance$1 = new Chance();

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
                              objRefTypeIds = result.refTypeIds;

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
                          value = chance$1.weighted(settings.fields[field].entries, settings.fields[field].weights);
                      } else {

                          if (field === 'id') value = id;
                          if ((field === 'age' || field.endsWith('.age')) && settings.fields[field].type === 'int') value = chance$1.age();
                          if ((field === 'firstname' || field.endsWith('.firstname')) && settings.fields[field].type === 'string') value = chance$1.first();
                          if ((field === 'lastname' || field.endsWith('.lastname')) && settings.fields[field].type === 'string') value = chance$1.last();
                          if ((field === 'company' || field.endsWith('.company')) && settings.fields[field].type === 'string') value = chance$1.company();
                          if ((field === 'country' || field.endsWith('.country')) && settings.fields[field].type === 'string') value = chance$1.country();
                          if ((field === 'email' || field.endsWith('.email')) && settings.fields[field].type === 'string') value = faker.internet.exampleEmail();
                          if ((field === 'color' || field.endsWith('.color')) && settings.fields[field].type === 'string') value = chance$1.color();
                          if ((field === 'ip' || field.endsWith('.ip')) && settings.fields[field].type === 'string') value = chance$1.ip();
                          if ((field === 'profession' || field.endsWith('.profession')) && settings.fields[field].type === 'string') value = chance$1.profession();
                          if ((field === 'url' || field.endsWith('.url')) && settings.fields[field].type === 'string') value = chance$1.url();
                          if ((field === 'city' || field.endsWith('.city')) && settings.fields[field].type === 'string') value = chance$1.city();
                          if ((field === 'street' || field.endsWith('.street')) && settings.fields[field].type === 'string') value = chance$1.street();
                          if ((field === 'zip' || field.endsWith('.zip')) && settings.fields[field].type === 'int') value = parseInt(chance$1.zip());
                          if ((field === 'weekday' || field.endsWith('.weekday')) && settings.fields[field].type === 'string') value = chance$1.weekday();
                          if ((field === 'year' || field.endsWith('.year')) && settings.fields[field].type === 'int') value = parseInt(chance$1.year());
                          if ((field === 'password' || field.endsWith('.password')) && settings.fields[field].type === 'string') value = chance$1.hash();
                          if ((field === 'guid' || field.endsWith('.guid')) && settings.fields[field].type === 'string') value = chance$1.guid();
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
                                      return {[ref]: _.random(minRef, maxRef)}
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
                                      if (settings.fields[field].entries[0][0].toUpperCase() === settings.fields[field].entries[0][0]) {
                                          value = chance$1.capitalize(chance$1.word({ length: Math.floor(Math.random() * minLength) + maxLength }));
                                      } else {
                                          value = chance$1.string({ length: Math.floor(Math.random() * minLength) + maxLength });
                                      }
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
                                      value = Number(chance$1.floating({ min: minFloat, max: maxFloat }).toFixed(maxPrecision));
                                      cnt++;
                                  }
                              } else {
                                  value = ruleValue;
                              }
                          }

                          if (value === '' && settings.fields[field].type === 'char') {
                              if (settings.fields[field].entries[0] === settings.fields[field].entries[0].toUpperCase()) {
                                  value = chance$1.letter({ casing: 'upper' });
                              } else if (settings.fields[field].entries[0] === settings.fields[field].entries[0].toLowerCase()) {
                                  value = chance$1.letter({ casing: 'lower' });
                              } else {
                                  value = chance$1.letter();
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
  };

});
