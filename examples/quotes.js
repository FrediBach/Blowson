module.exports = {
    "quotes": [
        {
            "__id": 1,
            "__firstname": "Isaac",
            "__lastname": "Newton",
            "__date1": "1901-01-01",
            "__date2": "2018-12-25",
            "title": "{{field.firstname}} {{field.lastname}}",
            "imageURL": "https://placebeard.it/g/232x150/notag?r={{field.id}}",
            "birthday": "{{field.date1|date:MMMM D, YYYY}}",
            "deathday": "{{field.date2|date:MMMM D, YYYY}}",
            "text": "{{sentence}} {{sentence}}",
            "linkText": "www.{{field.firstname|slug}}-{{field.lastname|slug}}.bio.com",
            "linkURL": "http://www.{{field.firstname|slug}}-{{field.lastname|slug}}.bio.com/"
        },
        {
            "__id": 25,
            "__firstname": "Albert",
            "__lastname": "Einstein",
            "__date1": "1934-09-29",
            "__date2": "1985-03-09",
            "title": "{{field.firstname}} {{field.lastname}}",
            "imageURL": "https://placebeard.it/g/232x150/notag?r={{field.id}}",
            "birthday": "{{field.date1|date:MMMM D, YYYY}}",
            "text": "{{sentence}}",
            "linkText": "www.{{field.firstname|slug}}-{{field.lastname|slug}}.bio.com",
            "linkURL": "http://www.{{field.firstname|slug}}-{{field.lastname|slug}}.bio.com/"
        }
    ]
};