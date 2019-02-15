module.exports = {
    "users": [
        {
            "id": 1,
            "username": "{{word.noun|capitalize}}{{number|optional}}",
            "email": "{{field.username|slug}}@gmail.com",
            "cart_id": 1
        },
        {
            "id": 25,
            "username": "{{word.noun|capitalize}}{{number|optional}}",
            "email": "{{field.username|slug}}@gmail.com",
            "cart_id": 25
        }
    ],
    "products": [
        {
            "id": 1,
            "name": "{{fake.commerce.productName}}",
            "description": "{{paragraph}}",
            "color": "{{fake.commerce.color}}",
            "stock": 0,
            "price": 24.95,
            "category_id": 1
        },
        {
            "id": 100,
            "name": "{{fake.commerce.productName}}",
            "description": "{{paragraph}}",
            "color": "{{fake.commerce.color}}",
            "stock": 50,
            "price": 512.25,
            "category_id": 10
        },
        {
            "id": 99,
            "name": "{{fake.commerce.productName}}",
            "description": "{{paragraph}}",
            "color": "{{fake.commerce.color}}",
            "stock": 9,
            "price": 89.75,
            "category_id": 9
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "{{fake.commerce.department}}",
            "description": "{{sentence}}"
        },
        {
            "id": 10,
            "name": "{{fake.commerce.department}}",
            "description": "{{sentence}}"
        }
    ],
    "orders": [
        {
            "id": 1,
            "user_id": 1,
            "products": [{ "product_id": 1 }, { "product_id": 100 }, { "product_id": 45 }, { "product_id": 22 }],
            "date": "2018-01-05T08:23:05+01:00",
            "payd": true
        },
        {
            "id": 50,
            "user_id": 25,
            "products": [{ "product_id": 16 }, { "product_id": 99 }],
            "date": "2017-01-05T08:23:05+01:00",
            "payd": true
        },
        {
            "id": 49,
            "user_id": 24,
            "products": [{ "product_id": 81 }],
            "date": "2019-01-05T08:23:05+01:00",
            "payd": false
        }
    ],
    "carts": [
        {
            "id": 1,
            "products": [{ "product_id": 1 }, { "product_id": 100 }, { "product_id": 67 }, { "product_id": 16 }]
        },
        {
            "id": 25,
            "products": [{ "product_id": 11 }]
        },
        {
            "id": 9,
            "products": [{ "product_id": 21 }]
        }
    ]
};