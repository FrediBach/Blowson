module.exports = {
    "users": [
        {
            "id": 1,
            "username": "{{word.noun|capitalize}}{{number|optional}}",
            "email": "{{field.username|slug}}@gmail.com",
        },
        {
            "id": 25,
            "username": "{{word.noun|capitalize}}{{number|optional}}",
            "email": "{{field.username|slug}}@gmail.com"
        }
    ],
    "games": [
        {
            "id": 1,
            "title": "{{word.noun|capitalize}} {{word.noun|capitalize|optional}} {{number|optional}}",
            "slug": "{{field.title|slug}}",
            "description": "{{paragraph}}",
            "highscore": "{{connected.scores.score|max}}"
        },
        {
            "id": 10,
            "title": "{{word.noun|capitalize}} {{word.noun|capitalize|optional}} {{number|optional}}",
            "slug": "{{field.title|slug}}",
            "description": "{{paragraph}}",
            "highscore": "{{connected.scores.score|max}}"
        }
    ],
    "scores": [
        {
            "id": 1,
            "user_id": 1,
            "game_id": 1,
            "score": 500,
            "difficulty": "easy",
            "level": 1,
            "date": "2018-01-05T08:23:05+01:00"
        },
        {
            "id": 100,
            "user_id": 25,
            "game_id": 10,
            "score": 5500,
            "difficulty": "hard",
            "level": 10,
            "date": "2017-01-05T08:23:05+01:00"
        },
        {
            "id": 99,
            "user_id": 24,
            "game_id": 9,
            "score": 250,
            "difficulty": "hard",
            "level": 9,
            "date": "2019-01-05T08:23:05+01:00"
        }
    ]
};