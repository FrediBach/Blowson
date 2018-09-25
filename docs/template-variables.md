# Template Variables

## Field Variables

You can include other fields from the same entry into a string with template variables. Here's an example:

```
{
    "users": [
        "id": 1, "firstname": "Mike", "slogan": "Hi, I'm {{field.firstname}}. How can I help you?",
        "id": 5, "firstname": "Lucy", "slogan": "Visit my homepage: www.{{field.firstname|lower}}.com"
    ]
}
```

As soon as Blowson detects template variables in a string, it will repeat those template string in all entries. You will not have random text anymore.

The result will be something like this:

```
{
    "users": [
        "id": 1, "firstname": "Mike", "slogan": "Hi, I'm Mike. How can I help you?",
        "id": 2, "firstname": "Tom", "slogan": "Hi, I'm Tom. How can I help you?",
        "id": 3, "firstname": "Jeff", "slogan": "Visit my homepage: www.jeff.com",
        "id": 4, "firstname": "Kim", "slogan": "Hi, I'm Kim. How can I help you?",
        "id": 5, "firstname": "Lucy", "slogan": "Visit my homepage: www.lucy.com"
    ]
}
```

## Relationship Fields

What makes field variables really powerful is that fields can be referenced from a relationship. So for example if you have a type user and a type message (anonymous message to the user), than you can use a field from the user in the message to create messages that fit the context. Something like:

```
{
    "users": [
        { "id": 1, "firstname": "Mike" },
        { "id": 2, "firstname": "Alex" },
        { "id": 5, "firstname": "Lucy" }
    ],
    "messages": [
        { "id": 1, "user_id": 1, "text": "Hi {{field.user.firstname}}, well done. Congrats!" },
        { "id": 2, "user_id": 2, "text": "Hi {{field.user.firstname}}, well done. Congrats!" },
        { "id": 25, "user_id": 5, "text": "Hello {{field.user.firstname}}, don't stop what you're doing!" }
    ]
}
```

## Filters

The available filters are:

- slug
- lower
- upper
- capitalize
- md5
- trim
- md (Markdown to HTML)
- round (for numbers)
- floor (for numbers)
- date:dateFormat
- num:numberFormat
- optional

The date filter uses the `date-fns` library to format your dates. For example if you want to only show the year of a date field `created`, do it like this: `{{field.created|date:YYYY}}`

Similar to the date filter, the number filter uses the `Numeral.js` library. An example: {{field.id|num:0o}} would result in something like `1st` (with id = 1).

You can combine multiple filters, so for example you can do something like `{{word.noun|capitalize}} {{word.noun|capitalize|optional}} {{number|optional}}` to generate a product names that is either one word, one word with a number, two words or two words with a number, all words capitalized.

## Defaults

Additionally you can use the `?` option to define a default value, in case the field you're referencing is optional. This could look like this:

```
{
    "files": [
        { id: 1, width: 250, height: 100, url: 'https://imgplaceholder.com/{{field.width?250}}x{{field.height?100}}' },
        { id: 2, width: 500, height: 250, url: 'https://imgplaceholder.com/{{field.width?500}}x{{field.height?250}}' },
        { id: 5, url: 'https://imgplaceholder.com/{{field.width?400}}x{{field.height?200}}' }
    ]
}
```

## Sentence Construction

And finally, to enable you to create semi random sentences, you can use `{{word.noun}}`, `{{word.a_noun}}`, `{{word.nouns}}`, `{{word.adjective}}`, `{{word.an_adjective}}` and `{{number}}` to creatively construct them. (You can insert whole sentences and paragraphs if you want: {{sentence}} {{paragraph}})