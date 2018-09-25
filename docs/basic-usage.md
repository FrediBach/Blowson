# Basic Usage

## Installation:

`$ npm i blowson --save`

## Sample Data

Your sample data file:

```javascript
const userCount = 50;
const commentCount = 250;

module.exports = {
    "users": [
        "id": 1, "firstname": "Mike", "age": 12,
        "id": userCount, "firstname": "Lucy", "age": 31
    ],
    "comments": [
        "id": 1, "user_id": 1, "text": "Some text",
        "id": commentCount, "user_id": userCount, "text": "Some more text"
    ]
};
```

## Node Script

And than in your script:

```javascript
const blowson = require('blowson');
const data = require('./data.js');

const extendedData = blowson(data);

console.log(extendedData);
```

The `blowson` function accepts either a JSON string or a JSON like JavaScript object. In case of a JSON string, a nicelly formatted string is being returned. This however involves some extra parsing on the side of Blowson, so we recommend using a JSON like JS object.

Have a look at the index.js for a complete example and check out data.js for an example data file.

## CLI Usage

You can use Blowson as a CLI script. All you need to do is install the package globally:

```
$ npm install -g blowson
```

And than run it like this:

```
$ blowson data.js data-extended.js
```

Or:

```
$ blowson data.json data-extended.json
```