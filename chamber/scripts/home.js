/*
test({"coord":{"lon":47.5361,"lat":-18.9137},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":285.13,"feels_like":284.99,"temp_min":285.13,"temp_max":285.13,"pressure":1026,"humidity":100,"sea_level":1026,"grnd_level":884},"visibility":10000,"wind":{"speed":2.57,"deg":160},"clouds":{"all":40},"dt":1720931885,"sys":{"type":1,"id":2136,"country":"MG","sunrise":1720927377,"sunset":1720967286},"timezone":10800,"id":1070940,"name":"Antananarivo","cod":200})
*/

/*
https://api.openweathermap.org/data/3.0/onecall?lat=-18.9137&lon=47.5361&exclude={part}&appid=8f2777c81989fefc599b589b71b3e109
https://api.openweathermap.org/data/2.5/forecast?lat=18.9137&lon=47.5361&appid=8f2777c81989fefc599b589b71b3e109
*/
const API_TOKEN = '8f2777c81989fefc599b589b71b3e109';
const LON = '47.5361';
const LAT = '-18.9137';

const currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_TOKEN}`;
const forecastWeatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_TOKEN}`;


function currentWeather() {    
    let currentWeatherBlock = document.getElementById('current-weather');
    let currentWeatherData = '';
    fetch(currentWeatherApiUrl)  
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            // console.log( data );
            currentWeatherData += '<ul>';
            currentWeatherData += `<li>${data.main.temp}°F</li>`;
            currentWeatherData += `<li>${data.weather[0].main}</li>`;  
            currentWeatherData += `<li>High: ${data.main.temp_max}</li>`;  
            currentWeatherData += `<li>Low: ${data.main.temp_min}</li>`;  
            currentWeatherData += '</ul>';

            currentWeatherBlock.innerHTML = currentWeatherData ;

        })
        .catch(function(error) {
            console.log( error );
        });
  }

function forecastWeather() {

    let wfBlock = document.getElementById('weather-forecast');
    let wfHtmlData = '<ul>';
    let i = 0;
    let j = 0;
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    fetch(forecastWeatherApiUrl)  
        .then(function(resp) { return resp.json() }) // Convert data to json
        .then(function(data) {
            console.log( data );
            wfHtmlData += `<ul>`;
            
            data.list.forEach( (item) => {
                
                if(j < 3) {
                    let date = new Date( item.dt );
                    let dayIndex = date.getDay();

                    j++;
                    console.log( item )
                    wfHtmlData += `<li>${weekday[dayIndex]}: ${item.main.temp}°F</li>`;
                }
            });
            wfHtmlData += `</ul>`;



            // currentWeatherData += '<ul>';
            // currentWeatherData += `<li>${data.main.temp}°F</li>`;
            // currentWeatherData += `<li>${data.weather[0].main}</li>`;  
            // currentWeatherData += `<li>High: ${data.main.temp_max}</li>`;  
            // currentWeatherData += `<li>Low: ${data.main.temp_min}</li>`;  
            // currentWeatherData += '</ul>';

            wfBlock.innerHTML = wfHtmlData ;

        })
        .catch(function(error) {
            console.log( error );
        });

   


    wfBlock.innerHTML = wfHtmlData;

}

async function fetchMemberData() {

    const dataUrl = 'http://127.0.0.1:5500/chamber/data/members.json';

    try {

        const response = await fetch(dataUrl);
        if(!response.ok){
            throw new Exception( `Response status: ${response.status}` );
        }

        const jsonData = await response.json();
        const directory = document.querySelector('.directory');
        let htmlMemberItem = '';                
        
        jsonData.forEach( (member)=>{
            htmlMemberItem+='<div class="business-item">';
            htmlMemberItem+=`<img src="${member.photourl}" alt="${member.firstname} ${member.lastname}" />`;
            htmlMemberItem+=`<h4>${member.firstname} ${member.lastname}</h4>`;
			htmlMemberItem+=`<p>${member.address.city}</p>`;
			//htmlMemberItem+=`<a href="https://${member.website}" target="_blank" class="more">Details</a>`;
            htmlMemberItem+='</div>';            
            directory.innerHTML = htmlMemberItem;                        
        });

    }
    catch( error ) {

    }
}


window.onload = function(){
    
    currentWeather();    
    forecastWeather();
    fetchMemberData();
}

