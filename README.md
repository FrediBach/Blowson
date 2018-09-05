# json-data-extender
Extend JSON like sample data based on some very simple rules.

## Usage

Installation:

`npm i json-data-extender --save`

And than in your script:

```
const extendData = require('json-data-extender');
const data = require('./data.js');

const extendedData = extendData(data);

console.log(extendedData);
```

Have a look at the index.js for a complete example and check out data.js for an example data file.

## Extend ID range

Fill in gaps in a types entries based on the available ids. So if you have id 1, 2, 3 and 10, it will add fake entries with ids 4,5,6,7,8 and 9.

## Detect specific keys

Currently detected keys:

- id
- age
- firstname
- lastname
- company
- country
- email
- color
- ip
- profession
- url
- city
- street
- zip
- weekday
- year
- password
- GUID

## Other auto detections

- Words
- Sentences
- Paragraphs
- Strings
- Chars
- Integers
- Floats
- Dates
- Datetimes
- Times

## Repeated values

If you repeat a value, it is handled as Enum values, so only available values will be used.

## Optional values

Key value pairs that don't show up in every entry are handled as optional and randomly added to new entries.

## Step detection

Let's say you have the numbers 25, 50 and 100 in your sample data. In this case we assume, that only 25, 50, 75 and 100 is a possible random number. It respects the steps.

## Weighted randomness

For example if you have a gender field in your user type. Two of the sample users are male and one is female, than the randomly added enries will respect that frequency and add more males than femals to your sample data.