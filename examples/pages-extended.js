module.exports = {
  "pages": {
    "fields": {
      "id": {
        "values": [1, 99, 100],
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
      "ref": {"values": ["35427", "97346", "52096"], "types": []},
      "type": {"values": ["seminar", "seminar", "js"], "types": []},
      "slug": {
        "values": [
          "{{field.title|slug}}",
          "{{field.title|slug}}",
          "{{field.title|slug}}"
        ],
        "types": []
      },
      "lang": {"values": ["de", "de", "en"], "types": []},
      "title": {
        "values": [
          "Sackhüpfer Seminar",
          "G-Force Überlebens Seminar",
          "Jugend und Sport Spring Meetup"
        ],
        "types": []
      },
      "published": {
        "values": ["2018-09-12", "2018-12-24", "2018-12-24"],
        "types": []
      },
      "available_from": {
        "values": ["2020-01-01", "2020-09-12", "2020-08-01"],
        "types": []
      },
      "available_to": {
        "values": ["2020-06-31", "2020-09-24", "2021-02-28"],
        "types": []
      },
      "keywords": {
        "values": [
          ["seminar", "sport", "magglingen"],
          ["seminar", "military", "tenero"],
          ["jugend", "sport", "magglingen"]
        ],
        "types": []
      },
      "max_participants": {
        "values": [12, 20, 80],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 12,
            "max": 80,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 12,
          "max": 80,
          "dir": "asc"
        }
      },
      "image": {
        "values": [
          "https://fakeql.com/placeholder/500/200/{{fake.finance.bitcoinAddress|lower}.svg",
          "https://fakeql.com/placeholder/500/200/{{fake.finance.bitcoinAddress|lower}.svg",
          "https://fakeql.com/placeholder/500/200/{{fake.finance.bitcoinAddress|lower}.svg"
        ],
        "types": []
      },
      "content": {"values": [{}, {}, {}], "types": []}
    },
    "gaps": [{"start": 2, "end": 98}],
    "ids": [1, 99, 100]
  }
};