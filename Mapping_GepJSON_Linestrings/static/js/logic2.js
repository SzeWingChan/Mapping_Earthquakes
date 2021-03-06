// 13.5.4 Add Multiple Maps
// Add console.log to check to see if our code is working
console.log("working");

// We create the title layer that will be the backgroud of our map
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v4/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-night-v4/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
  DarkNavigation: dark,
  LightNavigation: light  
};

// Create the map object with center, zoom level and default layer
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [dark]
})

// Pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// Access the airport GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/SzeWingChan/Mapping_Earthquakes/main/torontoRoutes.json";

// Skil Drill
// Grabbing our GeoJSON data
// d3.json(torontoData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data, {
//   color: "lightyellow",
//   weight: 2,
//   onEachFeature: function(feature, layer) {
//     layer.bindPopup("<h2>" + "Airline: " + feature.properties.airline + "</h2> <hr> <h3> "+ "Destination: " + feature.properties.dst + "</h3>");
//    }
// }).addTo(map);
// });

//  Create an object with the style parameters for the lines and assign it to a variable, myStyle, for easier reading
// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

// Grabbing our GeoJSON data
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  style: myStyle,
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h2>" + "Airline: " + feature.properties.airline + "</h2> <hr> <h3> "+ "Destination: " + feature.properties.dst + "</h3>");
   }
}).addTo(map);
});