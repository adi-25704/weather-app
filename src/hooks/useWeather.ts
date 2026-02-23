import { fetchWeatherByCity, fetchWeatherByCoordinates } from "../services/weatherApi.ts";
import type { coordinates, CurrentWeather } from "../types/weatherTypes.ts";

const fetchWeatherDataCity = async (city:string):Promise<CurrentWeather> => {
    try{
        const data = await fetchWeatherByCity(city);
        console.log(data)
        const unprocessedWeather = await fetchWeatherByCoordinates(data.coord.lat, data.coord.lon);
        const weather: CurrentWeather = {
            date: (new Date(unprocessedWeather.dt * 1000)).toLocaleDateString("en-GB", {
                                                                    weekday: "short",
                                                                    day: "numeric",
                                                                    month: "long"
                                                                    }),
            time: (new Date(unprocessedWeather.dt * 1000)).toLocaleTimeString("en-GB", {
                                                                        hour: "2-digit",
                                                                        minute: "2-digit"
                                                                        }),
            name: unprocessedWeather.name,
            temp: Number((unprocessedWeather.main.temp-273.15).toFixed(2)),
            tempFeelsLike: Number((unprocessedWeather.main.feels_like-273.15).toFixed(2)),
            tempMin: Number((unprocessedWeather.main.temp_min-273.15).toFixed(2)),
            tempMax: Number((unprocessedWeather.main.temp_max-273.15).toFixed(2)),
            humidity: unprocessedWeather.main.humidity,
            pressure: unprocessedWeather.main.pressure,
            visibility: unprocessedWeather.visibility,
            windSpeed: unprocessedWeather.wind.speed,
            windDegree: unprocessedWeather.wind.deg,
            sunrise: (new Date(unprocessedWeather.sys.sunrise * 1000).toLocaleTimeString()),
            sunset: (new Date(unprocessedWeather.sys.sunset * 1000).toLocaleTimeString()),
            main: unprocessedWeather.weather[0].main,
            description: unprocessedWeather.weather[0].description,
            cloudiness: unprocessedWeather.clouds.all,
            precipitation: unprocessedWeather.rain ? unprocessedWeather.rain['1h'] : undefined,
            snow: unprocessedWeather.snow ? unprocessedWeather.snow['1h'] : undefined
        }
        return weather;
    }
    catch(err)
    {
        throw err;
    }
    

    
}

function fetchWeatherDataCoordinates(coordinates:coordinates):CurrentWeather
{
    const unprocessedWeather = fetchWeatherByCoordinates(coordinates.lat, coordinates.lon);
    const weather: CurrentWeather = {
        date: (new Date(unprocessedWeather.dt * 1000)).toLocaleDateString("en-GB", {
                                                                    weekday: "short",
                                                                    day: "numeric",
                                                                    month: "long"
                                                                    }),
        time: (new Date(unprocessedWeather.dt * 1000)).toLocaleTimeString("en-GB", {
                                                                    hour: "2-digit",
                                                                    minute: "2-digit"
                                                                    }),
        name: unprocessedWeather.name,
        temp: unprocessedWeather.main.temp,
        tempFeelsLike: unprocessedWeather.main.feels_like,
        tempMin: unprocessedWeather.main.temp_min,
        tempMax: unprocessedWeather.main.temp_max,
        humidity: unprocessedWeather.main.humidity,
        pressure: unprocessedWeather.main.pressure,
        visibility: unprocessedWeather.visibility,
        windSpeed: unprocessedWeather.wind.speed,
        windDegree: unprocessedWeather.wind.deg,
        sunrise: (new Date(unprocessedWeather.sys.sunrise * 1000).toLocaleTimeString()),
        sunset: (new Date(unprocessedWeather.sys.sunset * 1000).toLocaleTimeString()),
        main: unprocessedWeather.weather[0].main,
        description: unprocessedWeather.weather[0].description,
        cloudiness: unprocessedWeather.clouds.all,
        precipitation: unprocessedWeather.rain ? unprocessedWeather.rain['1h'] : undefined,
        snow: unprocessedWeather.snow ? unprocessedWeather.snow['1h'] : undefined
    }

    return weather;
}
export {fetchWeatherDataCity, fetchWeatherDataCoordinates};