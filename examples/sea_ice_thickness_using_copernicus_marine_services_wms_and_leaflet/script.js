// We’ll add a tile layer to add to our map, in this case it’s a OSM tile layer.
// Creating a tile layer usually involves setting the URL template for the tile images

const osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const osm = L.tileLayer(osmUrl, {
  maxZoom: 18,
  attribution: osmAttrib
});

var wmsLayer = L.tileLayer.wms(
  'http://nrt.cmems-du.eu/thredds/wms/dataset-bal-analysis-forecast-phy-dailymeans?request=GetMetadata&item=timesteps&layerName=sithick&day=2019-01-30',
  {
    layers: 'sithick',
    format: 'image/png',
    transparent: true,
  }
);

var map = L.map('map').setView([59.423885, 24.700530], 7)
  .addLayer(osm)
  .addLayer(wmsLayer);
