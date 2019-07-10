module.exports = {
  "users": {
    "fields": {
      "id": {
        "values": [1, 100],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 100,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 100,
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
      },
      "friends": {
        "values": [
          [{"user_id": 2}, {"user_id": 100}],
          [
            {"user_id": 56},
            {"user_id": 62},
            {"user_id": 64},
            {"user_id": 77},
            {"user_id": 78},
            {"user_id": 91},
            {"user_id": 93}
          ]
        ],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 99}],
    "ids": [1, 100]
  }
};