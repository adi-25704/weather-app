import { useState } from 'react'
import { fetchWeatherDataCity } from '../../hooks/useWeather.ts'
import '../../index.css'
import type {CurrentWeather} from '../../types/weatherTypes.ts'
import SearchBar from '../search/SearchBar.tsx'
import {Current_weather} from '../current/CurrentWeather.tsx'
import { WeatherDetails } from '../details/WeatherDetails.tsx'

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
        {weatherData && <Current_weather weatherData={weatherData} />}
        {weatherData && <WeatherDetails weatherData={weatherData} />}
        </>
    )
}
export default Layout;
