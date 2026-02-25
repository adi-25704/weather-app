import type { CurrentWeather } from "../../types/weatherTypes"

export function Current_weather({weatherData}: {weatherData: CurrentWeather}) {

    return (
        <>
            <section className="weather-hero">
                <section className="weather-card weather-card-main" >
                    <span className="weather-card-title">
                        <h2 id="weather-title">Today's Weather</h2>
                    </span>
                    
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
            </section>
            
            {/* <section className="weather-info" aria-label={`Weather information for ${weatherData.name}`}>
            
            
            {<p>Humidity: {weatherData.humidity} %</p>
            <p>Pressure: {weatherData.pressure} mb</p>
            <p>Visibility: {weatherData.visibility} m</p>
            <p>Wind Speed: {weatherData.windSpeed} m/s</p>
            <p>Wind Degree: {weatherData.windDegree} &#176;</p>
            <p>Sunrise: {weatherData.sunrise}</p>
            <p>Sunset: {weatherData.sunset}</p>
            <p>Main: {weatherData.main}</p>
            <p>Description: {weatherData.description}</p>
            <p>Cloudiness: {weatherData.cloudiness} %</p> */}
            {/* {{weatherData.precipitation !== undefined && <p>Precipitation (last 1h): {weatherData.precipitation} mm</p>}
            {weatherData.snow !== undefined && <p>Snow (last 1h): {weatherData.snow} mm</p>}}
            </section> */}
            </>
    )

}
