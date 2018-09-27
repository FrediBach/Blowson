# Detections

Blowson analyses your field names, field content and relationships between fields to guess the correct rules to create new entries. There is a whole range of detection concepts explained below. By following this concepts, you can create huge amounts of realistic sample data.

## Keys

The most basic detection is by the exact name of a fields key. Here are all the currently detected field keys:

| Field Key     | Example Value           |
|---------------|-------------------------|
| id            | 1                       |
| age           | 38                      |
| firstname     | Mike                    |
| lastname      | Smith                   |
| company       | Google                  |
| country       | CH                      |
| email         | Kody48@example.org      |
| color         | #45ffdc                 |
| ip            | 11.47.204.208           |
| profession    | Analyst                 |
| url           | https://www.example.org/  |
| city          | Flatleybury             |
| street        | 082 Sanford Park        |
| zip           | 55130                   |
| weekday       | Saturday                |
| year          | 2007                    |
| password      | ofbgqSIvbaWGvAa         |
| guid          | 63230c6c-8621-4eb0-aad0-2a7af12fb843      |
| product       | Hat                     |
| material      | Rubber                  |
| iban          | EE917001009726211084    |
| bic           | IKYUMUS1490             |
| avatar        | https://s3.amazonaws.com/uifaces/faces/twitter/edkf/128.jpg    |
| username      | Heidi4                  |
| homepage      | http://alvena.name      |
| job           | Accountant              |
| mimetype      | application/x-silverlight-app       |

## Content

If a field type can't be detected by its key, Blowson will try to guess the type by it's content. The following detections currently exists:

- Word
- Sentence
- Paragraph
- Article
- String
- Char
- Integer
- Float
- Boolean
- Date (in the format: 1976-05-23)
- Datetime (in the format: 1976-05-23T15:48:45+01:00)
- Time (in the format: 23:56)
- Array of numbers (for multiple relationship fields)

Sentence, paragraph and article will be generated in English and the script will try to guess a correct range of amounts. So for example if your sample looks like this:

```json
{
    "headlines": [
        "id": 1, "title": "What a beautiful day this is!",
        "id": 3, "title": "Just another day."
    ]
}
```

The script will guess that you want title sentences with at least three words and a maximum of 6 words. Something like:

```json
{
    "headlines": [
        "id": 1, "title": "What a beautiful day this is!",
        "id": 2, "title": "Worst day of my life.",
        "id": 3, "title": "Just another day."
    ]
}
```

Well, it will just generate a random sentence, so probably contextually completely unrelated, but that's all we need for sample data.

Additionally, long words will appear once in a while to make it possible to test UI problems.

## Repeated values

If you repeat a value, it is handled like enumerations, so only available values will be used. Here's an example:

```json
{
    "scores": [
        "id": 1, "user_id": 1, "game_id": 12, "score": 250,
        "id": 2, "user_id": 5, "game_id": 3, "score": 500,
        "id": 5, "user_id": 72, "game_id": 11, "score": 500
    ]
}
```

Because the score `500` is repeated twice, all generated values will use either score `250` or score `500`. The fields `user_id` and `game_id` have no repeated values, so everything generated will be random. Here's a possible result:

```json
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

## Ranges

The range of your sample values is being respected. For example in the example above, `user_id` has samples between 1 and 72, so only values between 1 and 72 will be generated. Not only integers and floats can have ranges, date and datetime can have ranges, as well. So for example if you have a birthday field like in this sample data:

```json
{
    "users": [
        "id": 1, "firstname": "Mike", "birthday": "1975-09-03",
        "id": 2, "firstname": "Alex", "birthday": "1922-03-01",
        "id": 5, "firstname": "Lucy", "birthday": "1988-11-21"
    ]
}
```

The range detected will be 1922-03-01 to 1988-11-21 and the generated data could look like this:

```json
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

Ranges can be used in creative ways. For example if you want to restrict coordinates to all be in a specific rectangle, all you have to do is put two coordinates in your sample to the edges of that rectangle, something like this:

```json
{
    "waypoints": [
        "id": 1, "lat": 46.204, "lng": 6.1432,
        "id": 10, "lat": 47.678, "lng": 9.173
    ]
}
```

This would roughly limit the randomly generated waypoints to be inside of Switzerland.

## Direction

The direction of numbers is being detected. So for example is this sample:

```json
{
    "waypoints": [
        "id": 1, "score": 100,
        "id": 2, "score": 150,
        "id": 5, "score": 1000
    ]
}
```

The result would be something like:

```json
{
    "waypoints": [
        "id": 1, "score": 100,
        "id": 2, "score": 150,
        "id": 3, "score": 450,
        "id": 4, "score": 700,
        "id": 5, "score": 1000
    ]
}
```

To prevent this behaviour, simply add one value that breaks the direction:

```json
{
    "waypoints": [
        "id": 1, "score": 150,
        "id": 2, "score": 100,
        "id": 5, "score": 1000
    ]
}
```

Direction detection works for `int`, `float`, `date` and `datetime`.

## Inter Field Rules

Blowson tries to detect the rules between each non id field in a row. For example if you have a field `from` and a field `to` and to is always bigger than from, than all the generated numbers will follow that rule. Currently `int`, `float`, `date` and `datetime` values have detectedions for `>`, `<` and `=`. An example:

```json
{
    "ranges": [
        "id": 1, "from": 1, "to": 2,
        "id": 2, "from": 6.9, "to": 34.87,
        "id": 5, "from": 99, "to": 100
    ]
}
```

As `from` is always smaller than `to`, the result will look like this:

```json
{
    "ranges": [
        "id": 1, "from": 1, "to": 2,
        "id": 2, "from": 6.9, "to": 34.87,
        "id": 3, "from": 65.3, "to": 77.32,
        "id": 4, "from": 42.1, "to": 43.65,
        "id": 5, "from": 99, "to": 100
    ]
}
```

If you don't want such rules to be followed, all you have to do is define sample data without such rules:

```json
{
    "ranges": [
        "id": 1, "from": 1, "to": 1,
        "id": 2, "from": 34, "to": 67,
        "id": 5, "from": 100, "to": 100
    ]
}
```

Row with `id` 1 and 5 have equal numbers and the row with `id` 2 has `to` bigger than `from`. So no rule will be detected.

## Occurrence Frequency

Another feature of the above used sample data is that the score `500` is twice in the sample data and `250` only once. This will be detected and the score 500 will have a higher chance of occuring in the generated data (twice as likely to be exact).

## Optionals

Key value pairs that don't show up in every single entry are handled as optional and randomly added to new entries. For example with this sample data:

```json
{
    "users": [
        "id": 1, "firstname": "Mike", "admin": true,
        "id": 2, "firstname": "Alex",
        "id": 5, "firstname": "Lucy"
    ]
}
```

Only one entry has the field `admin`, so that field will be an optional one. Here's a generated dataset:

```json
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

## Steps

Let's say you have the numbers 25, 50 and 100 in your sample data. In this case we assume, that only 25, 50, 75 and 100 is a possible random number. Blowson respects the steps between values by detecting the minimal gap between numbers. If you don't want a minimum gap, just add a minimal gap of one to your sample data like this:

```json
{
    "scores": [
        "id": 1, "user_id": 1, "game_id": 12, "score": 1,
        "id": 2, "user_id": 5, "game_id": 3, "score": 2,
        "id": 5, "user_id": 72, "game_id": 11, "score": 1000
    ]
}
```

In the above case, the score would be a random number between 1 and 1000. If you want a step of 50, you could define the sample data like this:

```json
{
    "scores": [
        "id": 1, "user_id": 1, "game_id": 12, "score": 50,
        "id": 2, "user_id": 5, "game_id": 3, "score": 100,
        "id": 5, "user_id": 72, "game_id": 11, "score": 1000
    ]
}
```

## Floating Point Precision

If you have floating point numbers in your data, the script will respect the precision of them. Let's say you have the numbers 1.56, 1.4 and 12.64, than the script will never add a number like 4.192234 as that would exceed the precision of two.

## Relationship Fields

In a context where you use sample data to fill a database, you often will have to define relationship fields like `user_id`. Now to have realistic values in those fields, you need to follow one simple rule, always define your field value range to the size of the table you're connecting to. Here's an example:

```json
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

The random numbers for relationship ids are normally distributed (bell curve). This way you get more numbers in the middle of the range, creating ids that have more relationships than others. This is quite useful to test the different behavior of different amounts of related items in a project. For example in the case above, users with ids around 25 will have more comments than users closer to 1 and 50.

If you use a JS export as in the examples you can find in the package, it's a good idea to first define constants for all this sizes, so that you only have one place where you need to change them.