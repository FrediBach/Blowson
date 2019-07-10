module.exports = {
  "events": {
    "fields": {
      "id": {
        "values": [1, 24, 25],
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
      "title": {
        "values": ["Poker night", "Gym", "Night hike and sleep"],
        "types": []
      },
      "desc": {
        "values": ["{{paragraph}}", "{{paragraph}}", "{{paragraph}}"],
        "types": []
      },
      "date": {
        "values": ["2019-09-12", "2019-12-29", "2019-03-01"],
        "types": []
      },
      "from": {"values": ["11:00", "08:00", "23:00"], "types": []},
      "to": {"values": ["12:00", "10:00", "23:45"], "types": []},
      "location_id": {
        "values": [1, 25, 12],
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
      "user_id": {
        "values": [1, 25, 12],
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
      }
    },
    "gaps": [{"start": 2, "end": 23}],
    "ids": [1, 24, 25]
  },
  "locations": {
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
      "name": {
        "values": ["{{fake.address.city}}", "{{fake.address.city}}"],
        "types": []
      },
      "desc": {"values": ["{{paragraph}}", "{{paragraph}}"], "types": []},
      "lat": {
        "values": ["{{fake.address.latitude}}", "{{fake.address.latitude}}"],
        "types": []
      },
      "lng": {
        "values": ["{{fake.address.longitude}}", "{{fake.address.longitude}}"],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 24}],
    "ids": [1, 25]
  },
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
  "participants": {
    "fields": {
      "id": {
        "values": [1, 49, 50],
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
      "user_id": {
        "values": [1, 25, 12],
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
      "event_id": {
        "values": [1, 25, 12],
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
      }
    },
    "gaps": [{"start": 2, "end": 48}],
    "ids": [1, 49, 50]
  }
};