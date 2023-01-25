(function()
{
    "use strict";


mapboxgl.accessToken = keys.mapAPI;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v11',
        zoom: 10,
        center: [-100.31337877173254, 25.678227189708988] //// 25.678227189708988, -100.31337877173254
    });


    //////////////// DRAGGABLE MARKER //////////////////////
let marker = new mapboxgl.Marker();
    function placeMarker(ln, lt, map)
    {
        reverseGeocode({lat: lt, lng: ln}, keys.mapAPI).then(function(results)
        {
            geocode(results, keys.mapAPI).then(function(result)
            {
                    marker.setLngLat([result[0], result[1]]);
                    marker.addTo(map);
                    marker.setDraggable(true);

                console.log(marker.getLngLat());
            })
        });
    }

marker.on('dragend', onDragEnd);

    let lngLat;
    function onDragEnd() {
        lngLat = marker.getLngLat();
        console.log(`Longitude: ${lngLat.lng}, Latitude: ${lngLat.lat}`);
        getWeather(lngLat.lng, lngLat.lat);
        map.flyTo({
            zoom: 11,
            center: [lngLat.lng, lngLat.lat],
            essential: true,
        })

    }


//////////////// WEATHER CARD INFORMATION //////////////////


    function getWeather(lon, lat)
    {
        let html = '';
        let cityInfo = '';
        $.get('https://api.openweathermap.org/data/2.5/forecast',
            {
                lon: lon,
                lat: lat,
                appid: keys.openWeatherAPI,
                units: 'metric'

            }).done(function (data)
                {

                    placeMarker(lon, lat, map);


                        console.log(data.city.name);

                            cityInfo += `${data.city.name}`;



                    ////////// HTML POPULATION ///////////////
                    for (let i = 0; i < data.list.length; i += 8)
                    {
                        html += `<div class="card text-bg-dark border border-subtle">
                                      <div class="card-header">
                                        <span id="date">${data.list[i].dt_txt.slice(0, 10)}</span>
                                      </div>
                                      
                                      <ul class="list-group list-group-flush">
                                      
                                          <li class="list-group-item text-bg-secondary" id="temp-weather">
                                              <div>
                                                  <span id="min-temp">${data.list[i].main.temp_min}°C</span> / <span id="max-temp">${data.list[i].main.temp_max}°C</span>
                                              </div>
                                          
                                              <br>
                                              
                                              <img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" id="weather-icon">
                                          </li>
                                          
                                            <li class="list-group-item text-bg-dark">Description: <span id="des">${data.list[i].weather[0].description}</span>
                                              <br><br>
                                              Humidity: <span id="humid-info">${data.list[i].main.humidity}gm³</span>
                                            </li>
                                            
                                            <li class="list-group-item text-bg-dark">Wind: <span id="wind-info">${data.list[i].wind.speed}m/s</span></li>
                                            
                                            <li class="list-group-item text-bg-dark">Pressure: <span id="press-info">${data.list[i].main.pressure}psi</span></li> 
                                      </ul>
                                </div>`
                    }

                    $('#cards').html(html);
                    $('#city-info').html(cityInfo);
                })
    }


    getWeather(-100.31337877173254, 25.678227189708988);
    updateWeather();

    //////////////// SEARCH BAR FUNCTIONALITY ///////////////////
    function updateWeather()
    {
        let text = $('#city-info');
        $('#searchBtn').on('click', function(event)
        {
            event.preventDefault();

            geocode($('#searchInpt').val(), keys.mapAPI).then(function(result)
            {
                marker.remove();
                getWeather(result[0], result[1]);

                map.flyTo({
                    center: result,
                    essential: true});

            });

        });
    }

})();



