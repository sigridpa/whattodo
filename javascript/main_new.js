//--- Part 1: adding base maps ---
//

//creating the map; defining the location in the center of the map (geographic coords) and the zoom level. These are properties of the leaflet map object
//the map window has been given the id 'map' in the .html file
var map = L.map('map', {
	center: [58.38, 26.75],
	zoom: 12
});

//adding three base maps 
var landscape = L.tileLayer('https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=563f62955337402abe711832afda1426', {
	attribution: 'Tiles from Thunderforest'});
	
var toner = L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>' });
	//toner.addTo(map);

var esri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
});
landscape.addTo(map);

// for using the base maps in the layer control, I defined a baseMaps variable
// the text on the left is the label shown in the layer control; the text right is the variable name
var baseMaps = {
	"Thunderforest pioneer": landscape,
	"Toner": toner,
	"ESRI":esri
	}

//Coordinates
//map.addEventListener('click', function(e) {
//    alert(e.latlng);
//});

//Highlighting


//---- Part 2: Adding a scale bar
//
L.control.scale({maxWidth: 400, imperial: false, position: 'bottomright'}).addTo(map);

//---- Part 3: Adding symbols ---- 
//Marker Version 1

var home_icon = L.icon({
    iconUrl: 'css/images/home.png',
    iconSize: [33, 50],
});

//var Ema = L.marker([58.371173, 26.726294], {icon: home_icon, title:'theHouse'}).addTo(map);

//var Kodu = L.marker([58.388242, 26.727762], {icon: home_icon, title:'theHouse'}).addTo(map);

//Adding my custom icon
var beer_icon = L.icon({
    iconUrl: 'css/images/beer.png',
    iconSize: [38, 38],
});

var pharmacy_icon = L.icon({
    iconUrl: 'css/images/pharmacy.png',
    iconSize: [23, 23],
});

//---- Part 5: Adding GeoJSON Point Features
//---- Adding GeoJSON point features - to marker object

var bar = {
  "type": "FeatureCollection",
  "generator": "overpass-ide",
  "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
  "timestamp": "2020-02-11T08:11:03Z",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1354158969",
        "amenity": "bar",
        "name": "Vein ja Vine",
        "wheelchair": "no",
		"outdoor_seating": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7217343,
          58.3811696
        ]
      },
      "id": "node/1354158969"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4252810807",
        "amenity": "bar",
        "name": "Barlova",
		"outdoor_seating": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7277148,
          58.3697107
        ]
      },
      "id": "node/4252810807"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4252850392",
        "amenity": "bar",
        "name": "Little Cuba",
		"outdoor_seating": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.725861,
          58.3802185
        ]
      },
      "id": "node/4252850392"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4260173666",
        "amenity": "bar",
        "name": "Lokaal Pirogov",
		"outdoor_seating": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7220698,
          58.3806591
        ]
      },
      "id": "node/4260173666"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4729082038",
        "addr:city": "Tartu",
        "addr:housenumber": "5A",
        "addr:street": "Küüni",
        "amenity": "bar",
        "name": "deTolly Õllebaar",
        "opening_hours": "Tue-Sat 16:00-varies",
        "outdoor_seating": "no",
        "smoking": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7230957,
          58.3791902
        ]
      },
      "id": "node/4729082038"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4920220938",
        "addr:city": "Tartu",
        "addr:housenumber": "6",
        "addr:postcode": "51003",
        "addr:street": "Vallikraavi",
        "amenity": "bar",
        "name": "Naiiv",
        "opening_hours": "Mo-Sa 18:00-03:00",
        "outdoor_seating": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7216213,
          58.3778865
        ]
      },
      "id": "node/4920220938"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/6694556805",
        "addr:city": "Tartu",
        "addr:housenumber": "19",
        "addr:postcode": "51014",
        "addr:street": "Vanemuise",
        "amenity": "bar",
        "contact:email": "kohvikarhiiv@gmail.com",
        "contact:facebook": "https://www.facebook.com/lokaalarhiiv/",
        "contact:phone": "+372 58953594",
        "contact:website": "https://visittartu.com/culture-bar-arhiiv",
        "name": "Arhiiv",
        "opening_hours": "We-Th 18:00-03:00; Fr-Sa17:00-04:00",
        "outdoor_seating": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.721416,
          58.3762305
        ]
      },
      "id": "node/6694556805"
    }
  ]
}

var bar_points = L.geoJson(bar, {
	pointToLayer: function(feature, latlng) {
    return  L.marker(latlng, {icon: beer_icon});
	},
	onEachFeature: function(feature, marker) {
			marker.bindPopup("<center><br><b>"+ "This is " + feature.properties.name + " and it is open at " + feature.properties.opening_hours + "<br>Can you sit outside? " + feature.properties.outdoor_seating +
			"</b></center>" );
	}
});
bar_points.addTo(map);

