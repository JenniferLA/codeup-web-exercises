fetch(`https://api.openweathermap.org/data/2.5/weather?` +
    `lat=29.426825118534886&lon=-98.48948239256946` + `&appid=${OPEN_WEATHER_APPID}`)
    .then( data => data.json())
    .then( currentWeather => console.log(currentWeather));

const currentWeather = {
    "coord": {
        "lon": -98.4895,
        "lat": 29.4268
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 304.13,
        "feels_like": 304.65,
        "temp_min": 302.61,
        "temp_max": 305.38,
        "pressure": 1010,
        "humidity": 44
    },
    "visibility": 10000,
    "wind": {
        "speed": 7.2,
        "deg": 150
    },
    "clouds": {
        "all": 0
    },
    "dt": 1698011539,
    "sys": {
        "type": 1,
        "id": 5857,
        "country": "US",
        "sunrise": 1697978379,
        "sunset": 1698019016
    },
    "timezone": -18000,
    "id": 4726206,
    "name": "San Antonio",
    "cod": 200
}

const date = new Date(currentWeather.dt * 1000);
console.log(date.getFullYear(date);

