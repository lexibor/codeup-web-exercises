
let center = [-100.31663627832616, 25.687365864956593]


    mapboxgl.accessToken = keys.mapAPI;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 10,
        // style:'mapbox://styles/mapbox/navigation-night-v1',
        // center: [-98.4916, 29.4252]
        center: center //// 25.687365864956593, -100.31663627832616
    });



//////////////// WEATHER CARD INFORMATION //////////////////

    let html = '';


    $.get('https://api.openweathermap.org/data/2.5/forecast',
        {
            lon: map.getBounds()._ne.lng,
            lat: map.getBounds()._ne.lat,
            appid: keys.openWeatherAPI,
            units: 'metric'

        }).done(function (data)
            {

                for (let i = 0; i < data.list.length; i += 8)
                {
                    html += `<div class="card">
                              <div class="card-header">
                                <span id="date">${data.list[i].dt_txt.slice(0, 10)}</span>
                              </div>
                              <ul class="list-group list-group-flush">
                              <li class="list-group-item" id="temps"><span id="min-temp">${data.list[i].main.temp_min}°C</span> / <span id="max-temp">${data.list[i].main.temp_max}°C</span></li>
                                <li class="list-group-item">Description: <span id="des">${data.list[i].weather[0].description}</span>
                                  <br><br>
                                  Humidity: <span id="humid-info">${data.list[i].main.humidity}gm³</span>
                                </li>
                                <li class="list-group-item">Wind: <span id="wind-info">${data.list[i].wind.speed}m/s</span></li>
                                <li class="list-group-item">Pressure: <span id="press-info">${data.list[i].main.pressure}psi</span></li>
                              </ul>
                            </div>`
                }

            $('#cards').html(html);


            })