var pub = {
  "type": "FeatureCollection",
  "generator": "overpass-ide",
  "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
  "timestamp": "2020-02-11T08:13:02Z",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "@id": "node/331179291",
        "amenity": "pub",
        "name": "Zavood",
        "opening_hours": "Su-Th 18:00-04:00, Fr-Sa 18:00-05.00",
        "wheelchair": "no",
		"outdoor_seating": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7195368,
          58.3835993
        ]
      },
      "id": "node/331179291"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/334464372",
        "addr:housenumber": "2",
        "addr:street": "Küüni",
        "amenity": "pub",
        "name": "Pahad Poisid",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7231282,
          58.3799719
        ]
      },
      "id": "node/334464372"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/334467164",
        "amenity": "pub",
        "name": "Ristiisa",
        "wheelchair": "limited",
		"outdoor_seating": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7249523,
          58.37832
        ]
      },
      "id": "node/334467164"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/334468092",
        "amenity": "pub",
        "name": "Kotka Kelder",
        "opening_hours": "Mo-Sa 11:30-17:00",
        "wheelchair": "no",
		"outdoor_seating": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7195473,
          58.3741871
        ]
      },
      "id": "node/334468092"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/334468641",
        "amenity": "pub",
        "lunch": "yes",
        "name": "Püssirohukelder",
        "opening_hours": "Su-Mo 12:00-22:00; Tu 12:00-23:00; We-Sa 12:00-02:00",
        "phone": "+372 7 303 555",
        "website": "http://www.pyss.ee/",
        "wheelchair": "no",
		"outdoor_seating": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.718882,
          58.379192
        ]
      },
      "id": "node/334468641"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/334468976",
        "amenity": "pub",
        "name": "Krooks",
        "wheelchair": "no",
		"outdoor_seating": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7151271,
          58.3822245
        ]
      },
      "id": "node/334468976"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/583354432",
        "amenity": "pub",
        "internet_access": "wlan",
        "name": "Möku",
        "opening_hours": "18:00-03:00",
        "wheelchair": "no",
		"outdoor_seating": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7219985,
          58.3834787
        ]
      },
      "id": "node/583354432"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1376511164",
        "addr:housenumber": "1e",
        "addr:street": "Lembitu",
        "amenity": "pub",
        "name": "Beckeri Pubi",
        "opening_hours": "Mo-Fr 10:00-16:00",
		"outdoor_seating": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.707576,
          58.3699188
        ]
      },
      "id": "node/1376511164"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/2428411865",
        "amenity": "pub",
        "name": "Kivi",
        "source": "Vaatlus",
        "wheelchair": "no",
		"outdoor_seating": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7215116,
          58.3820361
        ]
      },
      "id": "node/2428411865"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/2946038617",
        "amenity": "pub",
        "brewery": "various",
        "food": "yes",
        "internet_access": "wlan",
        "name": "Pühaste Kelder",
        "outdoor_seating": "yes",
        "wheelchair": "no",
		"outdoor_seating": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.721858,
          58.381347
        ]
      },
      "id": "node/2946038617"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/5473200534",
        "addr:housenumber": "9",
        "addr:street": "Raekoja plats",
        "amenity": "pub",
        "name": "Pubi RP9",
		"outdoor_seating": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7235639,
          58.3801374
        ]
      },
      "id": "node/5473200534"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/6419795093",
        "amenity": "pub",
        "name": "Õlleministeerium",
		"outdoor_seating": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7195525,
          58.3761167
        ]
      },
      "id": "node/6419795093"
    }
  ]
}

var pub_points = L.geoJson(pub, {
	pointToLayer: function(feature, latlng) {
    return  L.marker(latlng, {icon: beer_icon});
	},
	onEachFeature: function(feature, marker) {
			marker.bindPopup("<center><br><b>"+ "This is " + feature.properties.name + " and it is open at " + feature.properties.opening_hours + "<br>Can you sit outside? " + feature.properties.outdoor_seating +
			"</b></center>" );
	}
});
pub_points.addTo(map);

