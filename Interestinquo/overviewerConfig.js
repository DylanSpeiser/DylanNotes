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
        "Interestinquo - overworld",
        "Interestinquo - nether"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1607760244",
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
            "name": "Overworld Northeast",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "overworldNE",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Interestinquo - overworld",
            "last_rendertime": 1607751049,
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
            "north_direction": 1
        },
        {
            "name": "Overworld Northwest",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "overworldNW",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Interestinquo - overworld",
            "last_rendertime": 1607751049,
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
            "last_rendertime": 1607751049,
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
        },
        {
            "name": "Overworld Southwest",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "overworldSW",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Interestinquo - overworld",
            "last_rendertime": 1607751049,
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
            "north_direction": 3
        },
        {
            "name": "Nether (Northeast)",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "NetherNE",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Interestinquo - nether",
            "last_rendertime": 1607748857,
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
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "Caves",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "caves",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Interestinquo - overworld",
            "last_rendertime": 1607751049,
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
            "north_direction": 1
        },
        {
            "name": "Biomes",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "Biomes",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Interestinquo - overworld",
            "last_rendertime": 1607751049,
            "imgextension": "png",
            "isOverlay": [
                "overworldNE"
            ],
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                256,
                96,
                -144
            ],
            "minZoom": 0,
            "tilesets": [
                "overworldNE"
            ],
            "spawn": [
                256,
                96,
                -144
            ],
            "north_direction": 1
        }
    ]
};
