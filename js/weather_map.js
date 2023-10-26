"use strict";

//weather fetch conversion from Kelvin to Farenheit
// fetch(`https://api.openweathermap.org/data/2.5/weather?` +
//     `lat=29.426825118534886&lon=-98.48948239256946` + `&appid=${OPEN_WEATHER_APPID}` + `&units=imperial`)
//     .then( data => data.json())
//     .then( currentWeather => console.log(currentWeather));
// const weatherOutput = document.querySelector("#weather");
// const dateOutput = document.querySelector("#date-1");
// const dateOutput = document.querySelector("#date-2");
// const dateOutput = document.querySelector("#date-3");


getForecastAndCreateCards(29.426825118534886, -98.48948239256946);

function getForecastAndCreateCards (lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=${lat}&lon=${lng}` +
        `&appid=${OPEN_WEATHER_APPID}` +
        `&units=imperial`)
        .then(data => data.json())
        .then(forecast => {
            createFiveDayForecasts(forecast.list);
        })
}
function createFiveDayForecasts(weather) {
    for (let i = 0; i < weather.length; i+=8) {
        createSingleDayForecast(weather[i], i/8+1);
    }
    console.log(weather);
}
function createSingleDayForecast(weather, index) {
    const dateOutput = document.querySelector("#date-" + index);
    const minMaxOutput = document.querySelector("#max-min-" + index);
    const descOutput = document.querySelector("#desc-" + index);
    const humOutput = document.querySelector("#hum-" + index);
    const windOutput = document.querySelector("#wind-" + index);
    const pressureOutput = document.querySelector("#pressure-" + index);


    const firstDate = dateFromTimeStamp(weather.dt);
    const minTemp = weather.main.temp_min;
    const maxTemp = weather.main.temp_max;
    const firstDesc = `${weather.weather[0].description}`;
    const firstHum = `${weather.main.humidity}`;
    const firstWind = `${weather.wind.speed}`;
    const firstPressure = `${weather.main.pressure}`;

    const time = document.createElement("p");
    const temp = document.createElement("h5");
    const desc = document.createElement("p");
    const hum = document.createElement("p");
    const wind = document.createElement("p");
    const press = document.createElement("p");

    time.innerText = dateFromTimeStamp(weather.dt);
    time.classList.add("fs-5", "fw-bold", "text-center");
    temp.innerText = minTemp + "\u2109" + " / " + maxTemp + "\u2109";
    desc.innerText = firstDesc;
    hum.innerText = firstHum;
    wind.innerText = firstWind;
    press.innerText = firstPressure;


    dateOutput.appendChild(time);
    minMaxOutput.appendChild(temp);
    descOutput.appendChild(desc);
    humOutput.appendChild(hum);
    windOutput.appendChild(wind);
    pressureOutput.appendChild(press);
};




