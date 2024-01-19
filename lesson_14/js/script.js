
document.addEventListener('DOMContentLoaded', () => {
    const fetchWeatherButton = document.getElementById('fetch-weather');
    const cityInput = document.getElementById('city-input');
    const weatherResultDiv = document.getElementById('weather-result');
    const forecastContainer = document.getElementById('forecast-container');
    const apiKey = 'ecd1f27c9530a0558c02c84fb579ced9'; //TODO Not Secure

    async function fetchCurrentWeather(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const weatherData = await response.json();
            weatherResultDiv.innerHTML = `Temperature in ${city}: ${weatherData.main.temp}°C<br>Humidity: ${weatherData.main.humidity}%`;
        } catch (error) {
            weatherResultDiv.innerHTML = error.message;
        }
    }

    async function fetchWeatherForecast(city) {
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const forecastData = await response.json();
            displayWeatherForecast(forecastData);
        } catch (error) {
            console.error(error.message);
        }
    }

    function displayWeatherForecast(data) {
        forecastContainer.innerHTML = '<h3>Weekly Forecast</h3>';
        data.list.forEach((forecast, index) => {
            if (index % 8 === 0) {
                const iconUrl = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
                forecastContainer.innerHTML += `
                    <div class="forecast-item">
                        <img src="${iconUrl}" alt="${forecast.weather[0].description}">
                        <p>${new Date(forecast.dt_txt).toLocaleDateString()}: ${forecast.main.temp}°C</p>
                    </div>
                `;
            }
        });
    }

    fetchWeatherButton.addEventListener('click', async () => {
        const city = cityInput.value;
        await fetchCurrentWeather(city);
        await fetchWeatherForecast(city);
    });





    async function getCityName(lat, lon) {
        const geocodeApiKey = 'pk.485391d81d14c872c4f01ce22b0d1c52'; //TODO Not Secure
        const url = `https://us1.locationiq.com/v1/reverse.php?key=${geocodeApiKey}&lat=${lat}&lon=${lon}&format=json`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            return data.address.city || data.address.town || data.address.village; 
        } catch (error) {
            console.error('Ошибка при получении названия города:', error);
            return null;
        }
    }


    document.getElementById('fetch-weather-location').addEventListener('click', async () => {
        if (!navigator.geolocation) {
            weatherResultDiv.innerHTML = 'Geolocation is not supported by your browser';
            return;
        }

        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const cityName = await getCityName(latitude, longitude);
            if (cityName) {
                cityInput.value = cityName;
                await fetchCurrentWeather(cityName);
                await fetchWeatherForecast(cityName);
            } else {
                weatherResultDiv.innerHTML = 'Unable to retrieve city name from location';
            }
        }, () => {
            weatherResultDiv.innerHTML = 'Unable to retrieve your location';
        });
    });



});
 