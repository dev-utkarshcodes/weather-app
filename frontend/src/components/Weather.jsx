// Weather.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import cloud_icon from '../assets/cloud.png';
import clear_icon from '../assets/clear.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

import Thunderstorm from '../assets/Assets/Thunderstorm.gif';
import Rain from '../assets/Assets/Rain.gif';
import SnowDay from '../assets/Assets/Snow.gif';
import ClearDay from '../assets/Assets/ClearDay.gif';
import ClearNight from '../assets/Assets/ClearNight.gif';
import CloudsDay from '../assets/Assets/CloudsDay.gif';
import CloudsNight from '../assets/Assets/CloudsNight.gif';
import Haze from '../assets/Assets/Haze.gif';
import video from '../assets/Assets/video1.mp4';  // Your default fallback video

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const formatTime = (date) => {
    let h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    const pad = (n) => (n < 10 ? '0' + n : n);
    return `${pad(h)}:${pad(m)}:${pad(s)} ${ampm}`;
  };


  const isDay = (weather) => {
    const currentTime = Date.now() / 1000;
    return currentTime > weather.sys.sunrise && currentTime < weather.sys.sunset;
  };

  // Map weather conditions to your GIF assets
  const mediaMap = {
    Rain: { gif: Rain },
    Drizzle: { gif: Rain },
    Thunderstorm: { gif: Thunderstorm },
    Snow: { gif: SnowDay },
    Clear: { gifDay: ClearDay, gifNight: ClearNight },
    Clouds: { gifDay: CloudsDay, gifNight: CloudsNight },
    Mist: { gif: Haze },
    Smoke: { gif: Haze },
    Haze: { gif: Haze },
  };

  const search = async (city) => {
    if (!city) {
      alert('Please enter a city name');
      return;
    }

    try {
    const url = `https://weather-app-v67s.onrender.com/api/weather?city=${city}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

        // console.log(data);

      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
      alert('Failed to fetch weather data');
      setWeatherData(null);
    }
  };

  useEffect(() => {
    search('India');
  }, []);

  const allicons = {
    '01d': clear_icon,
    '01n': clear_icon,
    '02d': cloud_icon,
    '02n': cloud_icon,
    '03d': cloud_icon,
    '03n': cloud_icon,
    '04d': drizzle_icon,
    '04n': drizzle_icon,
    '09d': rain_icon,
    '09n': rain_icon,
    '10d': rain_icon,
    '10n': rain_icon,
    '13d': snow_icon,
    '13n': snow_icon,
  };

  const WeatherBackground = ({ weather }) => {
    if (!weather) return null;
    const isDayTime = isDay(weather);
    const condition = weather.weather[0].main;

    const media = mediaMap[condition];

    if (!media) {
      // fallback to default video
      return (
        <video
          className="weather-background-media"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
        </video>
      );
    }

    const src = isDayTime ? media.gifDay || media.gif : media.gifNight || media.gif;

    return (
      <img
        className="weather-background-media"
        src={src}
        alt={`${condition} background`}
      />
    );
  };

  return (
    <div className="weather">
      {/* Background */}
      {weatherData && <WeatherBackground weather={weatherData} />}

      {/* Search Bar */}
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search city" />
        <img
          src={search_icon}
          alt="search"
          onClick={() => search(inputRef.current.value)}
        />
      </div>

      {/* Weather Info */}
      {weatherData && (
        <>
          <img
            src={allicons[weatherData.weather[0].icon] || clear_icon}
            alt="weather icon"
            className="weather-icon"
          />
          <p className="weathername">{ weatherData.weather[0].main}</p>
          <p className="temprature">{Math.floor(weatherData.main.temp)}°C</p>
          <p className="location">{weatherData.name}</p>
          { <div className="date-time">
            {days[currentTime.getDay()]}, {months[currentTime.getMonth()]} {currentTime.getDate()} |{' '}
            {formatTime(currentTime)}
                    </div> }

          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="humidity" />
              <div>
                <p>{weatherData.main.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="wind" />
              <div>
                <p>{weatherData.wind.speed} Km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;