var university = {
  "type": "FeatureCollection",
  "generator": "overpass-ide",
  "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
  "timestamp": "2020-02-11T08:22:02Z",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "@id": "way/30222445",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:full": "Lossi 36",
        "addr:housenumber": "36",
        "addr:street": "Lossi",
        "amenity": "university",
        "building": "yes",
        "name": "Sotsiaal- ja haridusteaduskond",
        "old_name": "naistekliinik",
        "source": "Tartu City Government",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.717525,
              58.378996
            ],
            [
              26.716478,
              58.379286
            ],
            [
              26.716348,
              58.379147
            ],
            [
              26.716658,
              58.379062
            ],
            [
              26.716677,
              58.379088
            ],
            [
              26.716788,
              58.379056
            ],
            [
              26.716794,
              58.379056
            ],
            [
              26.71676,
              58.379021
            ],
            [
              26.716697,
              58.379013
            ],
            [
              26.716618,
              58.378935
            ],
            [
              26.716897,
              58.378857
            ],
            [
              26.71698,
              58.378942
            ],
            [
              26.716928,
              58.378956
            ],
            [
              26.716919,
              58.378958
            ],
            [
              26.716966,
              58.379006
            ],
            [
              26.717176,
              58.378947
            ],
            [
              26.717087,
              58.378858
            ],
            [
              26.717064,
              58.378848
            ],
            [
              26.717024,
              58.378849
            ],
            [
              26.716997,
              58.378824
            ],
            [
              26.717274,
              58.378747
            ],
            [
              26.717308,
              58.378782
            ],
            [
              26.717363,
              58.378767
            ],
            [
              26.717465,
              58.378872
            ],
            [
              26.717415,
              58.378886
            ],
            [
              26.717525,
              58.378996
            ]
          ]
        ]
      },
      "id": "way/30222445"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/357843701",
        "addr:city": "Tartu",
        "addr:housenumber": "1",
        "addr:street": "Friedrich Reinhold Kreutzwaldi",
        "amenity": "university",
        "name": "Eesti Maaülikool",
        "website": "https://www.emu.ee/"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.6995273,
              58.389838
            ],
            [
              26.6996208,
              58.3898908
            ],
            [
              26.6995262,
              58.3899188
            ],
            [
              26.6993703,
              58.3899995
            ],
            [
              26.6992624,
              58.3900503
            ],
            [
              26.699141,
              58.3900798
            ],
            [
              26.6989476,
              58.3900959
            ],
            [
              26.6988245,
              58.3900989
            ],
            [
              26.6987346,
              58.3901011
            ],
            [
              26.6986238,
              58.3901038
            ],
            [
              26.6983309,
              58.3900975
            ],
            [
              26.6981376,
              58.3900798
            ],
            [
              26.6980972,
              58.3901534
            ],
            [
              26.6977661,
              58.390393
            ],
            [
              26.6976835,
              58.3904626
            ],
            [
              26.697169,
              58.3908858
            ],
            [
              26.6965064,
              58.3912289
            ],
            [
              26.6964616,
              58.3912289
            ],
            [
              26.6963806,
              58.3912579
            ],
            [
              26.6963636,
              58.3912791
            ],
            [
              26.6963679,
              58.3913048
            ],
            [
              26.6959794,
              58.3916278
            ],
            [
              26.6958453,
              58.3916551
            ],
            [
              26.6957364,
              58.3917293
            ],
            [
              26.6950617,
              58.3920525
            ],
            [
              26.6949544,
              58.3920588
            ],
            [
              26.6948829,
              58.39209
            ],
            [
              26.694871,
              58.3921603
            ],
            [
              26.6944268,
              58.3923614
            ],
            [
              26.6942445,
              58.3924866
            ],
            [
              26.694104,
              58.3926211
            ],
            [
              26.6940705,
              58.392624
            ],
            [
              26.6940222,
              58.3926679
            ],
            [
              26.6940296,
              58.3926981
            ],
            [
              26.6940612,
              58.3927108
            ],
            [
              26.6940538,
              58.3927781
            ],
            [
              26.6939254,
              58.3927956
            ],
            [
              26.6938789,
              58.3928093
            ],
            [
              26.6938436,
              58.3928453
            ],
            [
              26.6938454,
              58.3928648
            ],
            [
              26.6939143,
              58.3929009
            ],
            [
              26.6938941,
              58.3929884
            ],
            [
              26.693841,
              58.3930104
            ],
            [
              26.6938264,
              58.3930402
            ],
            [
              26.6938173,
              58.3930795
            ],
            [
              26.6937807,
              58.3931178
            ],
            [
              26.6934941,
              58.3933762
            ],
            [
              26.6934631,
              58.3934017
            ],
            [
              26.6930891,
              58.3932063
            ],
            [
              26.6931193,
              58.3931836
            ],
            [
              26.693125,
              58.3931529
            ],
            [
              26.6931042,
              58.3931252
            ],
            [
              26.6929871,
              58.3930697
            ],
            [
              26.6929059,
              58.3930559
            ],
            [
              26.6928455,
              58.3930668
            ],
            [
              26.6928171,
              58.3930905
            ],
            [
              26.6925164,
              58.392961
            ],
            [
              26.6919347,
              58.3926763
            ],
            [
              26.6920638,
              58.3924917
            ],
            [
              26.6922191,
              58.3922672
            ],
            [
              26.6922263,
              58.3922568
            ],
            [
              26.6922868,
              58.3922032
            ],
            [
              26.6923383,
              58.3921761
            ],
            [
              26.692354,
              58.3921589
            ],
            [
              26.6923823,
              58.3921278
            ],
            [
              26.6924304,
              58.3920751
            ],
            [
              26.6925506,
              58.3919302
            ],
            [
              26.6927586,
              58.3916457
            ],
            [
              26.692981,
              58.3913267
            ],
            [
              26.6931949,
              58.3910631
            ],
            [
              26.6935365,
              58.3905765
            ],
            [
              26.6935352,
              58.3905536
            ],
            [
              26.6935319,
              58.3904946
            ],
            [
              26.6935212,
              58.3904502
            ],
            [
              26.6935159,
              58.390428
            ],
            [
              26.6935991,
              58.3902913
            ],
            [
              26.6938976,
              58.3898747
            ],
            [
              26.6939566,
              58.3898004
            ],
            [
              26.6940375,
              58.3897647
            ],
            [
              26.6941199,
              58.389747
            ],
            [
              26.6941634,
              58.3896768
            ],
            [
              26.6941904,
              58.3896332
            ],
            [
              26.6942249,
              58.389588
            ],
            [
              26.6942879,
              58.3895053
            ],
            [
              26.6942974,
              58.3894692
            ],
            [
              26.6943112,
              58.3893828
            ],
            [
              26.6943783,
              58.3892911
            ],
            [
              26.694509,
              58.3891375
            ],
            [
              26.6945822,
              58.3890388
            ],
            [
              26.694627,
              58.388875
            ],
            [
              26.6947087,
              58.3887491
            ],
            [
              26.6949228,
              58.3884789
            ],
            [
              26.6950305,
              58.3883866
            ],
            [
              26.6952622,
              58.388202
            ],
            [
              26.6956086,
              58.3879408
            ],
            [
              26.6959584,
              58.3877125
            ],
            [
              26.6964895,
              58.3873975
            ],
            [
              26.6967157,
              58.3872697
            ],
            [
              26.6968936,
              58.3871549
            ],
            [
              26.6979752,
              58.3877372
            ],
            [
              26.698541,
              58.3880459
            ],
            [
              26.6996705,
              58.3886612
            ],
            [
              26.6992189,
              58.3888537
            ],
            [
              26.6991102,
              58.3889547
            ],
            [
              26.6990178,
              58.3890526
            ],
            [
              26.6989488,
              58.3891363
            ],
            [
              26.6989427,
              58.3891978
            ],
            [
              26.6989973,
              58.3892668
            ],
            [
              26.6991277,
              58.3894027
            ],
            [
              26.6992747,
              58.389556
            ],
            [
              26.6994331,
              58.3897432
            ],
            [
              26.699483,
              58.389798
            ],
            [
              26.6995273,
              58.389838
            ]
          ]
        ]
      },
      "id": "way/357843701"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/683398193",
        "amenity": "university"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.694149,
              58.3655465
            ],
            [
              26.6954488,
              58.3659669
            ],
            [
              26.6944492,
              58.3667813
            ],
            [
              26.694372,
              58.3667577
            ],
            [
              26.6941597,
              58.3666918
            ],
            [
              26.6933784,
              58.3664427
            ],
            [
              26.6937793,
              58.3660967
            ],
            [
              26.6935808,
              58.3660358
            ],
            [
              26.6938696,
              58.365787
            ],
            [
              26.694149,
              58.3655465
            ]
          ]
        ]
      },
      "id": "way/683398193"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/683398194",
        "amenity": "university"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.6942016,
              58.3669295
            ],
            [
              26.692503,
              58.3682761
            ],
            [
              26.6923246,
              58.3684157
            ],
            [
              26.6892287,
              58.3674149
            ],
            [
              26.6899666,
              58.3668442
            ],
            [
              26.6890207,
              58.3665104
            ],
            [
              26.6894636,
              58.3661678
            ],
            [
              26.6901519,
              58.3656257
            ],
            [
              26.6906724,
              58.3657794
            ],
            [
              26.691469,
              58.3659903
            ],
            [
              26.6918147,
              58.366106
            ],
            [
              26.6927041,
              58.366422
            ],
            [
              26.6942016,
              58.3669295
            ]
          ]
        ]
      },
      "id": "way/683398194"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/683398203",
        "amenity": "university"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.6940107,
              58.3688634
            ],
            [
              26.6927484,
              58.3684623
            ],
            [
              26.692799,
              58.3684228
            ],
            [
              26.693464,
              58.3679041
            ],
            [
              26.6935242,
              58.3678571
            ],
            [
              26.6937155,
              58.3677078
            ],
            [
              26.6937873,
              58.3676526
            ],
            [
              26.6938166,
              58.367629
            ],
            [
              26.6943317,
              58.367785
            ],
            [
              26.6944717,
              58.3678274
            ],
            [
              26.6953681,
              58.3681072
            ],
            [
              26.6954544,
              58.3681341
            ],
            [
              26.6958753,
              58.3682639
            ],
            [
              26.6959242,
              58.3682772
            ],
            [
              26.6957146,
              58.3683684
            ],
            [
              26.6956133,
              58.3684078
            ],
            [
              26.6955081,
              58.3684457
            ],
            [
              26.6953499,
              58.3684892
            ],
            [
              26.6944722,
              58.368335
            ],
            [
              26.6940107,
              58.3688634
            ]
          ]
        ]
      },
      "id": "way/683398203"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/686122978",
        "amenity": "university"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.7052068,
              58.3784674
            ],
            [
              26.7061371,
              58.3786423
            ],
            [
              26.7057023,
              58.3793
            ],
            [
              26.7048839,
              58.3791486
            ],
            [
              26.7050749,
              58.3788097
            ],
            [
              26.7049734,
              58.3787951
            ],
            [
              26.7052068,
              58.3784674
            ]
          ]
        ]
      },
      "id": "way/686122978"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/686122980",
        "amenity": "university"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.7048943,
              58.3782317
            ],
            [
              26.7051215,
              58.377914
            ],
            [
              26.7053332,
              58.37761
            ],
            [
              26.7062532,
              58.3777844
            ],
            [
              26.7058696,
              58.3784105
            ],
            [
              26.7055948,
              58.3783601
            ],
            [
              26.7053524,
              58.3783157
            ],
            [
              26.7048943,
              58.3782317
            ]
          ]
        ]
      },
      "id": "way/686122980"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/691733207",
        "amenity": "university"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.7152038,
              58.3732494
            ],
            [
              26.7157297,
              58.3728812
            ],
            [
              26.7158416,
              58.372801
            ],
            [
              26.7159739,
              58.3728546
            ],
            [
              26.7163117,
              58.3729782
            ],
            [
              26.7163554,
              58.3729951
            ],
            [
              26.7166908,
              58.3731177
            ],
            [
              26.7168321,
              58.3730122
            ],
            [
              26.7170402,
              58.3730824
            ],
            [
              26.717662,
              58.372653
            ],
            [
              26.717739,
              58.372596
            ],
            [
              26.7180791,
              58.3723754
            ],
            [
              26.718842,
              58.3726878
            ],
            [
              26.718307,
              58.37302
            ],
            [
              26.718196,
              58.373091
            ],
            [
              26.7177221,
              58.3733673
            ],
            [
              26.717635,
              58.3734307
            ],
            [
              26.717214,
              58.3737374
            ],
            [
              26.7170193,
              58.3738654
            ],
            [
              26.71699,
              58.3738984
            ],
            [
              26.7152038,
              58.3732494
            ]
          ]
        ]
      },
      "id": "way/691733207"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/694288904",
        "amenity": "university"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.7147328,
              58.3780616
            ],
            [
              26.71506,
              58.378049
            ],
            [
              26.715278,
              58.378124
            ],
            [
              26.715486,
              58.378135
            ],
            [
              26.715502,
              58.378167
            ],
            [
              26.715339,
              58.378257
            ],
            [
              26.715268,
              58.378284
            ],
            [
              26.714691,
              58.378293
            ],
            [
              26.714687,
              58.378321
            ],
            [
              26.714694,
              58.378338
            ],
            [
              26.714713,
              58.378357
            ],
            [
              26.714757,
              58.378384
            ],
            [
              26.714798,
              58.378402
            ],
            [
              26.714512,
              58.378434
            ],
            [
              26.7142019,
              58.3784646
            ],
            [
              26.714079,
              58.378105
            ],
            [
              26.714234,
              58.378129
            ],
            [
              26.714426,
              58.378126
            ],
            [
              26.7147304,
              58.3781135
            ],
            [
              26.7147328,
              58.3780616
            ]
          ]
        ]
      },
      "id": "way/694288904"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/694288905",
        "amenity": "university"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.713864,
              58.37792
            ],
            [
              26.7141107,
              58.3783191
            ],
            [
              26.714176,
              58.378487
            ],
            [
              26.714053,
              58.378497
            ],
            [
              26.713988,
              58.378501
            ],
            [
              26.713635,
              58.378509
            ],
            [
              26.713375,
              58.378519
            ],
            [
              26.713358,
              58.378522
            ],
            [
              26.713248,
              58.378524
            ],
            [
              26.7127751,
              58.3784408
            ],
            [
              26.712634,
              58.37798
            ],
            [
              26.712576,
              58.377889
            ],
            [
              26.712593,
              58.3778268
            ],
            [
              26.71262,
              58.37783
            ],
            [
              26.713021,
              58.37786
            ],
            [
              26.7132533,
              58.3778683
            ],
            [
              26.713274,
              58.37787
            ],
            [
              26.7136207,
              58.377901
            ],
            [
              26.713864,
              58.37792
            ]
          ]
        ]
      },
      "id": "way/694288905"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/694288908",
        "amenity": "university"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.719324,
              58.376807
            ],
            [
              26.719746,
              58.376472
            ],
            [
              26.7203227,
              58.3760417
            ],
            [
              26.7212814,
              58.3763706
            ],
            [
              26.7213884,
              58.3764101
            ],
            [
              26.7215327,
              58.3764367
            ],
            [
              26.7216557,
              58.3764314
            ],
            [
              26.721726,
              58.376421
            ],
            [
              26.721771,
              58.37641
            ],
            [
              26.72182,
              58.376389
            ],
            [
              26.721999,
              58.376284
            ],
            [
              26.7220513,
              58.3762442
            ],
            [
              26.7224108,
              58.3763907
            ],
            [
              26.7218992,
              58.3767869
            ],
            [
              26.7218584,
              58.3768185
            ],
            [
              26.7213835,
              58.3771862
            ],
            [
              26.721092,
              58.3774156
            ],
            [
              26.720796,
              58.377321
            ],
            [
              26.719324,
              58.376807
            ]
          ]
        ]
      },
      "id": "way/694288908"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/695701411",
        "addr:city": "Tartu",
        "addr:housenumber": "6",
        "addr:street": "Pepleri",
        "amenity": "university",
        "name": "Ettevõtluskõrgkool Mainor",
        "website": "https://eek.ee/"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.7164665,
              58.3769887
            ],
            [
              26.7164741,
              58.3766814
            ],
            [
              26.7167339,
              58.3766754
            ],
            [
              26.7170079,
              58.3767009
            ],
            [
              26.7173179,
              58.376782
            ],
            [
              26.7171664,
              58.3770583
            ],
            [
              26.7164665,
              58.3769887
            ]
          ]
        ]
      },
      "id": "way/695701411"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/695701419",
        "amenity": "university"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.7191535,
              58.3805452
            ],
            [
              26.719177,
              58.38051
            ],
            [
              26.719012,
              58.380499
            ],
            [
              26.719016,
              58.380481
            ],
            [
              26.718936,
              58.3804729
            ],
            [
              26.7190265,
              58.3802752
            ],
            [
              26.7190924,
              58.3801319
            ],
            [
              26.7192233,
              58.3799389
            ],
            [
              26.7204054,
              58.3801616
            ],
            [
              26.7205789,
              58.3802006
            ],
            [
              26.7207487,
              58.3802395
            ],
            [
              26.7208124,
              58.3802878
            ],
            [
              26.7208478,
              58.380336
            ],
            [
              26.7208301,
              58.3803787
            ],
            [
              26.7204798,
              58.3807517
            ],
            [
              26.7191535,
              58.3805452
            ]
          ]
        ]
      },
      "id": "way/695701419"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/726382080",
        "amenity": "university"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.6938555,
              58.3894942
            ],
            [
              26.6938099,
              58.389511
            ],
            [
              26.6928685,
              58.3893325
            ],
            [
              26.6928041,
              58.389303
            ],
            [
              26.6905544,
              58.3889025
            ],
            [
              26.6900942,
              58.3888206
            ],
            [
              26.6900552,
              58.3888136
            ],
            [
              26.6909801,
              58.3875332
            ],
            [
              26.6912665,
              58.3875648
            ],
            [
              26.6924593,
              58.3877825
            ],
            [
              26.6930072,
              58.3878188
            ],
            [
              26.6929349,
              58.3879409
            ],
            [
              26.6930325,
              58.3879687
            ],
            [
              26.6937645,
              58.3880916
            ],
            [
              26.6938628,
              58.3881418
            ],
            [
              26.6947511,
              58.3883737
            ],
            [
              26.6946289,
              58.3885044
            ],
            [
              26.694624,
              58.3885117
            ],
            [
              26.6943162,
              58.3887786
            ],
            [
              26.6942097,
              58.3890047
            ],
            [
              26.6938555,
              58.3894942
            ]
          ]
        ]
      },
      "id": "way/726382080"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "way/726382090",
        "amenity": "university"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              26.6886178,
              58.3913235
            ],
            [
              26.6906965,
              58.3924595
            ],
            [
              26.6906377,
              58.392509
            ],
            [
              26.6904586,
              58.3925719
            ],
            [
              26.6887103,
              58.3932424
            ],
            [
              26.6885945,
              58.3933078
            ],
            [
              26.6882483,
              58.3934977
            ],
            [
              26.6879686,
              58.3933955
            ],
            [
              26.6876743,
              58.393288
            ],
            [
              26.6871169,
              58.3931085
            ],
            [
              26.6872256,
              58.3930211
            ],
            [
              26.6875873,
              58.3927304
            ],
            [
              26.6867726,
              58.3924597
            ],
            [
              26.6875985,
              58.391859
            ],
            [
              26.6886178,
              58.3913235
            ]
          ]
        ]
      },
      "id": "way/726382090"
    }
  ]
}

