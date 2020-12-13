var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Interestinquo - overworld"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1607880853",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Overworld Northwest",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "overworldNW",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Interestinquo - overworld",
            "last_rendertime": 1607845365,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                256,
                96,
                -144
            ],
            "minZoom": 0,
            "spawn": [
                256,
                96,
                -144
            ],
            "north_direction": 0
        },
        {
            "name": "Overworld Southeast",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "overworldSE",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Interestinquo - overworld",
            "last_rendertime": 1607845365,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                256,
                96,
                -144
            ],
            "minZoom": 0,
            "spawn": [
                256,
                96,
                -144
            ],
            "north_direction": 2
        }
    ]
};
