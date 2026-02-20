import { fetchWeatherByCity, fetchWeatherByCoordinates } from "../services/weatherApi.ts";
import type { coordinates, CurrentWeather } from "../types/weatherTypes.ts";

function fetchWeatherDataCity(city:string):any
{
    const data = fetchWeatherByCity(city);
    const unprocessedWeather = fetchWeatherByCoordinates(data.coord.lat, data.coord.lon);
    const weather: CurrentWeather = {
        temp: unprocessedWeather.main.temp,
        tempFeelsLike: unprocessedWeather.main.feels_like,
        tempMin: unprocessedWeather.main.temp_min,
        tempMax: unprocessedWeather.main.temp_max,
        humidity: unprocessedWeather.main.humidity,
        pressure: unprocessedWeather.main.pressure,
        visibility: unprocessedWeather.visibility,
        windSpeed: unprocessedWeather.wind.speed,
        windDegree: unprocessedWeather.wind.deg,
        sunrise: unprocessedWeather.sys.sunrise,
        sunset: unprocessedWeather.sys.sunset,
        main: unprocessedWeather.weather[0].main,
        description: unprocessedWeather.weather[0].description,
        cloudiness: unprocessedWeather.clouds.all,
        precipitation: unprocessedWeather.rain ? unprocessedWeather.rain['1h'] : undefined,
        snow: unprocessedWeather.snow ? unprocessedWeather.snow['1h'] : undefined
    }

    return weather;
}

function fetchWeatherDataCoordinates(coordinates:coordinates):any
{
    const unprocessedWeather = fetchWeatherByCoordinates(coordinates.lat, coordinates.lon);
    const weather: CurrentWeather = {
        temp: unprocessedWeather.main.temp,
        tempFeelsLike: unprocessedWeather.main.feels_like,
        tempMin: unprocessedWeather.main.temp_min,
        tempMax: unprocessedWeather.main.temp_max,
        humidity: unprocessedWeather.main.humidity,
        pressure: unprocessedWeather.main.pressure,
        visibility: unprocessedWeather.visibility,
        windSpeed: unprocessedWeather.wind.speed,
        windDegree: unprocessedWeather.wind.deg,
        sunrise: unprocessedWeather.sys.sunrise,
        sunset: unprocessedWeather.sys.sunset,
        main: unprocessedWeather.weather[0].main,
        description: unprocessedWeather.weather[0].description,
        cloudiness: unprocessedWeather.clouds.all,
        precipitation: unprocessedWeather.rain ? unprocessedWeather.rain['1h'] : undefined,
        snow: unprocessedWeather.snow ? unprocessedWeather.snow['1h'] : undefined
    }

    return weather;
}
export {fetchWeatherDataCity, fetchWeatherDataCoordinates};