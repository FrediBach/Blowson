module.exports = {
  "pages": {
    "fields": {
      "id": {
        "values": [1, 9, 10],
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
          "Welcome to our homepage",
          "Documentations",
          "Products Overview"
        ],
        "types": []
      },
      "section_id": {
        "values": [2, 10, 7],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 2,
            "max": 10,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 2,
          "max": 10,
          "dir": false
        }
      },
      "published": {
        "values": ["2018-09-12", "2018-12-24", "2018-12-24"],
        "types": []
      },
      "content": {
        "values": [
          [
            {"text_block_id": 1},
            {"image_block_id": 1},
            {"text_block_id": 2},
            {"text_block_id": 8},
            {"text_block_id": 4}
          ],
          [{"image_block_id": 10}, {"text_block_id": 25}],
          [{"text_block_id": 1}, {"image_block_id": 1}, {"text_block_id": 2}]
        ],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 8}],
    "ids": [1, 9, 10]
  },
  "sections": {
    "fields": {
      "id": {
        "values": [1, 9, 10],
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
          "{{word.noun|capitalize}}",
          "{{word.adjective|capitalize}} {{word.noun|capitalize}}",
          "{{word.noun|capitalize}}"
        ],
        "types": []
      },
      "slug": {
        "values": [
          "{{field.title|slug}}",
          "{{field.title|slug}}",
          "{{field.title|slug}}"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 8}],
    "ids": [1, 9, 10]
  },
  "text_blocks": {
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
      "text": {"values": ["{{paragraph}}", "{{paragraph}}"], "types": []}
    },
    "gaps": [{"start": 2, "end": 24}],
    "ids": [1, 25]
  },
  "image_blocks": {
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
      "url": {
        "values": [
          "https://placebeard.it/g/640x400/notag?r={{field.id}}",
          "https://placebeard.it/g/500x500/notag?r={{field.id}}"
        ],
        "types": []
      },
      "caption": {"values": ["{{sentence}}"], "types": []}
    },
    "gaps": [{"start": 2, "end": 9}],
    "ids": [1, 10]
  }
};