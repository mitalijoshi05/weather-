const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click',() => {
    const APIKey = '8959114527b34ef9089501ca2ad2f396';
    const city = document.querySelector('.search-box input').values;

    if(city=='')
        return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}').then(response => response.json()).then(json=> {
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span ');
        const wind = document.querySelector('.weather-details .wind span ');

        switch(json.weather[0].main){
            case 'sun':
                image.src='images/sun.png';
                break;

             case 'rain':
                 image.src='images/rain.png';
                break;
            case 'thunder':
                image.src='images/thunder.png';
                 break;
            case 'clouds':
                image.src='images/clouds.png';
                break;

            default:
              image.src='images/sun.png';

        }

    });
 });
