mapboxgl.accessToken = keys.mapAPI;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    // style:'mapbox://styles/mapbox/navigation-night-v1',
    center: [-98.4916, 29.4252]
    // center: [-100.31663627832616, 25.687365864956593] //// 25.687365864956593, -100.31663627832616
});



