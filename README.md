# json-data-extender
Extend JSON sample data based on some very simple rules.

## Basic usage

Check the sample file `data.js` to get an idea how to structure sample data. The `data-extended.js` is an extended sample.

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