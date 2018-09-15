module.exports = {
    users: [
        { id: 1, firstname: 'Fredi', lastname: 'Bach', slug: '{{field.firstname|slug}}-{{field.lastname|slug}}-{{field.userStatus.key}}', country: 'CH', birthday: '1975-09-03', sex: 'm', email: 'osxcode@gmail.com', userStatus_id: 2, registered: '2018-06-22T09:02:11+01:00', file_id: 1 },
        { id: 2, firstname: 'Samuel', lastname: 'Patzen', slug: '{{field.firstname|slug}}-{{field.lastname|slug}}-{{field.userStatus.key}}', country: 'IT', birthday: '1978-02-01', sex: 'm', email: 'patzen@bluewin.ch', userStatus_id: 2, registered: '2018-07-01T09:05:11+01:00' },
        { id: 30, firstname: 'Vreni', lastname: 'Beispiel', slug: '{{field.firstname|slug}}-{{field.lastname|slug}}-{{field.userStatus.key}}', country: 'FR', birthday: '1983-02-01', sex: 'f', email: 'vreni.beispiel@domain.ch', userStatus_id: 1, registered: '2018-04-01T09:04:11+01:00' }
    ],
    userStatus: [
        { id: 1, key: 'inactive' },
        { id: 2, key: 'active' },
        { id: 3, key: 'blocked' }
    ],
    userConfigs: [
        { id: 1, user_id: 1/*, configs: { 'mainLeague': 1, 'interfaceDensity': 'normal', 'focusedInterface': false }*/ },
        { id: 2, user_id: 2/*, configs: { 'mainLeague': 2, 'interfaceDensity': 'normal', 'focusedInterface': false }*/ },
        { id: 30, user_id: 30/*, configs: { 'mainLeague': 1, 'interfaceDensity': 'normal', 'focusedInterface': false }*/ }
    ],
    leagues: [
        { id: 1, name: 'Switzerland {{field.created|date:YYYY}}', yearly: true, description: 'Waypoint are all placed in Switzerland by local instructors and top pilots.', created: '2018-05-01T12:00:00+01:00', seasonStart: '10-01', seasonEnd: '09-31', file_id: 2 },
        { id: 2, name: 'Austria', yearly: true, description: 'Waypoint are all placed in Austria by local instructors and top pilots.', created: '2018-01-02T12:00:00+01:00', seasonStart: '10-01', seasonEnd: '09-31', file_id: 2 },
        { id: 3, name: 'Vol Liber Grischun Clubmeisterschaft', yearly: false, created: '2018-02-02T12:00:00+01:00', seasonStart: '2018-10-01', seasonEnd: '2048-10-01' },
        { id: 10, name: 'Switzerland {{field.created|date:YYYY}}', yearly: true, created: '2018-03-02T12:00:00+01:00', seasonStart: '2018-10-01', seasonEnd: '2048-10-01' }
    ],
    userLeagues: [
        { id: 1, user_id: 1, league_id: 1, isAdmin: true },
        { id: 2, user_id: 1, league_id: 2, isAdmin: true },
        { id: 3, user_id: 2, league_id: 1 },
        { id: 4, user_id: 1, league_id: 3 },
        { id: 5, user_id: 2, league_id: 3, isAdmin: true },
        { id: 6, user_id: 3, league_id: 1 },
        { id: 50, user_id: 4, league_id: 2 }
    ],
    files: [
        { id: 1, mimetype_id: 1, width: 250, height: 250, url: 'https://imgplaceholder.com/{{field.width?250}}x{{field.height?250}}/cccccc/757575/ion-happy-outline' },
        { id: 2, mimetype_id: 1, width: 800, height: 400, url: 'https://imgplaceholder.com/{{field.width?800}}x{{field.height?400}}/cccccc/757575/fa-image' },
        { id: 3, mimetype_id: 1, width: 300, height: 200, url: 'https://imgplaceholder.com/{{field.width?300}}x{{field.height?200}}/cccccc/757575/fa-map-marker' },
        { id: 4, mimetype_id: 3, url: 'https://mycdn.com/fredi-bach/2018-07-02-001.igc' },
        { id: 5, mimetype_id: 3, url: 'https://mycdn.com/fredi-bach/2018-07-03-001.igc' },
        { id: 25, mimetype_id: 3, url: 'https://mycdn.com/fredi-bach/2018-07-03-001.igc' }
    ],
    mimetypes: [
        { id: 1, mime: 'image/png', description: 'Portable Network Graphics' },
        { id: 2, mime: 'image/jpeg', description: 'JPEG images' },
        { id: 3, mime: 'application/vnd.fai.igc', description: 'Flight track file' }
    ],
    types: [
        { id: 1, name: 'Challenge', description: 'A challenging waypoint, only for the best', points: 200 },
        { id: 2, name: 'Altitude', description: 'A big mountain, that needs altitude to reach', points: 150 },
        { id: 3, name: 'Beauty', description: 'Just a nice view', points: 100 },
        { id: 4, name: 'Takeoff', description: 'Official takoeff', points: 10 },
        { id: 5, name: 'Landing', description: 'Official landing', points: 10 }
    ],
    waypoints: [
        { id: 1, league_id: 1, type_id: 1, lat: 3.789, lng: 41.987, radius: 400, points: 100, minAltitude: 3500, name: 'Oberalp Pass', description: 'From Andermatt to Disentis', file_id: 3 },
        { id: 2, league_id: 1, type_id: 2, lat: 3.589, lng: 41.787, radius: 400, points: 100, minAltitude: 3500, name: 'Furka Pass', description: 'From the Goms to Andermatt', file_id: 3 },
        { id: 3, league_id: 1, type_id: 4, lat: 3.889, lng: 40.787, radius: 200, points: 10, name: 'Fiesch' },
        { id: 4, league_id: 2, type_id: 5, lat: 2.589, lng: 51.787, radius: 400, points: 10, minAltitude: 2500, name: 'Hotel Alpenblick', description: 'Where you would love to bomb out ... maybe.', file_id: 3 },
        { id: 250, league_id: 2, type_id: 5, lat: 2.589, lng: 51.787, radius: 200, points: 10, minAltitude: 2500, name: 'Walensee Seeblick', description: 'Die beste Aussicht zum Walensee!', file_id: 3 },
    ],
    waypointNotes: [
        { id: 1, waypoint_id: 1, noteType_id: 1, title: 'Föhn', text: 'Bei Föhn sehr gefährlich!' },
        { id: 2, waypoint_id: 1, noteType_id: 2, title: 'Basis', text: 'Braucht mindestens 3000 Meter Basis, besser mehr.' },
        { id: 100, waypoint_id: 250, noteType_id: 2, title: 'Nicht verzagen, Fredi fragen', text: 'Was meistens funktioniert, ist ein langer Gleitflug, oft mit Rückendwind, vom Falknis direkt an die Ablösequelle direkt nach der Gonzenflanke.' }
    ],
    waypointPhotos: [
        { id: 1, user_id: 1, official: true, waypoint_id: 1, mimetype_id: 2, width: 1080, height: 960, url: 'https://mycdn.com/fredi-bach/oberalp-2018-1.jpeg' },
        { id: 2, user_id: 1, official: true, waypoint_id: 2, mimetype_id: 2, width: 1080, height: 960, url: 'https://mycdn.com/fredi-bach/oberalp-2018-2.jpeg' },
        { id: 3, user_id: 2, official: false, waypoint_id: 3, mimetype_id: 2, width: 1080, height: 960, url: 'https://mycdn.com/fredi-bach/oberalp-2018-3.jpeg' },
        { id: 100, user_id: 30, official: false, waypoint_id: 250, mimetype_id: 2, width: 1080, height: 960, url: 'https://mycdn.com/fredi-bach/oberalp-2018-3.jpeg' }
    ],
    waypointSuggestions: [
        { id: 1, user_id: 2, league_id: 1, type_id: 1, lat: 11.789, lng: 33.987, radius: 800, points: 100, minAltitude: 3500, name: 'Limmeren Stausee', description: 'Auf dem Weg von der Surselva ins Glaernerland', file_id: 3 },
        { id: 25, user_id: 30, league_id: 2, type_id: 5, lat: 5.789, lng: 40.987, radius: 200, points: 50, minAltitude: 2500, name: 'Spitzberg', description: 'Der flachste Spitzberg aller Zeiten.', file_id: 3 }
    ],
    noteTypes: [
        { id: 1, name: 'Wind', icon: 'wind', class: 'waypoint-note-wind' },
        { id: 2, name: 'Altitude', icon: 'altitude', class: 'waypoint-note-altitude' }
    ],
    sponsors: [
        { id: 1, waypoint_id: 1, user_id: 1, name: 'Flugschule Appenzell', 'url': 'http://www.gleitschirm.ch', 'slogan': 'Die Flugschule im Alpstein.' },
        { id: 2, waypoint_id: 2, name: 'Ozone', 'url': 'http://www.flyozone.ch', 'slogan': 'Real world performance.' },
        { id: 50, waypoint_id: 250, name: 'Hotel Eicher', 'url': 'http://www.hotel-eicher.ch', 'slogan': 'For a good nights sleep in the mountains.' }
    ],
    waypointChats: [
        { id: 1, waypoint_id: 1, user_id: 1, message: 'Can be quite hard with low base!', datetime: '2018-07-02T12:00:00+01:00' },
        { id: 2, waypoint_id: 2, user_id: 2, message: 'Oh yes, it can!', datetime: '2018-07-02T12:23:05+01:00' },
        { id: 250, waypoint_id: 250, user_id: 30, message: 'Maybe we should remove this one?', datetime: '2018-01-02T12:23:05+01:00' }
    ],
    wings: [
        { id: 1, model: 'Zeno', brand: 'Ozone', certification: 'D' },
        { id: 2, model: 'Mentor', brand: 'Nova', certification: 'B' },
        { id: 3, model: 'Delta', brand: 'Ozone', certification: 'C' },
        { id: 4, model: 'Sprint', brand: 'Gin', certification: 'A' },
        { id: 50, model: 'Iota', brand: 'Advance', certification: 'B' }
    ],
    flights: [
        { id: 1, user_id: 1, league_id: 1, wing_id: 1, date: '2018-07-02T12:00:00+01:00', score: 200, file_id: 4, comment: 'Bockig!' },
        { id: 2, user_id: 2, league_id: 2, wing_id: 2, date: '2018-07-03T12:00:00+01:00', score: 100, file_id: 5 },
        { id: 100, user_id: 30, league_id: 3, wing_id: 50, date: '2018-01-02T12:00:00+01:00', score: 50, file_id: 25, comment: 'Was für ein Erlebniss! Immer wieder gerne.' }
    ],
    favoriteFlights: [
        { id: 1, user_id: 1, flight_id: 1, datetime: '2018-07-02T12:00:00+01:00' },
        { id: 2, user_id: 1, flight_id: 2, datetime: '2018-01-02T12:00:00+01:00' },
        { id: 100, user_id: 30, flight_id: 100, datetime: '2018-02-02T12:00:00+01:00' }
    ],
    flightWaypoints: [
        { id: 1, flight_id: 1, waypoint_id: 1, datetime: '2018-07-02T12:48:45+01:00', score: 100 },
        { id: 2, flight_id: 1, waypoint_id: 2, datetime: '2018-07-02T13:11:59+01:00', score: 50 },
        { id: 3, flight_id: 2, waypoint_id: 2, datetime: '2018-08-02T14:06:11+01:00', score: 25 },
        { id: 500, flight_id: 100, waypoint_id: 250, datetime: '2018-01-02T14:06:11+01:00', score: 150 }
    ],
    flightComments: [
        { id: 1, flight_id: 1, user_id: 2, datetime: '2018-08-02T14:06:11+01:00', text: 'Ok, that was nice!' },
        { id: 2, flight_id: 2, user_id: 1, datetime: '2018-08-02T14:09:11+01:00', text: 'Thanks' },
        { id: 250, flight_id: 100, user_id: 30, datetime: '2018-01-02T14:09:11+01:00', text: 'That is a really nice flight. Congrats I\'m jelaous.' }
    ],
    leagueSeasonUserScores: [
        { id: 1, user_id: 1, league_id: 1, season: '2018', score: 200, flightCount: 1 },
        { id: 2, user_id: 1, league_id: 2, season: '2018', score: 0, flightCount: 0 },
        { id: 3, user_id: 2, league_id: 1, season: '2018', score: 100, flightCount: 5 },
        { id: 250, user_id: 30, league_id: 3, season: '2018', score: 7500, flightCount: 62 }
    ],
    routes: [
        { id: 1, user_id: 1, league_id: 1, name: 'Wallis Sightseeing', description: 'A great route for a low wind high cloudbase day.' },
        { id: 2, user_id: 1, league_id: 2, name: 'Surselva Adventure' },
        { id: 50, user_id: 30, league_id: 3, name: 'Northwind Bonanza', description: 'The perfect route if you want some action, turbulences and an absolutely incredible view!' }
    ],
    routeWaypoints: [
        { id: 1, route_id: 1, waypoint_id: 1 },
        { id: 2, route_id: 2, waypoint_id: 2, routeWaypoint_id: 1 },
        { id: 3, route_id: 3, waypoint_id: 3, routeWaypoint_id: 2 },
        { id: 250, route_id: 50, waypoint_id: 250, routeWaypoint_id: 3 }
    ],
    favoriteRoutes: [
        { id: 1, user_id: 1, route_id: 1, datetime: '2018-07-01T15:48:45+01:00' },
        { id: 100, user_id: 30, route_id: 50, datetime: '2018-01-01T15:48:45+01:00' }
    ]
};