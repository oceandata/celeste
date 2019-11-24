const times = [
  '2019-07-25T12:30:00.000Z',
  '2019-07-26T12:30:00.000Z',
  '2019-07-27T12:30:00.000Z',
  '2019-07-28T12:30:00.000Z',
  '2019-07-29T12:30:00.000Z',
  '2019-07-30T12:30:00.000Z',
  '2019-07-31T12:30:00.000Z',
  '2019-08-01T12:30:00.000Z',
  '2019-08-02T12:30:00.000Z',
  '2019-08-03T12:30:00.000Z',
];
let startDateIndex = 0;
const frameRate = 0.7; // frames per second
let animationId = null;

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
  params: {'LAYERS': 'chl', 'TIME': '2019-08-01T12:30:00.000Z'}
});

const wmsLayer = new ol.layer.Tile({
  source: wmsSource
});

map.addLayer(wmsLayer);

const updateInfo = () => {
  const el = document.getElementById('info');
  el.innerHTML = times[startDateIndex];
}

const setTime = () => {
	if (startDateIndex >= times.length) {
  	startDateIndex = 0;
  }
  wmsLayer.getSource().updateParams({'TIME': times[startDateIndex]});
  updateInfo();
  startDateIndex++;
}

setTime();

const stop = () => {
  if (animationId !== null) {
    window.clearInterval(animationId);
    animationId = null;
  }
};

const play = () => {
  stop();
  animationId = window.setInterval(setTime, 1000 / frameRate);
};

const startButton = document.getElementById('play');
startButton.addEventListener('click', play, false);

const stopButton = document.getElementById('pause');
stopButton.addEventListener('click', stop, false);

updateInfo();
