module.exports = {
  "users": {
    "fields": {
      "id": {
        "values": [1, 2, 30],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 30,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 30,
          "dir": "asc"
        }
      },
      "firstname": {"values": ["Fredi", "Samuel", "Vreni"], "types": []},
      "lastname": {"values": ["Bach", "Patzen", "Beispiel"], "types": []},
      "slug": {
        "values": [
          "{{field.firstname|slug}}-{{field.lastname|slug}}",
          "{{field.firstname|slug}}-{{field.lastname|slug}}",
          "{{field.firstname|slug}}-{{field.lastname|slug}}"
        ],
        "types": []
      },
      "country": {"values": ["CH", "IT", "FR"], "types": []},
      "birthday": {
        "values": ["1975-09-03", "1978-02-01", "1983-02-01"],
        "types": []
      },
      "sex": {"values": ["m", "m", "f"], "types": []},
      "email": {
        "values": [
          "osxcode@gmail.com",
          "patzen@bluewin.ch",
          "vreni.beispiel@domain.ch"
        ],
        "types": []
      },
      "userStatus_id": {
        "values": [2, 2, 1],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 2,
            "dir": "desc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 2,
          "dir": "desc"
        }
      },
      "registered": {
        "values": [
          "2018-06-22T09:02:11+01:00",
          "2018-07-01T09:05:11+01:00",
          "2018-04-01T09:04:11+01:00"
        ],
        "types": []
      },
      "user_ids": {"values": [[2, 3, 8, 20], [1, 30]], "types": []},
      "file_id": {
        "values": [1],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 1, "dir": false}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 1,
          "dir": false
        }
      }
    },
    "gaps": [{"start": 3, "end": 29}],
    "ids": [1, 2, 30]
  },
  "userStatus": {
    "fields": {
      "id": {
        "values": [1, 2, 3],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 3, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 3,
          "dir": "asc"
        }
      },
      "key": {"values": ["inactive", "active", "blocked"], "types": []}
    },
    "gaps": [false],
    "ids": [1, 2, 3]
  },
  "userConfigs": {
    "fields": {
      "id": {
        "values": [1, 2, 3, 30],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 30,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 30,
          "dir": "asc"
        }
      },
      "user_id": {
        "values": [1, 2, 3, 30],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 30,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 30,
          "dir": "asc"
        }
      },
      "configs": {
        "values": [
          {
            "mainLeague": 1,
            "interfaceDensity": "normal",
            "focusedInterface": false
          },
          {
            "mainLeague": 2,
            "interfaceDensity": "normal",
            "focusedInterface": false
          },
          {
            "mainLeague": 10,
            "interfaceDensity": "dense",
            "focusedInterface": true
          }
        ],
        "types": []
      }
    },
    "gaps": [{"start": 4, "end": 29}],
    "ids": [1, 2, 3, 30]
  },
  "leagues": {
    "fields": {
      "id": {
        "values": [1, 2, 3, 10],
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
          "Switzerland {{field.created|date:YYYY}}",
          "Austria",
          "Vol Liber Grischun Clubmeisterschaft",
          "Italy {{field.created|date:YYYY}}"
        ],
        "types": []
      },
      "yearly": {"values": [true, true, false, true], "types": []},
      "description": {
        "values": [
          "Waypoint are all placed in Switzerland by local instructors and top pilots.",
          "Waypoint are all placed in Austria by local instructors and top pilots."
        ],
        "types": []
      },
      "created": {
        "values": [
          "2018-05-01T12:00:00+01:00",
          "2018-01-02T12:00:00+01:00",
          "2018-02-02T12:00:00+01:00",
          "2018-03-02T12:00:00+01:00"
        ],
        "types": []
      },
      "seasonStart": {
        "values": ["10-01", "10-01", "2018-10-01", "2018-10-01"],
        "types": []
      },
      "seasonEnd": {
        "values": ["09-31", "09-31", "2048-10-01", "2048-10-01"],
        "types": []
      },
      "file_id": {
        "values": [2, 2],
        "types": [
          {"type": "integer", "confidence": 1, "min": 2, "max": 2, "dir": false}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 2,
          "max": 2,
          "dir": false
        }
      }
    },
    "gaps": [{"start": 4, "end": 9}],
    "ids": [1, 2, 3, 10]
  },
  "userLeagues": {
    "fields": {
      "id": {
        "values": [1, 2, 3, 4, 5, 6, 50],
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
        "values": [1, 1, 2, 1, 2, 3, 4],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 4, "dir": false}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 4,
          "dir": false
        }
      },
      "league_id": {
        "values": [1, 2, 1, 3, 3, 1, 2],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 3, "dir": false}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 3,
          "dir": false
        }
      },
      "isAdmin": {"values": [true, true, true], "types": []}
    },
    "gaps": [{"start": 7, "end": 49}],
    "ids": [1, 2, 3, 4, 5, 6, 50]
  },
  "files": {
    "fields": {
      "id": {
        "values": [1, 2, 3, 4, 5, 25],
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
      "mimetype_id": {
        "values": [1, 1, 1, 3, 3, 3],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 3, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 3,
          "dir": "asc"
        }
      },
      "width": {
        "values": [250, 800, 300],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 250,
            "max": 800,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 250,
          "max": 800,
          "dir": false
        }
      },
      "height": {
        "values": [250, 400, 200],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 200,
            "max": 400,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 200,
          "max": 400,
          "dir": false
        }
      },
      "url": {
        "values": [
          "https://imgplaceholder.com/{{field.width?250}}x{{field.height?250}}/cccccc/757575/ion-happy-outline",
          "https://imgplaceholder.com/{{field.width?800}}x{{field.height?400}}/cccccc/757575/fa-image",
          "https://imgplaceholder.com/{{field.width?300}}x{{field.height?200}}/cccccc/757575/fa-map-marker",
          "https://mycdn.com/fredi-bach/2018-07-02-001.igc",
          "https://mycdn.com/fredi-bach/2018-07-03-001.igc",
          "https://mycdn.com/fredi-bach/2018-07-03-001.igc"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 6, "end": 24}],
    "ids": [1, 2, 3, 4, 5, 25]
  },
  "mimetypes": {
    "fields": {
      "id": {
        "values": [1, 2, 3],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 3, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 3,
          "dir": "asc"
        }
      },
      "mime": {
        "values": ["image/png", "image/jpeg", "application/vnd.fai.igc"],
        "types": []
      },
      "description": {
        "values": [
          "Portable Network Graphics",
          "JPEG images",
          "Flight track file"
        ],
        "types": []
      }
    },
    "gaps": [false],
    "ids": [1, 2, 3]
  },
  "types": {
    "fields": {
      "id": {
        "values": [1, 2, 3, 4, 5],
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
        "values": ["Challenge", "Altitude", "Beauty", "Takeoff", "Landing"],
        "types": []
      },
      "description": {
        "values": [
          "A challenging waypoint, only for the best",
          "A big mountain, that needs altitude to reach",
          "Just a nice view",
          "Official takoeff",
          "Official landing"
        ],
        "types": []
      },
      "points": {
        "values": [200, 150, 100, 10, 10],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 10,
            "max": 200,
            "dir": "desc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 10,
          "max": 200,
          "dir": "desc"
        }
      }
    },
    "gaps": [false],
    "ids": [1, 2, 3, 4, 5]
  },
  "waypoints": {
    "fields": {
      "id": {
        "values": [1, 2, 3, 4, 250],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 250,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 250,
          "dir": "asc"
        }
      },
      "league_id": {
        "values": [1, 1, 1, 2, 2],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 2, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 2,
          "dir": "asc"
        }
      },
      "type_id": {
        "values": [1, 2, 4, 5, 5],
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
      "lat": {
        "values": [3.789, 3.589, 3.889, 2.689, 2.589],
        "types": [
          {
            "type": "float",
            "confidence": 1,
            "min": 2.589,
            "max": 3.889,
            "dir": false
          }
        ],
        "type": {
          "type": "float",
          "confidence": 1,
          "min": 2.589,
          "max": 3.889,
          "dir": false
        }
      },
      "lng": {
        "values": [41.987, 41.787, 40.787, 51.687, 51.787],
        "types": [
          {
            "type": "float",
            "confidence": 1,
            "min": 40.787,
            "max": 51.787,
            "dir": false
          }
        ],
        "type": {
          "type": "float",
          "confidence": 1,
          "min": 40.787,
          "max": 51.787,
          "dir": false
        }
      },
      "radius": {
        "values": [400, 400, 200, 400, 200],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 200,
            "max": 400,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 200,
          "max": 400,
          "dir": false
        }
      },
      "points": {
        "values": [100, 100, 10, 10, 10],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 10,
            "max": 100,
            "dir": "desc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 10,
          "max": 100,
          "dir": "desc"
        }
      },
      "minAltitude": {
        "values": [3500, 3500, 2500, 2500],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 2500,
            "max": 3500,
            "dir": "desc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 2500,
          "max": 3500,
          "dir": "desc"
        }
      },
      "name": {
        "values": [
          "Oberalp Pass",
          "Furka Pass",
          "Fiesch",
          "Hotel Alpenblick",
          "Walensee Seeblick"
        ],
        "types": []
      },
      "description": {
        "values": [
          "From Andermatt to Disentis",
          "From the Goms to Andermatt",
          "Where you would love to bomb out ... maybe.",
          "Die beste Aussicht zum Walensee!"
        ],
        "types": []
      },
      "file_id": {
        "values": [3, 3, 3, 3],
        "types": [
          {"type": "integer", "confidence": 1, "min": 3, "max": 3, "dir": false}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 3,
          "max": 3,
          "dir": false
        }
      }
    },
    "gaps": [{"start": 5, "end": 249}],
    "ids": [1, 2, 3, 4, 250]
  },
  "waypointNotes": {
    "fields": {
      "id": {
        "values": [1, 2, 100],
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
      "waypoint_id": {
        "values": [1, 1, 250],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 250,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 250,
          "dir": "asc"
        }
      },
      "noteType_id": {
        "values": [1, 2, 2],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 2, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 2,
          "dir": "asc"
        }
      },
      "title": {
        "values": ["Föhn", "Basis", "Nicht verzagen, Fredi fragen"],
        "types": []
      },
      "text": {
        "values": [
          "Bei Föhn sehr gefährlich!",
          "Braucht mindestens 3000 Meter Basis, besser mehr.",
          "Was meistens funktioniert, ist ein langer Gleitflug, oft mit Rückendwind, vom Falknis direkt an die Ablösequelle direkt nach der Gonzenflanke."
        ],
        "types": []
      }
    },
    "gaps": [{"start": 3, "end": 99}],
    "ids": [1, 2, 100]
  },
  "waypointPhotos": {
    "fields": {
      "id": {
        "values": [1, 2, 3, 100],
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
      "user_id": {
        "values": [1, 1, 2, 30],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 30,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 30,
          "dir": "asc"
        }
      },
      "official": {"values": [true, true, false, false], "types": []},
      "waypoint_id": {
        "values": [1, 2, 3, 250],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 250,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 250,
          "dir": "asc"
        }
      },
      "mimetype_id": {
        "values": [2, 2, 2, 2],
        "types": [
          {"type": "integer", "confidence": 1, "min": 2, "max": 2, "dir": false}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 2,
          "max": 2,
          "dir": false
        }
      },
      "width": {
        "values": [1080, 1080, 1080, 1080],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1080,
            "max": 1080,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1080,
          "max": 1080,
          "dir": false
        }
      },
      "height": {
        "values": [960, 960, 960, 960],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 960,
            "max": 960,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 960,
          "max": 960,
          "dir": false
        }
      },
      "url": {
        "values": [
          "https://mycdn.com/fredi-bach/oberalp-2018-1.jpeg",
          "https://mycdn.com/fredi-bach/oberalp-2018-2.jpeg",
          "https://mycdn.com/fredi-bach/oberalp-2018-3.jpeg",
          "https://mycdn.com/fredi-bach/oberalp-2018-3.jpeg"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 4, "end": 99}],
    "ids": [1, 2, 3, 100]
  },
  "waypointSuggestions": {
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
      "user_id": {
        "values": [2, 30],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 2,
            "max": 30,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 2,
          "max": 30,
          "dir": "asc"
        }
      },
      "league_id": {
        "values": [1, 2],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 2, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 2,
          "dir": "asc"
        }
      },
      "type_id": {
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
      "lat": {
        "values": [11.789, 5.789],
        "types": [
          {
            "type": "float",
            "confidence": 1,
            "min": 5.789,
            "max": 11.789,
            "dir": "desc"
          }
        ],
        "type": {
          "type": "float",
          "confidence": 1,
          "min": 5.789,
          "max": 11.789,
          "dir": "desc"
        }
      },
      "lng": {
        "values": [33.987, 40.987],
        "types": [
          {
            "type": "float",
            "confidence": 1,
            "min": 33.987,
            "max": 40.987,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "float",
          "confidence": 1,
          "min": 33.987,
          "max": 40.987,
          "dir": "asc"
        }
      },
      "radius": {
        "values": [800, 200],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 200,
            "max": 800,
            "dir": "desc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 200,
          "max": 800,
          "dir": "desc"
        }
      },
      "points": {
        "values": [100, 50],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 50,
            "max": 100,
            "dir": "desc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 50,
          "max": 100,
          "dir": "desc"
        }
      },
      "minAltitude": {
        "values": [3500, 2500],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 2500,
            "max": 3500,
            "dir": "desc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 2500,
          "max": 3500,
          "dir": "desc"
        }
      },
      "name": {"values": ["Limmeren Stausee", "Spitzberg"], "types": []},
      "description": {
        "values": [
          "Auf dem Weg von der Surselva ins Glaernerland",
          "Der flachste Spitzberg aller Zeiten."
        ],
        "types": []
      },
      "file_id": {
        "values": [3, 3],
        "types": [
          {"type": "integer", "confidence": 1, "min": 3, "max": 3, "dir": false}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 3,
          "max": 3,
          "dir": false
        }
      }
    },
    "gaps": [{"start": 2, "end": 24}],
    "ids": [1, 25]
  },
  "noteTypes": {
    "fields": {
      "id": {
        "values": [1, 2],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 2, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 2,
          "dir": "asc"
        }
      },
      "name": {"values": ["Wind", "Altitude"], "types": []},
      "icon": {"values": ["wind", "altitude"], "types": []},
      "class": {
        "values": ["waypoint-note-wind", "waypoint-note-altitude"],
        "types": []
      }
    },
    "gaps": [false],
    "ids": [1, 2]
  },
  "sponsors": {
    "fields": {
      "id": {
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
      "waypoint_id": {
        "values": [1, 2, 250],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 250,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 250,
          "dir": "asc"
        }
      },
      "user_id": {
        "values": [1],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 1, "dir": false}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 1,
          "dir": false
        }
      },
      "name": {
        "values": ["Flugschule Appenzell", "Ozone", "Hotel Eicher"],
        "types": []
      },
      "url": {
        "values": [
          "http://www.gleitschirm.ch",
          "http://www.flyozone.ch",
          "http://www.hotel-eicher.ch"
        ],
        "types": []
      },
      "slogan": {
        "values": [
          "Die Flugschule im Alpstein.",
          "Real world performance.",
          "For a good nights sleep in the mountains."
        ],
        "types": []
      }
    },
    "gaps": [{"start": 3, "end": 49}],
    "ids": [1, 2, 50]
  },
  "waypointChats": {
    "fields": {
      "id": {
        "values": [1, 2, 250],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 250,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 250,
          "dir": "asc"
        }
      },
      "waypoint_id": {
        "values": [1, 2, 250],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 250,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 250,
          "dir": "asc"
        }
      },
      "user_id": {
        "values": [1, 2, 30],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 30,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 30,
          "dir": "asc"
        }
      },
      "message": {
        "values": [
          "Can be quite hard with low base!",
          "Oh yes, it can!",
          "Maybe we should remove this one?"
        ],
        "types": []
      },
      "datetime": {
        "values": [
          "2018-07-02T12:00:00+01:00",
          "2018-07-02T12:23:05+01:00",
          "2018-01-02T12:23:05+01:00"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 3, "end": 249}],
    "ids": [1, 2, 250]
  },
  "wings": {
    "fields": {
      "id": {
        "values": [1, 2, 3, 4, 50],
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
      "model": {
        "values": ["Zeno", "Mentor", "Delta", "Sprint", "Iota"],
        "types": []
      },
      "brand": {
        "values": ["Ozone", "Nova", "Ozone", "Gin", "Advance"],
        "types": []
      },
      "certification": {"values": ["D", "B", "C", "A", "B"], "types": []}
    },
    "gaps": [{"start": 5, "end": 49}],
    "ids": [1, 2, 3, 4, 50]
  },
  "flights": {
    "fields": {
      "id": {
        "values": [1, 2, 100],
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
      "user_id": {
        "values": [1, 2, 30],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 30,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 30,
          "dir": "asc"
        }
      },
      "league_id": {
        "values": [1, 2, 3],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 3, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 3,
          "dir": "asc"
        }
      },
      "wing_id": {
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
      "date": {
        "values": [
          "2018-07-02T12:00:00+01:00",
          "2018-07-03T12:00:00+01:00",
          "2018-01-02T12:00:00+01:00"
        ],
        "types": []
      },
      "score": {
        "values": [200, 50, 100],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 50,
            "max": 200,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 50,
          "max": 200,
          "dir": false
        }
      },
      "file_id": {
        "values": [4, 5, 25],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 4,
            "max": 25,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 4,
          "max": 25,
          "dir": "asc"
        }
      },
      "comment": {
        "values": ["Bockig!", "Was für ein Erlebniss! Immer wieder gerne."],
        "types": []
      }
    },
    "gaps": [{"start": 3, "end": 99}],
    "ids": [1, 2, 100]
  },
  "favoriteFlights": {
    "fields": {
      "id": {
        "values": [1, 2, 100],
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
      "user_id": {
        "values": [1, 1, 30],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 30,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 30,
          "dir": "asc"
        }
      },
      "flight_id": {
        "values": [1, 2, 100],
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
      "datetime": {
        "values": [
          "2018-07-02T12:00:00+01:00",
          "2018-01-02T12:00:00+01:00",
          "2018-02-02T12:00:00+01:00"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 3, "end": 99}],
    "ids": [1, 2, 100]
  },
  "flightWaypoints": {
    "fields": {
      "id": {
        "values": [1, 2, 3, 500],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 500,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 500,
          "dir": "asc"
        }
      },
      "flight_id": {
        "values": [1, 1, 2, 100],
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
      "waypoint_id": {
        "values": [1, 2, 2, 250],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 250,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 250,
          "dir": "asc"
        }
      },
      "datetime": {
        "values": [
          "2018-07-02T12:48:45+01:00",
          "2018-07-02T13:11:59+01:00",
          "2018-08-02T14:06:11+01:00",
          "2018-01-02T14:06:11+01:00"
        ],
        "types": []
      },
      "score": {
        "values": [100, 50, 25, 150],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 25,
            "max": 150,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 25,
          "max": 150,
          "dir": false
        }
      }
    },
    "gaps": [{"start": 4, "end": 499}],
    "ids": [1, 2, 3, 500]
  },
  "flightComments": {
    "fields": {
      "id": {
        "values": [1, 2, 250],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 250,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 250,
          "dir": "asc"
        }
      },
      "flight_id": {
        "values": [1, 2, 100],
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
      "user_id": {
        "values": [2, 1, 30],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 30,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 30,
          "dir": false
        }
      },
      "datetime": {
        "values": [
          "2018-08-02T14:06:11+01:00",
          "2018-08-02T14:09:11+01:00",
          "2018-01-02T14:09:11+01:00"
        ],
        "types": []
      },
      "text": {
        "values": [
          "Ok, that was nice!",
          "Thanks",
          "That is a really nice flight. Congrats I'm jelaous."
        ],
        "types": []
      }
    },
    "gaps": [{"start": 3, "end": 249}],
    "ids": [1, 2, 250]
  },
  "leagueSeasonUserScores": {
    "fields": {
      "id": {
        "values": [1, 2, 3, 250],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 250,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 250,
          "dir": "asc"
        }
      },
      "user_id": {
        "values": [1, 1, 2, 30],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 30,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 30,
          "dir": "asc"
        }
      },
      "league_id": {
        "values": [1, 2, 1, 3],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 3, "dir": false}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 3,
          "dir": false
        }
      },
      "season": {"values": ["2018", "2018", "2018", "2018"], "types": []},
      "score": {
        "values": [200, 0, 100, 7500],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 0,
            "max": 7500,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 0,
          "max": 7500,
          "dir": false
        }
      },
      "flightCount": {
        "values": [1, 0, 5, 62],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 0,
            "max": 62,
            "dir": false
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 0,
          "max": 62,
          "dir": false
        }
      }
    },
    "gaps": [{"start": 4, "end": 249}],
    "ids": [1, 2, 3, 250]
  },
  "routes": {
    "fields": {
      "id": {
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
      "user_id": {
        "values": [1, 1, 30],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 30,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 30,
          "dir": "asc"
        }
      },
      "league_id": {
        "values": [1, 2, 3],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 3, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 3,
          "dir": "asc"
        }
      },
      "name": {
        "values": [
          "Wallis Sightseeing",
          "Surselva Adventure",
          "Northwind Bonanza"
        ],
        "types": []
      },
      "description": {
        "values": [
          "A great route for a low wind high cloudbase day.",
          "The perfect route if you want some action, turbulences and an absolutely incredible view!"
        ],
        "types": []
      }
    },
    "gaps": [{"start": 3, "end": 49}],
    "ids": [1, 2, 50]
  },
  "routeWaypoints": {
    "fields": {
      "id": {
        "values": [1, 2, 3, 250],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 250,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 250,
          "dir": "asc"
        }
      },
      "route_id": {
        "values": [1, 2, 3, 50],
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
      "waypoint_id": {
        "values": [1, 2, 3, 250],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 250,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 250,
          "dir": "asc"
        }
      },
      "routeWaypoint_id": {
        "values": [1, 2, 3],
        "types": [
          {"type": "integer", "confidence": 1, "min": 1, "max": 3, "dir": "asc"}
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 3,
          "dir": "asc"
        }
      }
    },
    "gaps": [{"start": 4, "end": 249}],
    "ids": [1, 2, 3, 250]
  },
  "favoriteRoutes": {
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
      "user_id": {
        "values": [1, 30],
        "types": [
          {
            "type": "integer",
            "confidence": 1,
            "min": 1,
            "max": 30,
            "dir": "asc"
          }
        ],
        "type": {
          "type": "integer",
          "confidence": 1,
          "min": 1,
          "max": 30,
          "dir": "asc"
        }
      },
      "route_id": {
        "values": [1, 50],
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
      "datetime": {
        "values": ["2018-07-01T15:48:45+01:00", "2018-01-01T15:48:45+01:00"],
        "types": []
      }
    },
    "gaps": [{"start": 2, "end": 99}],
    "ids": [1, 100]
  }
};