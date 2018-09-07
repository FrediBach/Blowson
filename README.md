# json-data-extender
Extend JSON like sample data based on some very simple rules.

## About

JSON Data Extender was created to make mocking of API's with realistic sample data easier and more powerful. It's an integral part of a Frontend First Development workflow described here: [www.frontendfirstdevelopment.com](http://www.frontendfirstdevelopment.com/)

Other related projects and libraries are: [JSON Data Import](https://github.com/hasura/json-data-import) (for Hasura)

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

For JSON Data Extender to work, your types need an `id` field and the entries need to have a gap. So for example if you have ids 1, 2, 3 and 10, it will add fake entries with ids 4,5,6,7,8 and 9. For types without a gap in its ids, nothing will be added. Only one gap is being detected.

Here's an example data file to better illustrate how this works:

```
{
    "users": [
        "id": 1, "firstname": "Mike", "age": 12,
        "id": 2, "firstname": "Alex", "age": 18,
        "id": 5, "firstname": "Lucy", "age": 31
    ]
}
```

Because there's a gap between 2 and 5, new entries with ids 3 und 4 will be generated. Something like this:

```
{
    "users": [
        "id": 1, "firstname": "Mike", "age": 12,
        "id": 2, "firstname": "Alex", "age": 18,
        "id": 3, "firstname": "Tom", "age": 14,
        "id": 4, "firstname": "Kevin", "age": 27,
        "id": 5, "firstname": "Lucy", "age": 31
    ]
}
```

The gap can theoretically be as big as you like, but I'm sure at some point node will run out of memory and terminate the script.

## Detect specific keys

As you could see in the example above, JSON Data Extender correctly guessed that `firstname` is a field for ... well, firstnames. Here are all the currently detected field keys:

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
- product
- material
- iban
- bic
- avatar
- username
- homepage
- job
- mimetype

## Other auto detections

If a field type can't be detected by its key, JSON Data Extender will try to guess the type by it's content. The following detections currently exists:

- Word
- Sentence
- Paragraph
- Article
- String
- Char
- Integer
- Float
- Boolean
- Date
- Datetime
- Time

Sentence, paragraph and article will be generated in English and the script will try to guess a correct range of amounts. So for example if your sample looks like this:

```
{
    "headlines": [
        "id": 1, "title": "What a beautiful day this is!",
        "id": 3, "title": "Just another day."
    ]
}
```

The script will guess that you want tiitle sentences with at least three words and a maximum of 6 words. Something like:

```
{
    "headlines": [
        "id": 1, "title": "What a beautiful day this is!",
        "id": 2, "title": "Worst day of my life.",
        "id": 3, "title": "Just another day."
    ]
}
```

Well, it will just generate a random sentence, so probably contextually completely unrelated, but that's all we need for sample data.

## Repeated values

If you repeat a value, it is handled like enumerations, so only available values will be used. Here's an example:

```
{
    "scores": [
        "id": 1, "user_id": 1, "game_id": 12, "score": 250,
        "id": 2, "user_id": 5, "game_id": 3, "score": 500,
        "id": 5, "user_id": 72, "game_id": 11, "score": 500
    ]
}
```

Because the score `500` is repeated twice, all generated values will use either score `250` or score `500`. The fields `user_id` and `game_id`have no repeated values, so everything generated will be random. Here's a possible result:

```
{
    "scores": [
        "id": 1, "user_id": 1, "game_id": 12, "score": 250,
        "id": 2, "user_id": 5, "game_id": 3, "score": 500,
        "id": 3, "user_id": 45, "game_id": 5, "score": 500,
        "id": 4, "user_id": 39, "game_id": 4, "score": 250,
        "id": 5, "user_id": 72, "game_id": 11, "score": 500
    ]
}
```

## Range detection

The range of your sample values is being respected. For example in the example above, `user_id` has samples between 1 and 72, so only values between 1 and 72 will be generated. Not only integers and floats can have ranges, date and datetime can have ranges, as well. So for example if you have a birthday field like in this sample data:

```
{
    "users": [
        "id": 1, "firstname": "Mike", "birthday": "1975-09-03",
        "id": 2, "firstname": "Alex", "birthday": "1922-03-01",
        "id": 5, "firstname": "Lucy", "birthday": "1988-11-21"
    ]
}
```

The range detected will be 1922-03-01 to 1988-11-21 and the generated data could look like this:

```
{
    "users": [
        "id": 1, "firstname": "Mike", "birthday": "1975-09-03",
        "id": 2, "firstname": "Alex", "birthday": "1922-03-01",
        "id": 3, "firstname": "Kevin", "birthday": "1966-12-18",
        "id": 4, "firstname": "Tom", "birthday": "1933-02-08",
        "id": 5, "firstname": "Lucy", "birthday": "1988-11-21"
    ]
}
```

Ranges can be used in creative ways. For example if you want to restrict coordinates to all be in a specific rectanle, all you have to do is put two coordinates in your sample to the edges of that rectangle, something liek this:

```
{
    "waypoints": [
        "id": 1, "lat": 46.204, "lng": 6.1432,
        "id": 10, "lat": 47.678, "lng": 9.173
    ]
}
```

This would roughly limit the randomly generated waypoints to be inside of Switzerland.

## Weighted randomness

Another feature of the above used sample data is that the score `500` is twice in the sample data and `250` only once. This will be detected and the score 500 will have a higher chance of occuring in the generated data (twice as likely to be exact).

## Optional values

Key value pairs that don't show up in every single entry are handled as optional and randomly added to new entries. For example with this sample data:

```
{
    "users": [
        "id": 1, "firstname": "Mike", "admin": true,
        "id": 2, "firstname": "Alex",
        "id": 5, "firstname": "Lucy"
    ]
}
```

Only one entry has the field `admin`, so that field will be an optional one. Here's a generated dataset:

```
{
    "users": [
        "id": 1, "firstname": "Mike", "admin": true,
        "id": 2, "firstname": "Alex",
        "id": 3, "firstname": "Tom",
        "id": 4, "firstname": "Kevin", "admin": true,
        "id": 5, "firstname": "Lucy"
    ]
}
```

## Step detection

Let's say you have the numbers 25, 50 and 100 in your sample data. In this case we assume, that only 25, 50, 75 and 100 is a possible random number. JSON Data Extender respects the steps between values by detecting the minimal gap between numbers. If you don't want a minimum gap, just add a minimal gap of one to your sample data like this:

```
{
    "scores": [
        "id": 1, "user_id": 1, "game_id": 12, "score": 1,
        "id": 2, "user_id": 5, "game_id": 3, "score": 2,
        "id": 5, "user_id": 72, "game_id": 11, "score": 1000
    ]
}
```

In the above case, the score would be a random number between 1 and 1000. If you want a step of 50, you could define the sample data like this:

```
{
    "scores": [
        "id": 1, "user_id": 1, "game_id": 12, "score": 50,
        "id": 2, "user_id": 5, "game_id": 3, "score": 100,
        "id": 5, "user_id": 72, "game_id": 11, "score": 1000
    ]
}
```

## Floating point precision

If you have floating point numbers in your data, the script will respect the precision of them. Let's say you have the numbers 1.56, 1.4 and 12.64, than the script will never add a number like 4.192234 as that would exceed the precision of two.

## Relationship fields

In a context where you use sample data to fill a database, you often will have to define relationship fields like `user_id`. Now to have realistic values in those fields, you need to follow one simple rule, always define your field value range to the size of the table you're connecting to. Here's an example:

```
{
    "users": [
        "id": 1, "firstname": "Mike", "age": 12,
        "id": 50, "firstname": "Lucy", "age": 31
    ],
    "comments": [
        "id": 1, "user_id": 1, "text": "Some text",
        "id": 250, "user_id": 50, "text": "Some more text"
    ]
}
```

First 50 users are generated with ids from 1 to 50, so the `user_id` relationship field in the comments table should be synced to that range, so we add 1 and 50. As 250 comments will be generated, every user will have an average of five comments.

If you use a JS export as in the examples you can find in the package, it's a good idea to first define constants for all this sizes, so that you only have one place where you need to change them.