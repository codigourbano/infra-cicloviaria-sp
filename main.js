var map = L.map('map').setView([-23.5481,-46.6358], 12);

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'examples.map-20v6611k'
}).addTo(map);

// Icons
var shop = L.MakiMarkers.icon({icon: "bicycle", color: "#C9A6DE", size: "m"});
var parking = L.MakiMarkers.icon({icon: "bicycle", color: "#55ED47", size: "m"});
var fuel = L.MakiMarkers.icon({icon: "bicycle", color: "#4EB8ED", size: "s"});
var rental = L.MakiMarkers.icon({icon: "bicycle", color: "#FA9B6B", size: "s"});

var JSON;

$.getJSON('infra-cicloviaria-sp.geojson', function(featureCollection){
  L.geoJson(featureCollection,{
    pointToLayer: function(feature, latlng) {
      var tags = feature.properties;
      if ((tags['amenity']) && (tags['amenity']=='fuel')) {
        return L.marker(latlng, {icon: fuel}).addTo(map);
      } else if ((tags['amenity']) && (tags['amenity']=='bicycle_parking')) {
        return L.marker(latlng, {icon: parking}).addTo(map);
      } else if ((tags['amenity']) && (tags['amenity']=='bicycle_rental')) {
        return L.marker(latlng, {icon: rental}).addTo(map);
      } else if ((tags['shop']) && (tags['shop']=='bicycle')) {
        return L.marker(latlng, {icon: shop}).addTo(map);
      }
    }
  }).addTo(map);
});
