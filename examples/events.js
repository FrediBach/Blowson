module.exports = {
    "events": [
        {
            "id": 1,
            "title": "Poker night",
            "desc": "{{paragraph}}",
            "date": "2019-09-12",
            "from": "11:00",
            "to": "12:00",
            "location_id": 1,
            "user_id": 1
        },
        {
            "id": 24,
            "title": "Gym",
            "desc": "{{paragraph}}",
            "date": "2019-12-29",
            "from": "08:00",
            "to": "10:00",
            "location_id": 25,
            "user_id": 25
        },
        {
            "id": 25,
            "title": "Night hike and sleep",
            "desc": "{{paragraph}}",
            "date": "2019-03-01",
            "from": "23:00",
            "to": "23:45",
            "location_id": 12,
            "user_id": 12
        }
    ],
        "locations": [
            {
                "id": 1,
                "name": "{{fake.address.city}}",
                "desc": "{{paragraph}}",
                "lat": "{{fake.address.latitude}}",
                "lng": "{{fake.address.longitude}}"
            },
            {
                "id": 25,
                "name": "{{fake.address.city}}",
                "desc": "{{paragraph}}",
                "lat": "{{fake.address.latitude}}",
                "lng": "{{fake.address.longitude}}"
            }
        ],
            "user": [
                {
                    "id": 1,
                    "username": "{{word.noun|capitalize}}{{number|optional}}",
                    "email": "{{field.username|slug}}@gmail.com"
                },
                {
                    "id": 25,
                    "username": "{{word.noun|capitalize}}{{number|optional}}",
                    "email": "{{field.username|slug}}@gmail.com"
                }
            ],
                "participant": [
                    {
                        "id": 1,
                        "user_id": 1,
                        "event_id": 1
                    },
                    {
                        "id": 49,
                        "user_id": 25,
                        "event_id": 25
                    },
                    {
                        "id": 50,
                        "user_id": 12,
                        "event_id": 12
                    }
                ]
};