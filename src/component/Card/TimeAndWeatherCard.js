import React, {useState, useEffect } from "react";
import axios from "axios";

const TimeAndWeatherCard = () => {
    const [time, setTime] = useState(new Date());
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        //Fetch weather data from OpenWeatherMap_API
        const apiKey = "YOUR_OPENWEATHER_API_KEY";
        const city = "YOUR_CITY_NAME";
        const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then((response) => {
            setWeather(response.data);
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });

        //Update the time every second
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="card">
            <h1>Time and Weather</h1>
            <div className="time">
                <p>Current Time:</p>
                <p>{time.toLocaleTimeString()}</p>
            </div>
            {weather && (
                <div className="weather">
                    <p>Weather in {weather.name}:</p>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default TimeAndWeatherCard;