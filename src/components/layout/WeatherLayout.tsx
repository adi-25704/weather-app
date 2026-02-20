import { useState } from 'react'
import { fetchWeatherDataCity } from '../../hooks/useWeather.ts'
import '../../index.css'
import type {CurrentWeather} from '../../types/weatherTypes.ts'
import SearchBar from '../search/SearchBar.tsx'

function Layout() {

    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [weatherData, setWeatherData] = useState<any>(null)

    async function fetchData(city:string) {
    try{
            setLoading(true);
            setError("");
            const Data:CurrentWeather = await fetchWeatherDataCity(city);
            setWeatherData(Data)
            console.log(weatherData)
        }
        catch(err)
        {
            setError((err as Error).message);
            setWeatherData(null);
        }
        finally
        {
            setLoading(false)
        }
    }

    return (
        <>
        <SearchBar onSearch={fetchData} />
        {error && <p className="error">{error}</p>}
        {/* {console.log("HI")} Solve the Issue of continuos rerendering */}
        {weatherData && (
            <>
            <h2>{weatherData.name} </h2>
            <section className="weather-card">
                <p>Temperature: {Math.round(weatherData.temp - 273.15)} &#x2103;</p>
                <p>Feels Like: {Math.round(weatherData.tempFeelsLike - 273.15)} &#x2103;</p>
                {/* <p>Min Temperature: {Math.round(weatherData.tempMin - 273.15)} &#x2103;</p>
                <p>Max Temperature: {Math.round(weatherData.tempMax - 273.15)} &#x2103;</p> */}
            </section>
            <section className="weather-info" aria-label={`Weather information for ${weatherData.name}`}>
            
            
            
            <p>Humidity: {weatherData.humidity} %</p>
            <p>Pressure: {weatherData.pressure} mb</p>
            <p>Visibility: {weatherData.visibility} m</p>
            <p>Wind Speed: {weatherData.windSpeed} m/s</p>
            <p>Wind Degree: {weatherData.windDegree} &#176;</p>
            <p>Sunrise: {new Date(weatherData.sunrise * 1000).toLocaleTimeString()}</p>
            <p>Sunset: {new Date(weatherData.sunset * 1000).toLocaleTimeString()}</p>
            <p>Main: {weatherData.main}</p>
            <p>Description: {weatherData.description}</p>
            <p>Cloudiness: {weatherData.cloudiness} %</p>
            {weatherData.precipitation !== undefined && <p>Precipitation (last 1h): {weatherData.precipitation} mm</p>}
            {weatherData.snow !== undefined && <p>Snow (last 1h): {weatherData.snow} mm</p>}
            </section>
            </>
        )}
        </>
    )
}
export default Layout;
