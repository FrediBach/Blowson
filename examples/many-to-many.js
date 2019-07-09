module.exports = {
    "users": [
        {
            "id": 1,
            "username": "{{word.noun|capitalize}}{{number|optional}}",
            "email": "{{field.username|slug}}@gmail.com",
            "friends": [
                {"user_id": 2},
                {"user_id": 100}
            ]
        },
        {
            "id": 100,
            "username": "{{word.noun|capitalize}}{{number|optional}}",
            "email": "{{field.username|slug}}@gmail.com",
            "friends": [
                { "user_id": 56 }, 
                { "user_id": 62 }, 
                { "user_id": 64 }, 
                { "user_id": 77 }, 
                { "user_id": 78 }, 
                { "user_id": 91 }, 
                { "user_id": 93 }
            ]
        },
    ]
};