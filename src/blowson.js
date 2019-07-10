import _ from 'lodash';
import traverse from 'traverse';

import {
    findGap,
} from './helpers';

import * as detectors from './detectors/index';

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
                }
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
}