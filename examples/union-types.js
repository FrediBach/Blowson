module.exports = {
    "pages": [
        {
            "id": 1,
            "slug": "{{field.title|slug}}",
            "lang": "de",
            "title": "Welcome to our homepage",
            "section_id": 2,
            "published": "2018-09-12",
            "content": [{"text_block_id": 1}, {"image_block_id": 1}, {"text_block_id": 2}]
        },
        {
            "id": 9,
            "slug": "{{field.title|slug}}",
            "lang": "de",
            "title": "Documentations",
            "section_id": 10,
            "published": "2018-12-24",
            "content": [{ "text_block_id": 1 }, { "image_block_id": 1 }, { "text_block_id": 2 }]
        },
        {
            "id": 10,
            "slug": "{{field.title|slug}}",
            "lang": "en",
            "title": "Products Overview",
            "section_id": 7,
            "published": "2018-12-24",
            "content": [{ "text_block_id": 1 }, { "image_block_id": 1 }, { "text_block_id": 2 }]
        }
    ],
    "sections": [
        {
            "id": 1,
            "title": "{{word.noun|capitalize}}",
            "slug": "{{field.title|slug}}"
        },
        {
            "id": 9,
            "title": "{{word.adjective|capitalize}} {{word.noun|capitalize}}",
            "slug": "{{field.title|slug}}"
        },
        {
            "id": 10,
            "title": "{{word.noun|capitalize}}",
            "slug": "{{field.title|slug}}"
        }
    ],
    "text_blocks": [
        {
            "id": 1,
            "text": "{{paragraph}}"
        },
        {
            "id": 25,
            "text": "{{paragraph}}"
        }
    ],
    "image_blocks": [
        {
            "id": 1,
            "url": "https://placebeard.it/g/640x400/notag?r={{field.id}}",
            "caption": "{{sentence}}"
        },
        {
            "id": 10,
            "url": "https://placebeard.it/g/500x500/notag?r={{field.id}}"
        }
    ]
};