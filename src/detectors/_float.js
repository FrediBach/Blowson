import is from 'is_js';
import { getNumberDirection } from '../helpers';

export default function _float(values) {
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
};
