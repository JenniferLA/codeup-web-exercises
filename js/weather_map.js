"use strict";
// fetch(`https://api.openweathermap.org/data/2.5/weather?` +
//     `lat=29.426825118534886&lon=-98.48948239256946` + `&appid=${OPEN_WEATHER_APPID}`)
//     .then( data => data.json())
//     .then( currentWeather => console.log(currentWeather));

//weather fetch conversion from Kelvin to Farenheit
fetch(`https://api.openweathermap.org/data/2.5/weather?` +
    `lat=29.426825118534886&lon=-98.48948239256946` + `&appid=${OPEN_WEATHER_APPID}` + `&units=imperial`)
    .then( data => data.json())
    .then( currentWeather => console.log(currentWeather));
const weatherOutput = document.querySelector("#weather");
// const dateOutput = document.querySelector("#date-1");
// const dateOutput = document.querySelector("#date-2");
// const dateOutput = document.querySelector("#date-3");



//forecast fetch
// fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
//     `lat=29.426825118534886&lon=-98.48948239256946` +
//     `&appid=${OPEN_WEATHER_APPID}` +
//     `&units=imperial`)
//     .then( data => data.json())
//     .then( forecast => {
//         console.log(forecast);
//         forecast.list.forEach(weather => {
//             const time = document.createElement("p");
//             const temp = document.createElement("p");
//             time.innerText = dateFromTimeStamp(weather.dt);
//             temp.innerText = weather.main.temp;
//             weatherOutput.appendChild(time);
//             weatherOutput.appendChild(temp);
//         })
//     });

// fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
//     `lat=29.426825118534886&lon=-98.48948239256946` +
//     `&appid=${OPEN_WEATHER_APPID}` +
//     `&units=imperial`)
//     .then( data => data.json())
//     .then( forecast => {
//         forecast.list.forEach(weather => {
//             const time = document.createElement("p");
//             time.innerText = dateFromTimeStamp(weather.dt);
//             time.classList.add("fs-2", "fw-bold", "text-center");
//             dateOutput.appendChild(time);
//         })
//         // console.log(dateOutput);
//     });

//card 1:
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_APPID}` +
    `&units=imperial`)
    .then(data => data.json())
    .then(forecast => {
        const dateOutput = document.querySelector("#date-1")
        const firstDate = dateFromTimeStamp(forecast.list[0].dt);
        // const firstMax = dateFromTimeStamp(forecast.list)
        const time = document.createElement("p");
        time.innerText = firstDate;
        time.classList.add("fs-2", "fw-bold", "text-center");
        dateOutput.appendChild(time);
    });

//card 2:
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_APPID}` +
    `&units=imperial`)
    .then(data => data.json())
    .then(forecast => {
        const dateOutputTwo = document.querySelector("#date-2")
        const secondDate = dateFromTimeStamp(forecast.list[2].dt);
        const time = document.createElement("p");
        time.innerText = secondDate;
        time.classList.add("fs-2", "fw-bold", "text-center");
        dateOutputTwo.appendChild(time);
    });

//card 3:
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_APPID}` +
    `&units=imperial`)
    .then(data => data.json())
    .then(forecast => {
        const dateOutputThree = document.querySelector("#date-3")
        const thirdDate = dateFromTimeStamp(forecast.list[10].dt);
        const time = document.createElement("p");
        time.innerText = thirdDate;
        time.classList.add("fs-2", "fw-bold", "text-center");
        dateOutputThree.appendChild(time);
    });

//card 4:
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_APPID}` +
    `&units=imperial`)
    .then(data => data.json())
    .then(forecast => {
        const dateOutputFour = document.querySelector("#date-4")
        const fourthDate = dateFromTimeStamp(forecast.list[18].dt);
        const time = document.createElement("p");
        time.innerText = fourthDate;
        time.classList.add("fs-2", "fw-bold", "text-center");
        dateOutputFour.appendChild(time);
    });

//card 5:
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_APPID}` +
    `&units=imperial`)
    .then(data => data.json())
    .then(forecast => {
        const dateOutputFive = document.querySelector("#date-5")
        const fifthDate = dateFromTimeStamp(forecast.list[26].dt);
        const time = document.createElement("p");
        time.innerText = fifthDate;
        time.classList.add("fs-2", "fw-bold", "text-center");
        dateOutputFive.appendChild(time);
    });

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

// const date = new Date(currentWeather.dt * 1000);
// console.log(date.getFullYear(date);
//function dateFromTimeStamp(timeStamp){
//     let dateTime = new Date(timeStamp * 1000);

