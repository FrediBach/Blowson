module.exports = {
  "quotes": {
    "fields": {
      "__id": {
        "values": [1, 25],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 25,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 25,
          "dir": "asc"
        }
      },
      "__firstname": {"values": ["Isaac", "Subrahmanyan"], "types": []},
      "__lastname": {"values": ["Newton", "Csikszentmihalyi"], "types": []},
      "__date1": {"values": ["1901-01-01", "1934-09-29"], "types": []},
      "__date2": {"values": ["2001-12-31", "2018-12-25"], "types": []},
      "__honorific": {
        "values": [
          "{{/Dr (PhD|MD)?|Professor/}}",
          "{{/Dr (PhD|MD)?|Professor/}}"
        ],
        "types": []
      },
      "__preposition": {
        "values": [
          "{{/van der|von|le|du|del/}}",
          "{{/van der|von|le|du|del/}}"
        ],
        "types": []
      },
      "title": {
        "values": [
          "{{field.firstname}} {{fake.name.firstName|optional}} {{field.lastname}}",
          "{{field.honorific|optional}} {{field.firstname}} {{fake.name.firstName|optional}} {{field.preposition|optional}} {{field.lastname}}"
        ],
        "types": []
      },
      "imageURL": {
        "values": [
          "https://placebeard.it/g/232x150/notag?r={{field.id}}",
          "https://placebeard.it/g/232x150/notag?r={{field.id}}"
        ],
        "types": []
      },
      "birthday": {
        "values": [
          "{{field.date1|date:MMMM D, YYYY}}",
          "{{field.date1|date:MMMM D, YYYY}}"
        ],
        "types": []
      },
      "deathday": {
        "values": ["{{field.date2|date:MMMM D, YYYY}}"],
        "types": []
      },
      "text": {
        "values": ["{{sentence}} {{sentence}}", "{{sentence}}"],
        "types": []
      },
      "linkText": {
        "values": [
          "www.{{field.firstname|slug}}-{{field.lastname|slug}}.bio.com",
          "www.{{field.firstname|slug}}-{{field.lastname|slug}}.bio.com"
        ],
        "types": []
      },
      "linkURL": {
        "values": [
          "http://www.{{field.firstname|slug}}-{{field.lastname|slug}}.bio.com/",
          "http://www.{{field.firstname|slug}}-{{field.lastname|slug}}.bio.com/"
        ],
        "types": []
      }
    },
    "gaps": [false],
    "ids": []
  }
};