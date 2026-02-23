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
                    <div className="weather-left">
                        <h1 className="temp">{weatherData.temp}&#8451;</h1>
                        <p className="location">&#x1F4CD; {weatherData.name}</p>
                        <p className="summary">{weatherData.description}</p>
                    </div>

                    <div className="weather-right">
                        <p className="date">{weatherData.date}</p>
                        <h2 className="time">{weatherData.time}</h2>
                    </div>
                </section>
            
            <section className="weather-info" aria-label={`Weather information for ${weatherData.name}`}>
            
            
            
            <p>Humidity: {weatherData.humidity} %</p>
            <p>Pressure: {weatherData.pressure} mb</p>
            <p>Visibility: {weatherData.visibility} m</p>
            <p>Wind Speed: {weatherData.windSpeed} m/s</p>
            <p>Wind Degree: {weatherData.windDegree} &#176;</p>
            <p>Sunrise: {weatherData.sunrise}</p>
            <p>Sunset: {weatherData.sunset}</p>
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
