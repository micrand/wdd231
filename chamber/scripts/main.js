const d = new Date();
let currentYear = d.getFullYear();
let outputFullYear = document.querySelector('#currentyear');
let outputLastModified = document.querySelector('#lastmodified');
let lastModifiedDate = document.lastModified;

outputFullYear.innerHTML = `${currentYear}`;
outputLastModified.innerHTML = `${lastModifiedDate}`;

let hamburgerMenu = document.getElementById('hamburger-menu');
hamburgerMenu.addEventListener( 'click', () => {
    let navigationMenu = document.querySelector('.navigation');
    if(navigationMenu.style.display == 'block')
    {
        navigationMenu.style.display = 'none';
    } else {
        navigationMenu.style.display = 'block';
    }
    
});

/* */
const API_TOKEN = '8f2777c81989fefc599b589b71b3e109';
const LON = '47.5361';
const LAT = '-18.9137';

const currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_TOKEN}`;
const forecastWeatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_TOKEN}`;


function currentDiscoveryWeather() {    
    let currentWeatherBlock = document.getElementById('current-weather');
    let currentWeatherData = '';
    fetch(currentWeatherApiUrl)  
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            //console.log( data );    
            let iconCode = data.weather[0].icon;
            var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
            let iconMainText = data.weather[0].main;
            let iconDescText = data.weather[0].main;
            currentWeatherData += '<ul class="weather-info">';
            currentWeatherData += `<li class="weather-display"><img src="${iconUrl}" alt="${iconMainText}"  /> <span class="weather-main-temp">${data.main.temp}°F</span></li>`;
            currentWeatherData += `<li class="weather-misc"><strong>${iconDescText}</strong>`;  
            currentWeatherData += `<br>Location: ${data.name}`;  
            currentWeatherData += `<br>Low: ${data.main.temp_min} | Max: ${data.main.temp_max}</li>`;  
            currentWeatherData += '</ul>';

            currentWeatherBlock.innerHTML = currentWeatherData ;

        })
        .catch(function(error) {
            // console.log( error );
        });
  }


window.onload = function() {
    currentDiscoveryWeather();
    let queryQuoteWrapper = document.querySelector('.quote-wrapper');
    let TheySaidSoHTML = `<div class="tso_default_style">
                                <script>TheySaidSo.render({ quote_id : 'VsevE5h3LUUiZedYPKPwlweF'})</script>
                            </div>`;
    //queryQuoteWrapper.innerHTML = TheySaidSoHTML;

    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: 'dayGridMonth'
        });
        calendar.render();
      });      
}