var bars_pubs = L.layerGroup([bar_points, pub_points]);

var university_points = L.geoJson(university, {
	pointToLayer: function(feature, latlng) {
    return  L.marker(latlng);
	}
});
university_points.addTo(map);

var pharmacy = {
  "type": "FeatureCollection",
  "generator": "overpass-ide",
  "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
  "timestamp": "2020-02-12T11:26:02Z",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "@id": "node/322920315",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "31",
        "addr:postcode": "50417",
        "addr:street": "Raja",
        "amenity": "pharmacy",
        "email": "haru@apteek.ee",
        "healthcare": "pharmacy",
        "name": "Raja Apteek",
        "opening_hours": "Mo-Th 08:00-17:30; Fr 08:00-16:00",
        "operator": "Apotheka",
        "phone": "+372 7442224"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.6811539,
          58.3630891
        ]
      },
      "id": "node/322920315"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/322943595",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "20",
        "addr:postcode": "51009",
        "addr:street": "Raatuse",
        "amenity": "pharmacy",
        "email": "raatuse@uusapteek.ee",
        "name": "Raatuse Apteek",
        "opening_hours": "Mo-Fr 09:00-20:00; Sa 10:00-18:00",
        "operator": "Apotheka",
        "phone": "+372 7384364",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7304548,
          58.3822505
        ]
      },
      "id": "node/322943595"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/332950268",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "8",
        "addr:postcode": "51004",
        "addr:street": "Poe",
        "amenity": "pharmacy",
        "email": "kesklinnaapt@ut.ee",
        "healthcare": "pharmacy",
        "name": "Tartu Ülikooli Kesklinna Apteek",
        "opening_hours": "Mo-Fr 08:00-20:00; Sa 09:00-17:00",
        "operator": "Apotheka",
        "phone": "+372 7423593",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7241514,
          58.3796825
        ]
      },
      "id": "node/332950268"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/802767911",
        "amenity": "pharmacy",
        "name": "Ylikooli Apteek",
        "opening_hours": "Mo-Fr 09:00-19:00, Sa 10:00-18:00",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.724371,
          58.3786568
        ]
      },
      "id": "node/802767911"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/926290307",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "19",
        "addr:postcode": "51014",
        "addr:street": "Tuglase",
        "amenity": "pharmacy",
        "name": "Tähtvere apteek",
        "operator": "Apteek1"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.691636,
          58.385047
        ]
      },
      "id": "node/926290307"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1345571715",
        "amenity": "pharmacy",
        "email": "tasku@apotheka.ee",
        "level": "1",
        "name": "Tasku Apteek",
        "opening_hours": "Mo-Fr 09:00-21:00; Sa 10:00-21:00; Su 10:00-18:00",
        "operator": "Apotheka",
        "phone": "+372 7305526",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7311267,
          58.3781019
        ]
      },
      "id": "node/1345571715"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1345581114",
        "amenity": "pharmacy",
        "name": "Farmacia",
        "opening_hours": "Mo-Fr 09:00-11:00; Sa 10:00-18:00; Su 10:00-16:00",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.725059,
          58.378131
        ]
      },
      "id": "node/1345581114"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1446969434",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "1A",
        "addr:postcode": "51003",
        "addr:street": "Raekoja plats",
        "amenity": "pharmacy",
        "email": "raekoja@apotheka.ee",
        "name": "Raekoja Apteek",
        "opening_hours": "24/7",
        "operator": "Apotheka",
        "phone": "+372 7423560",
        "wheelchair": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7217363,
          58.380158
        ]
      },
      "id": "node/1446969434"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1512892045",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "10",
        "addr:postcode": "50104",
        "addr:street": "Rebase",
        "amenity": "pharmacy",
        "dispensing": "yes",
        "email": "citymapt@apotheka.ee",
        "name": "Rebase Rimi Apteek",
        "opening_hours": "Mo-Su 09:00-21:00",
        "operator": "Apotheka",
        "phone": "+372 7366524",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7388492,
          58.3684522
        ]
      },
      "id": "node/1512892045"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/1890582111",
        "amenity": "pharmacy",
        "email": "lkeskus@apotheka.ee",
        "healthcare": "pharmacy",
        "level": "0",
        "name": "Lõunakeskuse Apteek",
        "opening_hours": "Mo-Su 09:00-21:00",
        "operator": "Apotheka",
        "phone": "+372 7383056",
        "website": "https://www.apotheka.ee/"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.6777923,
          58.3583755
        ]
      },
      "id": "node/1890582111"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/2408614925",
        "amenity": "pharmacy",
        "name": "Benu Apteek",
        "opening_hours": "Mo-Fr 09:00-17:00",
        "wheelchair": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7359387,
          58.378329
        ]
      },
      "id": "node/2408614925"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3680866707",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "17",
        "addr:postcode": "50410",
        "addr:street": "Vaksali",
        "amenity": "pharmacy",
        "dispensing": "yes",
        "email": "vaksali@uusapteek.ee",
        "name": "Vaksali Apteek",
        "opening_hours": "Mo-Th 08:00-18:00; Fr 08:00-17:00",
        "operator": "Apotheka",
        "phone": "+372 7301275",
        "website": "http://www.uusapteek.ee/",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7096961,
          58.3726437
        ]
      },
      "id": "node/3680866707"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3681336526",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "11",
        "addr:postcode": "50408",
        "addr:street": "Ilmatsalu",
        "amenity": "pharmacy",
        "email": "A019@euroapteek.ee",
        "healthcare": "pharmacy",
        "name": "Ilmatsalu Apteek",
        "opening_hours": "Mo-Fr 10:00-19:00; Sa 10:00-17:00",
        "operator": "Euroapteek",
        "phone": "+372 7422176"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.6848075,
          58.37842
        ]
      },
      "id": "node/3681336526"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3681336527",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "2",
        "addr:postcode": "50406",
        "addr:street": "Lembitu",
        "amenity": "pharmacy",
        "email": "kastani@apotheka.ee",
        "name": "Kastani Apteek",
        "opening_hours": "Mo-Fr 09:00-20:00; Sa-Su 10:00-18:00",
        "operator": "Apotheka",
        "phone": "+372 7420891"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7097926,
          58.3698276
        ]
      },
      "id": "node/3681336527"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3681336529",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "55f",
        "addr:postcode": "50111",
        "addr:street": "Võru",
        "amenity": "pharmacy",
        "dispensing": "yes",
        "email": "sobra@apotheka.ee",
        "name": "Sõbra Maxima Apteek",
        "opening_hours": "Mo-Fr 09:00-20:00; Sa-Su 10:00-16:00",
        "operator": "Apotheka",
        "phone": "+372 7400119",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7197757,
          58.3646766
        ]
      },
      "id": "node/3681336529"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3684690477",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "1c",
        "addr:postcode": "50703",
        "addr:street": "Kalda tee",
        "amenity": "pharmacy",
        "email": "kaldatee@apotheka.ee",
        "healthcare": "pharmacy",
        "name": "Apotheka",
        "opening_hours": "Mo-Su 09:00-21:00",
        "phone": "+372 7481318"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7506658,
          58.3736133
        ]
      },
      "id": "node/3684690477"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3684690478",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "34",
        "addr:postcode": "50109",
        "addr:street": "Jalaka",
        "amenity": "pharmacy",
        "email": "karete@apotheka.ee",
        "name": "Karete Apteek",
        "opening_hours": "Mo-Fr 09:00-20:00; Sa-Su 10:00-16:00",
        "phone": "+372 7366890"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7237518,
          58.3500366
        ]
      },
      "id": "node/3684690478"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3684690479",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "173",
        "addr:postcode": "50705",
        "addr:street": "Jaama",
        "amenity": "pharmacy",
        "email": "kivilinn@apotheka.ee",
        "healthcare": "pharmacy",
        "name": "Kivilinna Konsumi Apteek",
        "opening_hours": "Mo-Fr 09:00-20:00; Sa-Su 10:00-16:00",
        "operator": "Apotheka",
        "phone": "+372 7482411"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.764787,
          58.3793479
        ]
      },
      "id": "node/3684690479"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3684690480",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "112",
        "addr:postcode": "50303",
        "addr:street": "Narva mnt",
        "amenity": "pharmacy",
        "email": "raadi@apotheka.ee",
        "name": "Raadi Apteek",
        "opening_hours": "Mo-Fr 09:00-20:00; Sa-Su 10:00-18:00",
        "operator": "Apotheka",
        "phone": "+372 7427469"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.729942,
          58.392106
        ]
      },
      "id": "node/3684690480"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3684690481",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "60",
        "addr:postcode": "50603",
        "addr:street": "Pikk",
        "amenity": "pharmacy",
        "email": "uusapteek@uusapteek.ee",
        "name": "Uus Apteek",
        "opening_hours": "Mo-Fr 07:30-19:00; Sa-Su 09:00-17:00",
        "operator": "Apotheka",
        "phone": "+372 7406396"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7387202,
          58.3803984
        ]
      },
      "id": "node/3684690481"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3686084774",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "8",
        "addr:postcode": "51007",
        "addr:street": "Gildi",
        "amenity": "pharmacy",
        "email": "gildiapt@apotheka.ee",
        "name": "Gildi Apteek",
        "opening_hours": "Mo-Fr 08:30-17:00",
        "operator": "Apotheka",
        "phone": "+372 7423380",
        "wheelchair": "no"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7218429,
          58.3817651
        ]
      },
      "id": "node/3686084774"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/3686084775",
        "amenity": "pharmacy",
        "email": "kaubamaja@apotheka.ee",
        "healthcare": "pharmacy",
        "level": "0",
        "name": "Kaubamaja Apteek",
        "opening_hours": "Mo-Sa 09:00-21:00; Su 10:00-19:00",
        "operator": "Apotheka",
        "phone": "+372 7314914",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7276136,
          58.3776679
        ]
      },
      "id": "node/3686084775"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4312326935",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "1a",
        "addr:postcode": "50406",
        "addr:street": "Ludvig Puusepa",
        "amenity": "pharmacy",
        "dispensing": "yes",
        "healthcare": "pharmacy",
        "name": "Tamme Apteek",
        "opening_hours": "Mo-Fr 08:00-18:00",
        "operator": "Apotheka",
        "phone": "+372 7319142",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.7044024,
          58.3674376
        ]
      },
      "id": "node/4312326935"
    },
    {
      "type": "Feature",
      "properties": {
        "@id": "node/4312326936",
        "addr:city": "Tartu",
        "addr:country": "EE",
        "addr:housenumber": "8",
        "addr:postcode": "51014",
        "addr:street": "Ludvig Puusepa",
        "amenity": "pharmacy",
        "dispensing": "yes",
        "email": "uusapteek@uusapteek.ee",
        "name": "Uus Apteek",
        "opening_hours": "Mo-Fr 08:00-18:00; Sa 09:00-15:00",
        "operator": "Apotheka",
        "phone": "+372 7318305",
        "website": "http://www.uusapteek.ee/",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          26.6997491,
          58.3694867
        ]
      },
      "id": "node/4312326936"
    }
  ]
}

