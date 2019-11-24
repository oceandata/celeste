// We’ll add a tile layer to add to our map, in this case it’s a OSM tile layer.
// Creating a tile layer usually involves setting the URL template for the tile images
var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  osm = L.tileLayer(osmUrl, {
    maxZoom: 18,
    attribution: osmAttrib
  });

//var stamen = new L.StamenTileLayer("toner-lite");

var wmsLayer = L.tileLayer.wms('http://nrt.cmems-du.eu/thredds/wms/global-analysis-forecast-bio-001-028-daily', {
  layers: 'chl',
  format: 'image/png',
  transparent: true,
});

// initialize the map on the "map" div with a given center and zoom
var map = L.map('map').setView([59.423885, 24.700530], 5)
  //.addLayer(stamen)
  .addLayer(osm)
	 	  .addLayer(wmsLayer);
