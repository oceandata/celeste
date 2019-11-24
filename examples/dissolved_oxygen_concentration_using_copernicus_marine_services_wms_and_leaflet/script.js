const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([24.700530, 59.423885]),
    zoom: 4
  })
});

const wmsSource = new ol.source.TileWMS({
  url: 'http://nrt.cmems-du.eu/thredds/wms/dataset-bal-analysis-forecast-bio-dailymeans',
  params: {'LAYERS': 'o2', 'TIME': '2019-09-23T12:30:00.000Z'}
});

const wmsLayer = new ol.layer.Tile({
  source: wmsSource
});

map.addLayer(wmsLayer);
