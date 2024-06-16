const blockYearEdition = document.querySelector('#year-edition');
const blockLastModified = document.querySelector('#last-modified');

const newDate = new Date();
let fullYear = newDate.getFullYear();
let lastModified = document.lastModified;

blockYearEdition.innerHTML = fullYear;
blockLastModified.innerHTML = lastModified;

const displayList = (data, block) => {
    for (var i = 0; i<data.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = `<strong>${data[i][0]}:</strong> <span>${data[i][1]}</span>`;    
        if(li) {
            block.appendChild(li);
        }
    }
}

const calculateWindChill = () => {
    return '';
}

// data
let dataSquareArea = ['Area', '587,000 sq km'];
let dataPopulation = ['Population','30,000,000'];
let dataCapitale = ['Capitale','Antananarivo'];
let dataLanguage = ['Languages','Malagasy, French'];
let dataCurrency = ['Currency','Malagasy Ariary'];
let dataTimezone = ['Time Zone','UTC+3'];
let dataCallingCode = ['Calling Code','+261'];
let dataInternetTld = ['Internet TLD','.mg'];
let data = [dataSquareArea, dataPopulation, dataCapitale, dataLanguage, dataCurrency, dataTimezone,
            dataCallingCode, dataInternetTld];

let blockDataList = document.querySelector('#data-list');
displayList(data, blockDataList);   

//weather data
let weatherTemperature = [ 'Temperature', '10°C'];
let weatherConditions = [ 'Conditions','Partly Cloudly' ];
let weatherWind = [ 'Wind','5km/h' ];
let weatherWindChill = [ 'Wind Chill','9.8°C' ];
let weatherData = [weatherTemperature, weatherConditions, weatherWind, weatherWindChill];

let blockWeatherList = document.getElementById('weather-list');
displayList(weatherData, blockWeatherList);

