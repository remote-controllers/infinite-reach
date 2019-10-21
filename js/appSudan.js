var date = new Date();
var footer = document.getElementById('footer');
var year = date.getFullYear();

footer.innerHTML += year;

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: 6.576991, lng: 30.500307},
    mapTypeId: 'satellite',
  });

  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = './js/data.js';
  document.getElementsByTagName('head')[0].appendChild(script);

  map.data.setStyle(function(feature) {
    var magnitude = feature.getProperty('mag');
    return {
      icon: getCircle(magnitude)
    };
  });
}

function getCircle(magnitude) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .2,
    scale: Math.pow(2, magnitude) / 2,
    strokeColor: 'white',
    strokeWeight: .5
  };
}

function eqfeed_callback(results) {
  map.data.addGeoJson(results);
}