var pharmacy_points = L.geoJson(pharmacy, {
	pointToLayer: function(feature, latlng) {
    return  L.marker(latlng, {icon: pharmacy_icon});
	},
	onEachFeature: function(feature, marker) {
			marker.bindPopup("<center><br><b>"+ "This is " + feature.properties.name + " and it is open at " + feature.properties.opening_hours + "<br>Their phone number is " + feature.properties.phone +
			"</b></center>" );
	}
});
pharmacy_points.addTo(map);

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function resetHighlight(e) {
	university_points.resetStyle(e.target);
}
function parksFeature(e) {
    var activefeature = e.target;  //access to activefeature that was hovered over through e.target
	
    activefeature.setStyle({
        weight: 2,
        color: 'pink',
        dashArray: '',
        fillOpacity: 0.7
    });
	
    if (!L.Browser.ie && !L.Browser.opera) {
        activefeature.bringToFront();
    }
}
var university_points = L.geoJson(university, {
    onEachFeature: function (feature, layer) {
       layer.on({click: zoomToFeature,
	    mouseover: parksFeature,
        mouseout: resetHighlight}); }
}).addTo(map);

//the variable features lists layers that I want to control with the layer control
var features = {
	"Pubs & bars": (bars_pubs),
	"University buildings": (university_points),
	"Pharmacies" : (pharmacy_points),
//	"My home" : (Kodu),
//	"Where I grew up" : (Ema),
}	

//the legend uses the layer control with entries for the base maps and two of the layers we added
//in case either base maps or features are not used in the layer control, the respective element in the properties is null

var legend = L.control.layers(baseMaps,features, {position:'bottomleft', collapsed:true}).addTo(map);