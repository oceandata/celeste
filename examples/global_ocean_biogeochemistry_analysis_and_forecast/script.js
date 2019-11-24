// We’ll add a tile layer to add to our map, in this case it’s a OSM tile layer.
// Creating a tile layer usually involves setting the URL template for the tile images

const osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const osm = L.tileLayer(osmUrl, {
  maxZoom: 18,
  attribution: osmAttrib
});

const wmsLayer = L.tileLayer.wms(
  'http://nrt.cmems-du.eu/thredds/wms/global-analysis-forecast-bio-001-028-daily',
  {
    layers: 'chl',
    format: 'image/png',
    transparent: true,
  }
);

// initialize the map on the "map" div with a given center and zoom
var map = L.map('map').setView([59.423885, 24.700530], 5)
  .addLayer(osm)
  .addLayer(wmsLayer);
