# Basic Concepts

Blowson is detection based. You need to follow some very basic rules on how to construct your sample data files for Blowson to work correctly.

## Extend ID range

The most basic concept you need to follow is the concept of a gap in your ID range. Your types need an `id` field and the entries need to have a gap. So for example if you have ids 1, 2, 3 and 10, it will add fake entries with ids 4,5,6,7,8 and 9. For types without a gap in its ids, nothing will be added. Only one gap is being detected.

Here's an example data file to better illustrate how this works:

```json
{
    "users": [
        { "id": 1, "firstname": "Mike", "age": 12 },
        { "id": 2, "firstname": "Alex", "age": 18 },
        { "id": 5, "firstname": "Lucy", "age": 31 }
    ]
}
```

Because there's a gap between 2 and 5, new entries with ids 3 und 4 will be generated. Something like this:

```json
{
    "users": [
        { "id": 1, "firstname": "Mike", "age": 12 },
        { "id": 2, "firstname": "Alex", "age": 18 },
        { "id": 3, "firstname": "Tom", "age": 14 },
        { "id": 4, "firstname": "Kevin", "age": 27 },
        { "id": 5, "firstname": "Lucy", "age": 31 }
    ]
}
```

The gap can theoretically be as big as you like, but I'm sure at some point node will run out of memory and terminate the script.

## Custom field names

Sometimes you want Blowson to detect a field key, but you want a different custom name for that field. Let's say you want your field to be named `surname` but Blowson only detecs `lastname`, so it would only fill in a random string and not a latname. This can be solved with custom filed names like this: `surname__lastname`. This field will be detected as `lastname`, and in the extended data outputed as `surname`. An example:

```json
{
    "users": [
        { "id": 1, "firstname": "Mike", "surname__lastname": "Smith" },
        { "id": 5, "firstname": "Lucy", "surname__lastname": "Johnson" }
    ],
}
```

The result will be something like:

```json
{
    "users": [
        { "id": 1, "firstname": "Mike", "surname": "Smith" },
        { "id": 2, "firstname": "Mike", "surname": "Williams" },
        { "id": 3, "firstname": "Mike", "surname": "Jones" },
        { "id": 4, "firstname": "Mike", "surname": "Brown" },
        { "id": 5, "firstname": "Lucy", "surname": "Johnson" }
    ],
}
```

Be careful if you rename the field. Your field variables will see the detected field and not the final name, so in the example above, the fields internal name will be `lastname`, so your template variable should be `{{field.lastname}}` and not `{{field.surname}}` or even `{{field.surname__lastname}}`.

## Temporary fields

Sometimes you want a field that will not show up in the final result. You can accomplish this by prefixing the fieldname with `__`, for example `__prename`. You can use this for something like this:

```json
{
    "users": [
        { "id": 1, "name": "{{field.firstname}} {{field.lastname}}", "__firstname": "Tim", "__lastname": "Jones" },
        { "id": 5, "name": "{{field.firstname}} {{field.lastname}}", "__firstname": "Mike", "__lastname": "Williams" }
    ],
}
```

Result would be something like:

```json
{
    "users": [
        { "id": 1, "name": "Tim Jones" },
        { "id": 2, "name": "Tom Smith" },
        { "id": 3, "name": "Susanna Brown" },
        { "id": 4, "name": "Luke Johnson" },
        { "id": 5, "name": "Mike Williams" }
    ],
}
```

Another use for temporary fields is removing the id field. As you know, the id field is needed to detect a gap, but if you only want to generate data for non database usecases, you probably don't need an id field, so just declare it as temporary with `__id` and it will be removed in the output. Of course you can't use relationships in this usecase.

## Object Keys

Sometimes you don't want an array of objects, you want an object of objects where a selected field, normally the id, acts as the key for the object. This is for example needed if you want to use Firebase and than convert to Hasura. You define the key with three underscores like this: `___id`. An example:

```json
{
    "names": [
        { "___id": 1, "firstname": "Mike", "lastname": "Smith" },
        { "___id": 5, "firstname": "Lucy", "lastname": "Johnson" }
    ]
}
```

Will end up as something like:

```json
{
    "names": {
        "1": {"firstname": "Mike", "lastname": "Smith"},
        "2": {"firstname": "Alvin", "lastname": "Garcia"},
        "3": {"firstname": "Cordelia", "lastname": "Schouten"},
        "4": {"firstname": "Lucille", "lastname": "Booth"},
        "5": {"firstname": "Lucy", "lastname": "Johnson"}
    }
}
```