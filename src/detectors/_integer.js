import is from 'is_js';
import { getNumberDirection } from '../helpers';

export default function _integer(values) {
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
};
