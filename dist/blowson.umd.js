(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('lodash'), require('traverse'), require('chance'), require('slugify'), require('md5'), require('date-fns'), require('numeral'), require('marked'), require('prob.js'), require('pluralize'), require('voca'), require('randexp'), require('faker'), require('is_js')) :
  typeof define === 'function' && define.amd ? define(['lodash', 'traverse', 'chance', 'slugify', 'md5', 'date-fns', 'numeral', 'marked', 'prob.js', 'pluralize', 'voca', 'randexp', 'faker', 'is_js'], factory) :
  (global = global || self, factory(global._, global.traverse, global.Chance, global.slugify, global.md5, global.dateFns, global.numeral, global.marked, global.Prob, global.pluralize, global.v, global.RandExp, global.faker, global.is));
}(this, function (_, traverse, Chance, slugify, md5, dateFns, numeral, marked, Prob, pluralize, v, RandExp, faker, is) { 'use strict';

  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;
  traverse = traverse && traverse.hasOwnProperty('default') ? traverse['default'] : traverse;
  Chance = Chance && Chance.hasOwnProperty('default') ? Chance['default'] : Chance;
  slugify = slugify && slugify.hasOwnProperty('default') ? slugify['default'] : slugify;
  md5 = md5 && md5.hasOwnProperty('default') ? md5['default'] : md5;
  numeral = numeral && numeral.hasOwnProperty('default') ? numeral['default'] : numeral;
  marked = marked && marked.hasOwnProperty('default') ? marked['default'] : marked;
  Prob = Prob && Prob.hasOwnProperty('default') ? Prob['default'] : Prob;
  pluralize = pluralize && pluralize.hasOwnProperty('default') ? pluralize['default'] : pluralize;
  v = v && v.hasOwnProperty('default') ? v['default'] : v;
  RandExp = RandExp && RandExp.hasOwnProperty('default') ? RandExp['default'] : RandExp;
  faker = faker && faker.hasOwnProperty('default') ? faker['default'] : faker;
  is = is && is.hasOwnProperty('default') ? is['default'] : is;

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

}));
