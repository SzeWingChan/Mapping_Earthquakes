// 13.2.4
//Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);
let map = L.map('mapid').setView([34.0522, -118.2437], 14); //13.4.1 Zoom level updated to 14

// 13. 4 .1 Add a marker to the map
//  Add a marker to the map for Los Angeles, California
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle to the map for Los Angeles, California
//L.circle([34.0522, -118.2437], {
    //radius: 100 //a circle with a 100-meter radius over Central Los Angeles 
 //}).addTo(map);

// Skill Drill
// Add a light-yellow circle with black lines indicating a 300-meter radius of Central Los Angeles on a dark map
L.circleMarker([34.0522, -118.2437],{
    radius: 300,
    color: "black",
    fillColor: "#ffffa1"
}).addTo(map);

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

//13.4.1 Skill Drill (dark map)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);