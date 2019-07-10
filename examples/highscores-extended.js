module.exports = {
  "users": {
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
      "username": {
        "values": [
          "{{word.noun|capitalize}}{{number|optional}}",
          "{{word.noun|capitalize}}{{number|optional}}"
        ],
        "types": []
      },
      "email": {
        "values": [
          "{{field.username|slug}}@gmail.com",
          "{{field.username|slug}}@gmail.com"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 24}],
    "ids": [1, 25]
  },
  "games": {
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
      "title": {
        "values": [
          "{{word.noun|capitalize}} {{word.noun|capitalize|optional}} {{number|optional}}",
          "{{word.noun|capitalize}} {{word.noun|capitalize|optional}} {{number|optional}}"
        ],
        "types": []
      },
      "slug": {
        "values": ["{{field.title|slug}}", "{{field.title|slug}}"],
        "types": []
      },
      "description": {
        "values": ["{{paragraph}}", "{{paragraph}}"],
        "types": []
      },
      "highscore": {
        "values": [
          "{{connected.scores.score|max}}",
          "{{connected.scores.score|max}}"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 9}],
    "ids": [1, 10]
  },
  "scores": {
    "fields": {
      "id": {
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
      },
      "user_id": {
        "values": [1, 25, 24],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 25,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 25,
          "dir": false
        }
      },
      "game_id": {
        "values": [1, 10, 9],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 10,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 10,
          "dir": false
        }
      },
      "score": {
        "values": [500, 5500, 250],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 250,
            "max": 5500,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 250,
          "max": 5500,
          "dir": false
        }
      },
      "difficulty": {"values": ["easy", "hard", "hard"], "types": []},
      "level": {
        "values": [1, 10, 9],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 10,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 10,
          "dir": false
        }
      },
      "date": {
        "values": [
          "2018-01-05T08:23:05+01:00",
          "2017-01-05T08:23:05+01:00",
          "2019-01-05T08:23:05+01:00"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 98}],
    "ids": [1, 100, 99]
  }
};