# Template Variables

Often you don't just want random text in a field. For example in a blog type, the text field should be a mix of different templates that include different sizes and types of posts. Template variables let you construct these text templates creatively and even context based by using field variables.

## Field Variables

You can include other fields from the same entry into a string with template variables. Here's an example:

```json
{
    "users": [
        { "id": 1, "firstname": "Mike", "slogan": "Hi, I'm {{field.firstname}}. How can I help you?" },
        { "id": 5, "firstname": "Lucy", "slogan": "Visit my homepage: www.{{field.firstname|lower}}.com" }
    ]
}
```

As soon as Blowson detects template variables in a string, it will repeat those template string in all entries. You will not have random text anymore.

The result will be something like this:

```json
{
    "users": [
        { "id": 1, "firstname": "Mike", "slogan": "Hi, I'm Mike. How can I help you?" },
        { "id": 2, "firstname": "Tom", "slogan": "Hi, I'm Tom. How can I help you?" },
        { "id": 3, "firstname": "Jeff", "slogan": "Visit my homepage: www.jeff.com" },
        { "id": 4, "firstname": "Kim", "slogan": "Hi, I'm Kim. How can I help you?" },
        { "id": 5, "firstname": "Lucy", "slogan": "Visit my homepage: www.lucy.com" }
    ]
}
```

## Relationship Fields

What makes field variables really powerful is that fields can be referenced from a relationship. So for example if you have a type user and a type message (anonymous message to the user), than you can use a field from the user in the message to create messages that fit the context. Something like:

```json
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

## Connected Entries

Another way to use relationships to your advantage, is to use the `connected` variable type. So for example if you have a comments type and a posts type and comments point to posts, you can get the count of comments on each post like this:

```json
{
    "posts": [
        { "id": 1, "text": "Bla ...", "commentCount": "{{connected.comments|count}}" },
        { "id": 2, "text": "Bla ...", "commentCount": "{{connected.comments|count}}" },
        { "id": 50, "text": "Bla ...", "commentCount": "{{connected.comments|count}}" }
    ],
    "comments": [
        { "id": 1, "post_id": 1, "text": "Some text ..." },
        { "id": 2, "post_id": 2, "text": "Some text ..." },
        { "id": 200, "post_id": 50, "text": "Some text ..." }
    ]
}
```

By using `connected`, you always get an array back. If you don't use a filter, the array entries will be joined like this: `val1, val2 and val3`. You can use all the array filters to collapse the array to a single value, for example: `{{connected.flights.score|max}}`

## Filters

The available filters are:

| Filter        | Value Type     | Original       | Filtered      |
|---------------|----------------|----------------|---------------|
| slug          | String         | Test String    | test-string   |
| lower         | String         | Test String    | test string   |
| upper         | String         | Test String    | TEST STRING   |
| capitalize    | String         | test string    | Test String   |
| plural        | String         | Dog            | Dogs          |
| singular      | String         | Cats           | Cat           |
| md5           | String         | MyPassword123  | 973D98AC221D7E433FD7C417AA41027A   |
| slug          | String         |  Test  String  | Test String   |
| md            | String         | # Markdown     | `<h1>Markdown</h1>`   |
| round         | Number         | 3.14           | 3             |
| floor         | Number         | 3.14           | 3             |
| ceil          | Number         | 3.14           | 4             |
| plus:1        | Number         | 3              | 4             |
| plus:10       | Number         | 3              | 13            |
| minus:1       | Number         | 20             | 19            |
| minus:10      | Number         | 20             | 10            |
| times:2       | Number         | 3              | 6             |
| times:4       | Number         | 3              | 12            |
| max:10        | Number         | 11             | 10            |
| min:10        | Number         | 3              | 10            |
| date:YYYY     | Date           | 2018-03-24     | 2018          |
| num:0o        | Number         | 2              | 2nd           |
| optional      | Any            | Test           |               |
| count         | Array          | [1, 2, 5, 7]   | 4             |
| max           | Array          | [1, 2, 5, 7]   | 7             |
| min           | Array          | [1, 2, 5, 7]   | 1             |
| sum           | Array          | [1, 2, 5, 7]   | 15            |
| avg           | Array          | [1, 2, 5, 7]   | 3.75          |
| rand          | Array          | [1, 2, 5, 7]   | 5             |

The date filter uses the `date-fns` library to format your dates. For example if you want to only show the year of a date field `created`, do it like this: `{{field.created|date:YYYY}}`

Similar to the date filter, the number filter uses the `Numeral.js` library. An example: {{field.id|num:0o}} would result in something like `1st` (with id = 1).

You can combine multiple filters, so for example you can do something like `{{word.noun|capitalize}} {{word.noun|capitalize|optional}} {{number|optional}}` to generate a product names that is either one word, one word with a number, two words or two words with a number, all words capitalized.

## Defaults

Additionally you can use the `?` option to define a default value, in case the field you're referencing is optional. This could look like this:

```json
{
    "files": [
        { "id": 1, "width": 250, "height": 100, "url": "https://imgplaceholder.com/{{field.width?250}}x{{field.height?100}}" },
        { "id": 2, "width": 500, "height": 250, "url": "https://imgplaceholder.com/{{field.width?500}}x{{field.height?250}}" },
        { "id": 5, "url": "https://imgplaceholder.com/{{field.width?400}}x{{field.height?200}}" }
    ]
}
```

## Faker.js API Methods

Additionally to al of the above features, you have access to all Faker.js API methods with the `fake` key. Just a few examples: `{{fake.lorem.sentence}}`, `{{fake.system.fileName}}`, `{{fake.finance.transactionType}}`

## Sentence Construction

And finally, to enable you to create semi random sentences, you can use `{{word.noun}}`, `{{word.a_noun}}`, `{{word.nouns}}`, `{{word.adjective}}`, `{{word.an_adjective}}` and `{{number}}` to creatively construct them. (You can insert whole sentences and paragraphs if you want: {{sentence}} {{paragraph}})