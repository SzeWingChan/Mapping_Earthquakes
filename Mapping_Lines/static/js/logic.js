// 13.4.3
//Add console.log to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Map a single line
// Coordinates for each point to be used in the line (LAX to SFO)
// let line = [
//     [33.9416, -118.4085], 
//     [37.6213, -122.3790]
//   ];

// Map multiple lines (Adding SLC and SEA)
// Coordinates for each point to be used in the polyline
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line red
// L.polyline(line, {
//     //color: "red"  //Single line
//     color: "yellow" //Multiple lines
//   }).addTo(map);

// Create multiple lines using the line coordinates and make the line yellow
L.polyline(line, {
    color: "yellow"
  }).addTo(map);

//Regular map
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

//Satellite-v9 map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);