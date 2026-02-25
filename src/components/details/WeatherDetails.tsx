import type { CurrentWeather } from "../../types/weatherTypes"

export function WeatherDetails({weatherData}: {weatherData: CurrentWeather}) {

        return (
            <>
            <section className="weather-details" aria-label="Detailed weather information">
                <div className="weather-card">
                    <h2 className="humidity">Humidity: {weatherData.humidity}%</h2>
                </div>
                <div className="weather-card">
                    <h2 className="wind">Wind: {weatherData.windSpeed} m/s</h2>
                    <h2 className="wind">Wind Direction: {weatherData.windDegree}°</h2>
                </div>

            </section>
            <section className="weather-details" aria-label="Detailed weather information">
                <div className="weather-card">
                    <h2 className="pressure">Pressure: {weatherData.pressure} hPa</h2>
                </div>
                <div className="weather-card">
                    <h2 className="visibility">Visibility: {weatherData.visibility} m</h2>
                </div>

            </section>
            </>
        )

}
