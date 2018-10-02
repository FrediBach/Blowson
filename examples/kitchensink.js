module.exports = {
    keyDetections: [
        {
            id: 1,
            age: 38,
            firstname: 'Mike',
            lastname: 'Smith',
            company: 'Google',
            country: 'CH',
            email: 'mike.smith@example.com',
            color: '#45ffdc',
            ip: '11.47.204.208',
            profession: 'Analyst',
            url: 'https://www.example.org/​',
            city: 'Flatleybury',
            street: '082 Sanford Park',
            zip: 55130,
            weekday: 'Saturday',
            year: 2007,
            password: 'ofbgqSIvbaWGvAa',
            guid: '63230c6c-8621-4eb0-aad0-2a7af12fb843',
            product: 'Hat',
            material: 'Rubber',
            iban: 'EE917001009726211084',
            bic: 'IKYUMUS1490',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/edkf/128.jpg​',
            username: 'Heidi4',
            homepage: 'http://alvena.name​',
            job: 'Accountant',
            mimetype: 'application/x-silverlight-app'
        },
        {
            id: 25,
            age: 22,
            firstname: 'Sandy',
            lastname: 'Mueller',
            company: 'Yahoo',
            country: 'US',
            email: 'sandy.mueller@example.com',
            color: '#25ffcc',
            ip: '11.47.204.231',
            profession: 'Programmer',
            url: 'https://www.domain.com/​',
            city: 'London',
            street: '034 Pisa Road',
            zip: 25478,
            weekday: 'Friday',
            year: 1975,
            password: 'jhg6DGD78zffsda',
            guid: '63230c6c-8621-4eb0-aad0-2a7af12fb844',
            product: 'Shoe',
            material: 'Plastic',
            iban: 'EE917001009726211085',
            bic: 'IKYUMUS1491',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/fsda/128.jpg​',
            username: 'Tom132',
            homepage: 'http://treeed.name​',
            job: 'Bookworm',
            mimetype: 'txt/plain'
        }
    ],
    contentDetections: [
        {
            id: 1,
            word: 'House',
            sentence: 'He made coffee.',
            headline: 'He made coffee',
            paragraph: 'He loved dogs. And he loved cats, as well!',
            article: 'He drove cars. He crashed bikes!\n\nHe had dreams. One or two each night.',
            string: 'hfgajlkdfghhdfjshgljk',
            char: 'A',
            integer: 12,
            float: 4.34,
            boolean: true,
            date: '1976-05-23',
            datetime: '1976-05-23T15:48:45+01:00',
            time: '14:36',
            array: [1, 5, 7, 8],
            pattern: '34:TGDE:12-z'
        },
        {
            id: 25,
            word: 'Building',
            sentence: 'He made tee.',
            headline: 'He made tee',
            paragraph: 'He loved cats. And he loved dogs, as well!',
            article: 'He drove buses. He crashed cars!\n\nHe had toys. One or two of each.',
            string: 'gdfsgfdgdgfdgsdf',
            char: 'Z',
            integer: 4536,
            float: 67.233,
            boolean: false,
            date: '2001-11-11',
            datetime: '2014-12-23T07:48:45+01:00',
            time: '08:11',
            array: [2, 3, 6, 8, 25],
            pattern: '53:HGFZ:89-p'
        }
    ],
    numberDetections: [
        {
            id: 1,
            growingFloat: 1.2,
            intFiveOrTen: 5,
            shrinkingInt: 1087,
            unorderedFloat: 12.235
        },
        {
            id: 2,
            growingFloat: 1.3,
            intFiveOrTen: 10,
            shrinkingInt: 8,
            unorderedFloat: 12
        },
        {
            id: 25,
            growingFloat: 25,
            intFiveOrTen: 5,
            shrinkingInt: 7,
            unorderedFloat: 18.2
        }
    ],
    interFieldRules: [
        {
            id: 1,
            from: 1,
            to: 100,
            big: 10000,
            small: 20,
            bigRandom: 95845564
        },
        {
            id: 2,
            from: 56,
            to: 67,
            big: 35425,
            small: 2,
            bigRandom: 45456478
        },
        {
            id: 25,
            from: 45,
            to: 201,
            big: 54665,
            small: 7,
            bigRandom: 74564454
        }
    ],
    occurrencyFrequencies: [
        {
            id: 1,
            sex: 'm',
            activated: true
        },
        {
            id: 2,
            sex: 'f',
            activated: false
        },
        {
            id: 3,
            sex: 'm',
            activated: true
        },
        {
            id: 25,
            sex: 'f',
            activated: true
        }
    ],
    optionals: [
        {
            id: 1,
            required: 'Cat',
            optional: 'Dog',
            config: {
                required: 'Cat',
                optional: 'Dog',
            }
        },
        {
            id: 25,
            required: 'Elephant',
            config: {
                required: 'Elephant',
            }
        },
    ],
    steps: [
        {
            id: 1,
            step100: 100,
            step250: 1000,
            step1: 1
        },
        {
            id: 2,
            step100: 1000,
            step250: 0,
            step1: 100
        },
        {
            id: 25,
            step100: 200,
            step250: 750,
            step1: 99
        }
    ],
    floatingPointPrecision: [
        {
            id: 1,
            precision1: 3.2,
            precision2: 3.34,
            precision4: 5.3821
        },
        {
            id: 25,
            precision1: 45.3,
            precision2: 34.12,
            precision4: 42.3784
        }
    ],
    dates: [
        {
            id: 1,
            fromDate: '1901-01-01',
            toDate: '2099-12-31',
            fromTimestamp: '1901-01-01T00:00:00+01:00',
            toTimestamp: '2099-12-31T23:59:59+01:00',
            fromTime: '00:00',
            toTime: '23:59'
        },
        {
            id: 25,
            fromDate: '2000-01-02',
            toDate: '2001-12-30',
            fromTimestamp: '2000-01-02T00:00:00+01:00',
            toTimestamp: '2001-12-30T23:59:59+01:00',
            fromTime: '11:59',
            toTime: '12:00'
        }
    ],
    customFieldNames: [
        { "id": 1, "firstname": "Mike", "surname__lastname": "Smith" },
        { "id": 5, "firstname": "Lucy", "surname__lastname": "Johnson" }
    ],
    temporaryFileds: [
        { "id": 1, "name": "{{field.firstname}} {{field.lastname}}", "__firstname": "Tim", "__lastname": "Jones" },
        { "id": 5, "name": "{{field.firstname}} {{field.lastname}}", "__firstname": "Mike", "__lastname": "Williams" }
    ],
    relationshipSources: [
        { "id": 1, "firstname": "Mike", age: 12 },
        { "id": 2, "firstname": "Alex", age: 77 },
        { "id": 5, "firstname": "Lucy", age: 23 }
    ],
    relationShipTargets: [
        { "id": 1, "relationshipSource_id": 1, "text": "Hi {{field.relationshipSource.firstname}} (age {{field.relationshipSource.age}}), well done. Congrats!" },
        { "id": 2, "relationshipSource_id": 2, "text": "Hi {{field.relationshipSource.firstname}} (age {{field.relationshipSource.age}}), well done. Congrats!" },
        { "id": 25, "relationshipSource_id": 5, "text": "Hello {{field.relationshipSource.firstname}} (id: {{field.relationshipSource_id}}), don't stop what you're doing!" }
    ],
    posts: [
        { "id": 1, "text": "Bla ...", "commentCount": "{{connected.comments|count}}" },
        { "id": 2, "text": "Bla ...", "commentCount": "{{connected.comments|count}}" },
        { "id": 5, "text": "Bla ...", "commentCount": "{{connected.comments|count}}" }
    ],
    comments: [
        { "id": 1, "post_id": 1, "text": "Some text ..." },
        { "id": 2, "post_id": 2, "text": "Some text ..." },
        { "id": 20, "post_id": 50, "text": "Some text ..." }
    ],
    filters: [
        {
            id: 1,
            slug: '{{field.var1|slug}}',
            lower: '{{field.var1|lower}}',
            upper: '{{field.var1|upper}}',
            capitalize: '{{field.var2|capitalize}}',
            plural: '{{field.var3|plural}}',
            singular: '{{field.var4|singular}}',
            md5: '{{field.var5|md5}}',
            md: '{{field.var6|md}}',
            round: '{{field.var7|round}}',
            floor: '{{field.var7|floor}}',
            ceil: '{{field.var7|ceil}}',
            plus1: '{{field.var8|plus:1}}',
            plus10: '{{field.var8|plus:10}}',
            minus1: '{{field.var8|minus:1}}',
            minus10: '{{field.var8|minus:10}}',
            times2: '{{field.var8|times:2}}',
            times4: '{{field.var8|times:4}}',
            max2: '{{field.var8|max:2}}',
            min5: '{{field.var8|min:5}}',
            dateYYYY: '{{field.var9|date:YYYY}}',
            num0o: '{{field.var8|num:0o}}',
            optional: '{{field.var1|optional}}',
            count: '{{field.var10|count}}',
            max: '{{field.var10|max}}',
            min: '{{field.var10|min}}',
            sum: '{{field.var10|sum}}',
            avg: '{{field.var10|avg}}',
            rand: '{{field.var10|rand}}',
            multiNumber: '{{field.var8|plus:3|times:2|minus:5}}',
            multiString: '{{field.var1|slug|upper}}',
            var1: 'Test String',
            var2: 'test string',
            var3: 'Dog',
            var4: 'Cats',
            var5: 'MyPassword123',
            var6: '# Markdown',
            var7: 3.14,
            var8: 3,
            var9: '2018-03-24',
            var10: [1, 2, 5, 7]
        },
        {
            id: 5,
            slug: '{{field.var1|slug}}',
            lower: '{{field.var1|lower}}',
            upper: '{{field.var1|upper}}',
            capitalize: '{{field.var2|capitalize}}',
            plural: '{{field.var3|plural}}',
            singular: '{{field.var4|singular}}',
            md5: '{{field.var5|md5}}',
            md: '{{field.var6|md}}',
            round: '{{field.var7|round}}',
            floor: '{{field.var7|floor}}',
            ceil: '{{field.var7|ceil}}',
            plus1: '{{field.var8|plus:1}}',
            plus10: '{{field.var8|plus:10}}',
            minus1: '{{field.var8|minus:1}}',
            minus10: '{{field.var8|minus:10}}',
            times2: '{{field.var8|times:2}}',
            times4: '{{field.var8|times:4}}',
            max2: '{{field.var8|max:2}}',
            min5: '{{field.var8|min:5}}',
            dateYYYY: '{{field.var9|date:YYYY}}',
            num0o: '{{field.var8|num:0o}}',
            optional: '{{field.var1|optional}}',
            count: '{{field.var10|count}}',
            max: '{{field.var10|max}}',
            min: '{{field.var10|min}}',
            sum: '{{field.var10|sum}}',
            avg: '{{field.var10|avg}}',
            rand: '{{field.var10|rand}}',
            multiNumber: '{{field.var8|plus:3|times:2|minus:5}}',
            multiString: '{{field.var1|slug|upper}}',
            var1: 'Another Test String',
            var2: 'another test string',
            var3: 'Status',
            var4: 'Tee',
            var5: 'LetMeIn123',
            var6: '> Markdown Test',
            var7: 9.99,
            var8: 9,
            var9: '1912-11-02',
            var10: [1, 20, 8, 60]
        }
    ],
    defaults: [
        { "id": 1, "width": 250, "height": 100, "url": "https://imgplaceholder.com/{{field.width?250}}x{{field.height?100}}" },
        { "id": 2, "width": 500, "height": 250, "url": "https://imgplaceholder.com/{{field.width?500}}x{{field.height?250}}" },
        { "id": 10, "url": "https://imgplaceholder.com/{{field.width?400}}x{{field.height?200}}" }
    ],
    sentences: [
        {
            id: 1,
            text: 'A {{word.noun}}, {{word.a_noun}}, {{word.nouns}}, {{word.adjective}}, {{word.an_adjective}} and {{number}}',
            sentence: '{{sentence}}',
            paragraph: '{{paragraph}}'
        },
        {
            id: 10,
            text: 'A {{word.noun}}, {{word.a_noun}}, {{word.nouns}}, {{word.adjective}}, {{word.an_adjective}} and {{number}}',
            sentence: '{{sentence}}',
            paragraph: '{{paragraph}}'
        }
    ]
}