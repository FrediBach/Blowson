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
      },
      "cart_id": {
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
      }
    },
    "gaps": [{"start": 2, "end": 24}],
    "ids": [1, 25]
  },
  "products": {
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
      "name": {
        "values": [
          "{{fake.commerce.productName}}",
          "{{fake.commerce.productName}}",
          "{{fake.commerce.productName}}"
        ],
        "types": []
      },
      "description": {
        "values": ["{{paragraph}}", "{{paragraph}}", "{{paragraph}}"],
        "types": []
      },
      "color": {
        "values": [
          "{{fake.commerce.color}}",
          "{{fake.commerce.color}}",
          "{{fake.commerce.color}}"
        ],
        "types": []
      },
      "stock": {
        "values": [0, 50, 9],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 0,
            "max": 50,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 0,
          "max": 50,
          "dir": false
        }
      },
      "price": {
        "values": [24.95, 512.25, 89.75],
        "types": [
          {
            "type": "float",
            "confidence": 1,
            "min": 24.95,
            "max": 512.25,
            "dir": false
          }
        ],
        "type": {
          "type": "float",
          "confidence": 1,
          "min": 24.95,
          "max": 512.25,
          "dir": false
        }
      },
      "category_id": {
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
      }
    },
    "gaps": [{"start": 2, "end": 98}],
    "ids": [1, 100, 99]
  },
  "categories": {
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
      "name": {
        "values": [
          "{{fake.commerce.department}}",
          "{{fake.commerce.department}}"
        ],
        "types": []
      },
      "description": {"values": ["{{sentence}}", "{{sentence}}"], "types": []}
    },
    "gaps": [{"start": 2, "end": 9}],
    "ids": [1, 10]
  },
  "orders": {
    "fields": {
      "id": {
        "values": [1, 50, 49],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 50,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 50,
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
      "products": {
        "values": [
          [
            {"product_id": 1},
            {"product_id": 100},
            {"product_id": 45},
            {"product_id": 22}
          ],
          [{"product_id": 16}, {"product_id": 99}],
          [{"product_id": 81}]
        ],
        "types": []
      },
      "date": {
        "values": [
          "2018-01-05T08:23:05+01:00",
          "2017-01-05T08:23:05+01:00",
          "2019-01-05T08:23:05+01:00"
        ],
        "types": []
      },
      "payd": {"values": [true, true, false], "types": []}
    },
    "gaps": [{"start": 2, "end": 48}],
    "ids": [1, 50, 49]
  },
  "carts": {
    "fields": {
      "id": {
        "values": [1, 25, 9],
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
      "products": {
        "values": [
          [
            {"product_id": 1},
            {"product_id": 100},
            {"product_id": 67},
            {"product_id": 16}
          ],
          [{"product_id": 11}],
          [{"product_id": 21}]
        ],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 24}],
    "ids": [1, 25, 9]
  }
};