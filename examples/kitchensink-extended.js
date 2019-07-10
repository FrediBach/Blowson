module.exports = {
  "keyDetections": {
    "fields": {
      "id": {
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
      "age": {
        "values": [38, 22],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 22,
            "max": 38,
            "dir": "desc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 22,
          "max": 38,
          "dir": "desc"
        }
      },
      "firstname": {"values": ["Mike", "Sandy"], "types": []},
      "lastname": {"values": ["Smith", "Mueller"], "types": []},
      "company": {"values": ["Google", "Yahoo"], "types": []},
      "country": {"values": ["CH", "US"], "types": []},
      "email": {
        "values": ["mike.smith@example.com", "sandy.mueller@example.com"],
        "types": []
      },
      "color": {"values": ["#45ffdc", "#25ffcc"], "types": []},
      "ip": {"values": ["11.47.204.208", "11.47.204.231"], "types": []},
      "profession": {"values": ["Analyst", "Programmer"], "types": []},
      "url": {
        "values": ["https://www.example.org/​", "https://www.domain.com/​"],
        "types": []
      },
      "city": {"values": ["Flatleybury", "London"], "types": []},
      "street": {"values": ["082 Sanford Park", "034 Pisa Road"], "types": []},
      "zip": {
        "values": [55130, 25478],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 25478,
            "max": 55130,
            "dir": "desc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 25478,
          "max": 55130,
          "dir": "desc"
        }
      },
      "weekday": {"values": ["Saturday", "Friday"], "types": []},
      "year": {
        "values": [2007, 1975],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1975,
            "max": 2007,
            "dir": "desc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1975,
          "max": 2007,
          "dir": "desc"
        }
      },
      "password": {
        "values": ["ofbgqSIvbaWGvAa", "jhg6DGD78zffsda"],
        "types": []
      },
      "guid": {
        "values": [
          "63230c6c-8621-4eb0-aad0-2a7af12fb843",
          "63230c6c-8621-4eb0-aad0-2a7af12fb844"
        ],
        "types": []
      },
      "product": {"values": ["Hat", "Shoe"], "types": []},
      "material": {"values": ["Rubber", "Plastic"], "types": []},
      "iban": {
        "values": ["EE917001009726211084", "EE917001009726211085"],
        "types": []
      },
      "bic": {"values": ["IKYUMUS1490", "IKYUMUS1491"], "types": []},
      "avatar": {
        "values": [
          "https://s3.amazonaws.com/uifaces/faces/twitter/edkf/128.jpg​",
          "https://s3.amazonaws.com/uifaces/faces/twitter/fsda/128.jpg​"
        ],
        "types": []
      },
      "username": {"values": ["Heidi4", "Tom132"], "types": []},
      "homepage": {
        "values": ["http://alvena.name​", "http://treeed.name​"],
        "types": []
      },
      "job": {"values": ["Accountant", "Bookworm"], "types": []},
      "mimetype": {
        "values": ["application/x-silverlight-app", "txt/plain"],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 24}],
    "ids": [1, 25]
  },
  "contentDetections": {
    "fields": {
      "id": {
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
      "word": {"values": ["House", "Building"], "types": []},
      "sentence": {"values": ["He made coffee.", "He made tee."], "types": []},
      "headline": {"values": ["He made coffee", "He made tee"], "types": []},
      "paragraph": {
        "values": [
          "He loved dogs. And he loved cats, as well!",
          "He loved cats. And he loved dogs, as well!"
        ],
        "types": []
      },
      "article": {
        "values": [
          "He drove cars. He crashed bikes!\n\nHe had dreams. One or two each night.",
          "He drove buses. He crashed cars!\n\nHe had toys. One or two of each."
        ],
        "types": []
      },
      "string": {
        "values": ["hfgajlkdfghhdfjshgljk", "gdfsgfdgdgfdgsdf"],
        "types": []
      },
      "char": {"values": ["A", "Z"], "types": []},
      "integer": {
        "values": [12, 4536],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 12,
            "max": 4536,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 12,
          "max": 4536,
          "dir": "asc"
        }
      },
      "float": {
        "values": [4.34, 67.233],
        "types": [
          {
            "type": "float",
            "confidence": 1,
            "min": 4.34,
            "max": 67.233,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "float",
          "confidence": 1,
          "min": 4.34,
          "max": 67.233,
          "dir": "asc"
        }
      },
      "boolean": {"values": [true, false], "types": []},
      "date": {"values": ["1976-05-23", "2001-11-11"], "types": []},
      "datetime": {
        "values": ["1976-05-23T15:48:45+01:00", "2014-12-23T07:48:45+01:00"],
        "types": []
      },
      "time": {"values": ["14:36", "08:11"], "types": []},
      "array": {"values": [[1, 5, 7, 8], [2, 3, 6, 8, 25]], "types": []},
      "pattern": {"values": ["34:TGDE:12-z", "53:HGFZ:89-p"], "types": []},
      "phone": {
        "values": ["++41 (76) 654 58 21", "++49 (21) 547 34 23"],
        "types": []
      },
      "regex1": {
        "values": [
          "{{/(sun|mon|tue|wednes|thurs|fri|satur)day/}}",
          "{{/(sun|mon|tue|wednes|thurs|fri|satur)day/}}"
        ],
        "types": []
      },
      "regex2": {
        "values": [
          "{{/Lo{2,10❵l/||/Fe{2,10❵t/}}",
          "{{/Lo{2,10❵l/||/Fe{2,10❵t/}}"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 24}],
    "ids": [1, 25]
  },
  "numberDetections": {
    "fields": {
      "id": {
        "values": [1, 2, 25],
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
      "growingFloat": {
        "values": [1.2, 1.3, 25],
        "types": [
          {
            "type": "integer",
            "confidence": 0.5,
            "min": 25,
            "max": 25,
            "dir": false
          },
          {
            "type": "float",
            "confidence": 2,
            "min": 1.2,
            "max": 1.3,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 0.5,
          "min": 25,
          "max": 25,
          "dir": false
        }
      },
      "intFiveOrTen": {
        "values": [5, 10, 5],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 5,
            "max": 10,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 5,
          "max": 10,
          "dir": false
        }
      },
      "shrinkingInt": {
        "values": [1087, 8, 7],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 7,
            "max": 1087,
            "dir": "desc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 7,
          "max": 1087,
          "dir": "desc"
        }
      },
      "unorderedFloat": {
        "values": [12.235, 12, 18.2],
        "types": [
          {
            "type": "integer",
            "confidence": 0.5,
            "min": 12,
            "max": 12,
            "dir": false
          },
          {
            "type": "float",
            "confidence": 2,
            "min": 12.235,
            "max": 18.2,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 0.5,
          "min": 12,
          "max": 12,
          "dir": false
        }
      }
    },
    "gaps": [{"start": 3, "end": 24}],
    "ids": [1, 2, 25]
  },
  "interFieldRules": {
    "fields": {
      "id": {
        "values": [1, 2, 25],
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
      "from": {
        "values": [1, 56, 45],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 56,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 56,
          "dir": false
        }
      },
      "to": {
        "values": [100, 67, 201],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 67,
            "max": 201,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 67,
          "max": 201,
          "dir": false
        }
      },
      "big": {
        "values": [10000, 35425, 54665],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 10000,
            "max": 54665,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 10000,
          "max": 54665,
          "dir": "asc"
        }
      },
      "small": {
        "values": [20, 2, 7],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 2,
            "max": 20,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 2,
          "max": 20,
          "dir": false
        }
      },
      "bigRandom": {
        "values": [95845564, 45456478, 74564454],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 45456478,
            "max": 95845564,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 45456478,
          "max": 95845564,
          "dir": false
        }
      }
    },
    "gaps": [{"start": 3, "end": 24}],
    "ids": [1, 2, 25]
  },
  "occurrencyFrequencies": {
    "fields": {
      "id": {
        "values": [1, 2, 3, 25],
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
      "sex": {"values": ["m", "f", "m", "f"], "types": []},
      "activated": {"values": [true, false, true, true], "types": []}
    },
    "gaps": [{"start": 4, "end": 24}],
    "ids": [1, 2, 3, 25]
  },
  "optionals": {
    "fields": {
      "id": {
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
      "required": {"values": ["Cat", "Elephant"], "types": []},
      "optional": {"values": ["Dog"], "types": []},
      "config": {
        "values": [
          {"required": "Cat", "optional": "Dog"},
          {"required": "Elephant"}
        ],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 24}],
    "ids": [1, 25]
  },
  "steps": {
    "fields": {
      "id": {
        "values": [1, 2, 25],
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
      "step100": {
        "values": [100, 1000, 200],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 100,
            "max": 1000,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 100,
          "max": 1000,
          "dir": false
        }
      },
      "step250": {
        "values": [1000, 0, 750],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 0,
            "max": 1000,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 0,
          "max": 1000,
          "dir": false
        }
      },
      "step1": {
        "values": [1, 100, 99],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 100,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 100,
          "dir": false
        }
      }
    },
    "gaps": [{"start": 3, "end": 24}],
    "ids": [1, 2, 25]
  },
  "floatingPointPrecision": {
    "fields": {
      "id": {
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
      "precision1": {
        "values": [3.2, 45.3],
        "types": [
          {
            "type": "float",
            "confidence": 1,
            "min": 3.2,
            "max": 45.3,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "float",
          "confidence": 1,
          "min": 3.2,
          "max": 45.3,
          "dir": "asc"
        }
      },
      "precision2": {
        "values": [3.34, 34.12],
        "types": [
          {
            "type": "float",
            "confidence": 1,
            "min": 3.34,
            "max": 34.12,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "float",
          "confidence": 1,
          "min": 3.34,
          "max": 34.12,
          "dir": "asc"
        }
      },
      "precision4": {
        "values": [5.3821, 42.3784],
        "types": [
          {
            "type": "float",
            "confidence": 1,
            "min": 5.3821,
            "max": 42.3784,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "float",
          "confidence": 1,
          "min": 5.3821,
          "max": 42.3784,
          "dir": "asc"
        }
      }
    },
    "gaps": [{"start": 2, "end": 24}],
    "ids": [1, 25]
  },
  "dates": {
    "fields": {
      "id": {
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
      "fromDate": {"values": ["1901-01-01", "2000-01-02"], "types": []},
      "toDate": {"values": ["2099-12-31", "2001-12-30"], "types": []},
      "fromTimestamp": {
        "values": ["1901-01-01T00:00:00+01:00", "2000-01-02T00:00:00+01:00"],
        "types": []
      },
      "toTimestamp": {
        "values": ["2099-12-31T23:59:59+01:00", "2001-12-30T23:59:59+01:00"],
        "types": []
      },
      "fromTime": {"values": ["00:00", "11:59"], "types": []},
      "toTime": {"values": ["23:59", "12:00"], "types": []}
    },
    "gaps": [{"start": 2, "end": 24}],
    "ids": [1, 25]
  },
  "customFieldNames": {
    "fields": {
      "id": {
        "values": [1, 5],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 5, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 5,
          "dir": "asc"
        }
      },
      "firstname": {"values": ["Mike", "Lucy"], "types": []},
      "surname__lastname": {"values": ["Smith", "Johnson"], "types": []}
    },
    "gaps": [{"start": 2, "end": 4}],
    "ids": [1, 5]
  },
  "temporaryFileds": {
    "fields": {
      "id": {
        "values": [1, 5],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 5, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 5,
          "dir": "asc"
        }
      },
      "name": {
        "values": [
          "{{field.firstname}} {{field.lastname}}",
          "{{field.firstname}} {{field.lastname}}"
        ],
        "types": []
      },
      "__firstname": {"values": ["Tim", "Mike"], "types": []},
      "__lastname": {"values": ["Jones", "Williams"], "types": []}
    },
    "gaps": [{"start": 2, "end": 4}],
    "ids": [1, 5]
  },
  "arrayToObject": {
    "fields": {
      "___id": {
        "values": [1, 5],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 5, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 5,
          "dir": "asc"
        }
      },
      "firstname": {"values": ["Mike", "Lucy"], "types": []},
      "lastname": {"values": ["Smith", "Johnson"], "types": []}
    },
    "gaps": [false],
    "ids": []
  },
  "relationshipSources": {
    "fields": {
      "id": {
        "values": [1, 2, 5],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 5, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 5,
          "dir": "asc"
        }
      },
      "firstname": {"values": ["Mike", "Alex", "Lucy"], "types": []},
      "age": {
        "values": [12, 77, 23],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 12,
            "max": 77,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 12,
          "max": 77,
          "dir": false
        }
      }
    },
    "gaps": [{"start": 3, "end": 4}],
    "ids": [1, 2, 5]
  },
  "relationShipTargets": {
    "fields": {
      "id": {
        "values": [1, 2, 25],
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
      "relationshipSource_id": {
        "values": [1, 2, 5],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 5, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 5,
          "dir": "asc"
        }
      },
      "text": {
        "values": [
          "Hi {{field.relationshipSource.firstname}} (age {{field.relationshipSource.age}}), well done. Congrats!",
          "Hi {{field.relationshipSource.firstname}} (age {{field.relationshipSource.age}}), well done. Congrats!",
          "Hello {{field.relationshipSource.firstname}} (age: {{field.relationshipSource.age}}), don't stop what you're doing!"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 3, "end": 24}],
    "ids": [1, 2, 25]
  },
  "posts": {
    "fields": {
      "id": {
        "values": [1, 2, 5],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 5, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 5,
          "dir": "asc"
        }
      },
      "text": {"values": ["Bla ...", "Bla ...", "Bla ..."], "types": []},
      "commentCount": {
        "values": [
          "{{connected.comments|count}}",
          "{{connected.comments|count}}",
          "{{connected.comments|count}}"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 3, "end": 4}],
    "ids": [1, 2, 5]
  },
  "comments": {
    "fields": {
      "id": {
        "values": [1, 2, 20],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 20,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 20,
          "dir": "asc"
        }
      },
      "post_id": {
        "values": [1, 2, 50],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 50,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 50,
          "dir": "asc"
        }
      },
      "text": {
        "values": ["Some text ...", "Some text ...", "Some text ..."],
        "types": []
      }
    },
    "gaps": [{"start": 3, "end": 19}],
    "ids": [1, 2, 20]
  },
  "filters": {
    "fields": {
      "id": {
        "values": [1, 5],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 5, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 5,
          "dir": "asc"
        }
      },
      "slug": {
        "values": ["{{field.var1|slug}}", "{{field.var1|slug}}"],
        "types": []
      },
      "lower": {
        "values": ["{{field.var1|lower}}", "{{field.var1|lower}}"],
        "types": []
      },
      "upper": {
        "values": ["{{field.var1|upper}}", "{{field.var1|upper}}"],
        "types": []
      },
      "capitalize": {
        "values": ["{{field.var2|capitalize}}", "{{field.var2|capitalize}}"],
        "types": []
      },
      "plural": {
        "values": ["{{field.var3|plural}}", "{{field.var3|plural}}"],
        "types": []
      },
      "singular": {
        "values": ["{{field.var4|singular}}", "{{field.var4|singular}}"],
        "types": []
      },
      "md5": {
        "values": ["{{field.var5|md5}}", "{{field.var5|md5}}"],
        "types": []
      },
      "md": {"values": ["{{field.var6|md}}", "{{field.var6|md}}"], "types": []},
      "round": {
        "values": ["{{field.var7|round}}", "{{field.var7|round}}"],
        "types": []
      },
      "floor": {
        "values": ["{{field.var7|floor}}", "{{field.var7|floor}}"],
        "types": []
      },
      "ceil": {
        "values": ["{{field.var7|ceil}}", "{{field.var7|ceil}}"],
        "types": []
      },
      "plus1": {
        "values": ["{{field.var8|plus:1}}", "{{field.var8|plus:1}}"],
        "types": []
      },
      "plus10": {
        "values": ["{{field.var8|plus:10}}", "{{field.var8|plus:10}}"],
        "types": []
      },
      "minus1": {
        "values": ["{{field.var8|minus:1}}", "{{field.var8|minus:1}}"],
        "types": []
      },
      "minus10": {
        "values": ["{{field.var8|minus:10}}", "{{field.var8|minus:10}}"],
        "types": []
      },
      "times2": {
        "values": ["{{field.var8|times:2}}", "{{field.var8|times:2}}"],
        "types": []
      },
      "times4": {
        "values": ["{{field.var8|times:4}}", "{{field.var8|times:4}}"],
        "types": []
      },
      "max2": {
        "values": ["{{field.var8|max:2}}", "{{field.var8|max:2}}"],
        "types": []
      },
      "min5": {
        "values": ["{{field.var8|min:5}}", "{{field.var8|min:5}}"],
        "types": []
      },
      "dateYYYY": {
        "values": ["{{field.var9|date:YYYY}}", "{{field.var9|date:YYYY}}"],
        "types": []
      },
      "num0o": {
        "values": ["{{field.var8|num:0o}}", "{{field.var8|num:0o}}"],
        "types": []
      },
      "optional": {
        "values": ["{{field.var1|optional}}", "{{field.var1|optional}}"],
        "types": []
      },
      "count": {
        "values": ["{{field.var10|count}}", "{{field.var10|count}}"],
        "types": []
      },
      "max": {
        "values": ["{{field.var10|max}}", "{{field.var10|max}}"],
        "types": []
      },
      "min": {
        "values": ["{{field.var10|min}}", "{{field.var10|min}}"],
        "types": []
      },
      "sum": {
        "values": ["{{field.var10|sum}}", "{{field.var10|sum}}"],
        "types": []
      },
      "avg": {
        "values": ["{{field.var10|avg}}", "{{field.var10|avg}}"],
        "types": []
      },
      "rand": {
        "values": ["{{field.var10|rand}}", "{{field.var10|rand}}"],
        "types": []
      },
      "multiNumber": {
        "values": [
          "{{field.var8|plus:3|times:2|minus:5}}",
          "{{field.var8|plus:3|times:2|minus:5}}"
        ],
        "types": []
      },
      "multiString": {
        "values": ["{{field.var1|slug|upper}}", "{{field.var1|slug|upper}}"],
        "types": []
      },
      "randomPart": {
        "values": [
          "{{field.var3||field.var4|upper||field.var10|avg}}",
          "{{field.var3||field.var4|upper||field.var10|avg}}"
        ],
        "types": []
      },
      "var1": {"values": ["Test String", "Another Test String"], "types": []},
      "var2": {"values": ["test string", "another test string"], "types": []},
      "var3": {"values": ["Dog", "Status"], "types": []},
      "var4": {"values": ["Cats", "Tee"], "types": []},
      "var5": {"values": ["MyPassword123", "LetMeIn123"], "types": []},
      "var6": {"values": ["# Markdown", "> Markdown Test"], "types": []},
      "var7": {
        "values": [3.14, 9.99],
        "types": [
          {
            "type": "float",
            "confidence": 1,
            "min": 3.14,
            "max": 9.99,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "float",
          "confidence": 1,
          "min": 3.14,
          "max": 9.99,
          "dir": "asc"
        }
      },
      "var8": {
        "values": [3, 9],
        "types": [
          {"type": "integer", "confidence": 1, "min": 3, "max": 9, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 3,
          "max": 9,
          "dir": "asc"
        }
      },
      "var9": {"values": ["2018-03-24", "1912-11-02"], "types": []},
      "var10": {"values": [[1, 2, 5, 7], [1, 20, 8, 60]], "types": []}
    },
    "gaps": [{"start": 2, "end": 4}],
    "ids": [1, 5]
  },
  "defaults": {
    "fields": {
      "id": {
        "values": [1, 2, 10],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 10,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 10,
          "dir": "asc"
        }
      },
      "width": {
        "values": [250, 500],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 250,
            "max": 500,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 250,
          "max": 500,
          "dir": "asc"
        }
      },
      "height": {
        "values": [100, 250],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 100,
            "max": 250,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 100,
          "max": 250,
          "dir": "asc"
        }
      },
      "url": {
        "values": [
          "https://imgplaceholder.com/{{field.width?250}}x{{field.height?100}}",
          "https://imgplaceholder.com/{{field.width?500}}x{{field.height?250}}",
          "https://imgplaceholder.com/{{field.width?400}}x{{field.height?200}}"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 3, "end": 9}],
    "ids": [1, 2, 10]
  },
  "sentences": {
    "fields": {
      "id": {
        "values": [1, 10],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 10,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 10,
          "dir": "asc"
        }
      },
      "text": {
        "values": [
          "A {{word.noun}}, {{word.a_noun}}, {{word.nouns}}, {{word.adjective}}, {{word.an_adjective}} and {{number}}",
          "A {{word.noun}}, {{word.a_noun}}, {{word.nouns}}, {{word.adjective}}, {{word.an_adjective}} and {{number}}"
        ],
        "types": []
      },
      "sentence": {"values": ["{{sentence}}", "{{sentence}}"], "types": []},
      "paragraph": {"values": ["{{paragraph}}", "{{paragraph}}"], "types": []}
    },
    "gaps": [{"start": 2, "end": 9}],
    "ids": [1, 10]
  },
  "faker": {
    "fields": {
      "id": {
        "values": [1, 10],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 10,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 10,
          "dir": "asc"
        }
      },
      "text": {
        "values": [
          "{{fake.lorem.sentence}} - {{fake.system.fileName}} - {{fake.finance.transactionType}} - {{fake.dollar}} - {{fake.month}}",
          "{{fake.lorem.sentence}} - {{fake.system.fileName}} - {{fake.finance.transactionType}} - {{fake.dollar}} - {{fake.month}}"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 9}],
    "ids": [1, 10]
  },
  "array_types": {
    "fields": {
      "id": {
        "values": [1, 10],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 10,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 10,
          "dir": "asc"
        }
      },
      "ints": {"values": [[1, 23, 99], [2, 11, 88]], "types": []},
      "floats": {"values": [[1.4, 22, 4.91], [3.4, 17, 8.88]], "types": []},
      "strings": {
        "values": [
          ["string 1", "string 2", "string 3"],
          ["string 4", "string 5", "string 6"]
        ],
        "types": []
      },
      "booleans": {
        "values": [[true, false, true], [false, true, true]],
        "types": []
      },
      "dates": {
        "values": [["2018-02-11", "2017-08-03"], ["2014-02-11", "2013-08-03"]],
        "types": []
      },
      "times": {
        "values": [["10:11", "09:56"], ["22:45", "11:01"]],
        "types": []
      },
      "chars": {"values": [["A", "D"], ["B", "Z"]], "types": []},
      "content": {
        "values": [
          [
            {"text_block_id": 1},
            {"image_block_id": 1},
            {"text_block_id": 2},
            {"text_block_id": 8},
            {"text_block_id": 4}
          ],
          [{"image_block_id": 10}, {"text_block_id": 25}]
        ],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 9}],
    "ids": [1, 10]
  },
  "markdown": {
    "fields": {
      "id": {
        "values": [1, 10],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 10,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 10,
          "dir": "asc"
        }
      },
      "original": {
        "values": [
          "\n{{sentence}}\n============\n\n{{paragraph}}\n\n![Blowson Logo](https://unpkg.com/blowson@0.9.0/src/blowson-logo-icon.svg \"Blowson\")\n\n> {{sentence}}\n\n- {{sentence}}\n- {{sentence}}\n- {{sentence}}\n- {{sentence}}\n\n{{paragraph}}\n",
          "\n{{sentence}}\n============\n\n{{paragraph}}\n\n> {{sentence}}\n\n{{sentence}}\n------------\n\n{{paragraph}}\n\n{{sentence}}\n------------\n\n{{paragraph}}\n{{paragraph}}\n\n[Blowson](https://www.blowson.com)\n"
        ],
        "types": []
      },
      "rendered": {
        "values": ["{{field.original|md}}", "{{field.original|md}}"],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 9}],
    "ids": [1, 10]
  }
};