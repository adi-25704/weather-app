import { useState } from 'react'
import './SearchBar.css'



function App() {
  const [city, setCity] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [weatherData, setWeatherData] = useState<any>(null)
  
  const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY

  const fetchWeather = async () => {
    console.log(city)
    if(!city){
    return alert('Please enter a city name')
    }

    try {
        setLoading(true)
        setError("")

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)

        
        if(!response.ok)
        {
            throw new Error("City not found")
        }

        const data = await response.json()
        setWeatherData(data)


    }
    catch (err: any) {
        setCity("Not Found")
        setWeatherData(null)
        setError(err.message)
    }
    finally {
        setLoading(false)
    }
}

  return (
        <section id ="weatherScreen" className="screen" aria-labelledby="weather-title">
            <header>
                <h2 id="weather-title">Today's Weather</h2>
            </header>
            <main>
                <input type="text" 
                placeholder='Enter the City...' 
                value= {city}
                onChange={(e)=> setCity(e.target.value)}
                />
                <button onClick={fetchWeather} disabled={loading}>
                    {loading ? "Loading..." : "Get Weather"}
                </button>

                {error && <p className="error">{error}</p>}

                {weatherData && (
                    console.log(weatherData),
                    <section className="weather-info" aria-label={`Weather information for ${weatherData.name}`}>
                    <h2>{weatherData.name} </h2>
                    <p>Temperature: {Math.round(weatherData.main.temp - 273.15)} &#x2103;</p>
                    </section>
                )}

            </main>
        </section>
    )
}


export default App
