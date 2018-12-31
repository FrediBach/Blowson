module.exports = {
    "quotes": [
        {
            "__id": 1,
            "__firstname": "Isaac",
            "__lastname": "Newton",
            "__date1": "1901-01-01",
            "__date2": "2018-12-25",
            "__honorific": "{{/Dr (PhD|MD)?|Professor/}}",
            "__preposition": "{{/van der|von|le|du|del/}}",
            "title": "{{field.firstname}} {{fake.name.firstName|optional}} {{field.lastname}}",
            "imageURL": "https://placebeard.it/g/232x150/notag?r={{field.id}}",
            "birthday": "{{field.date1|date:MMMM D, YYYY}}",
            "deathday": "{{field.date2|date:MMMM D, YYYY}}",
            "text": "{{sentence}} {{sentence}}",
            "linkText": "www.{{field.firstname|slug}}-{{field.lastname|slug}}.bio.com",
            "linkURL": "http://www.{{field.firstname|slug}}-{{field.lastname|slug}}.bio.com/"
        },
        {
            "__id": 25,
            "__firstname": "Subrahmanyan",
            "__lastname": "Csikszentmihalyi",
            "__date1": "1934-09-29",
            "__date2": "2018-12-25",
            "__honorific": "{{/Dr (PhD|MD)?|Professor/}}",
            "__preposition": "{{/van der|von|le|du|del/}}",
            "title": "{{field.honorific|optional}} {{field.firstname}} {{fake.name.firstName|optional}} {{field.preposition|optional}} {{field.lastname}}",
            "imageURL": "https://placebeard.it/g/232x150/notag?r={{field.id}}",
            "birthday": "{{field.date1|date:MMMM D, YYYY}}",
            "text": "{{sentence}}",
            "linkText": "www.{{field.firstname|slug}}-{{field.lastname|slug}}.bio.com",
            "linkURL": "http://www.{{field.firstname|slug}}-{{field.lastname|slug}}.bio.com/"
        }
    ]
};