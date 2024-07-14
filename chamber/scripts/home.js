/*
test({"coord":{"lon":47.5361,"lat":-18.9137},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":285.13,"feels_like":284.99,"temp_min":285.13,"temp_max":285.13,"pressure":1026,"humidity":100,"sea_level":1026,"grnd_level":884},"visibility":10000,"wind":{"speed":2.57,"deg":160},"clouds":{"all":40},"dt":1720931885,"sys":{"type":1,"id":2136,"country":"MG","sunrise":1720927377,"sunset":1720967286},"timezone":10800,"id":1070940,"name":"Antananarivo","cod":200})
*/
const API_TOKEN = '8f2777c81989fefc599b589b71b3e109';
const LON = '47.5361';
const LAT = '-18.9137';

const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_TOKEN}`;


function currentWeather() {    
    fetch(weatherApiUrl)  
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log( error );
        });
  }

window.onload = function(){
    let currentWeatherBlock = document.getElementById('current-weather');
    
}