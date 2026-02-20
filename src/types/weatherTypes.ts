export interface coordinates {
    lat: number,
    lon: number
}

export interface CurrentWeather{
    temp: number,
    tempFeelsLike: number,
    tempMin: number,
    tempMax: number,
    humidity: number,
    pressure: number,
    visibility: number,
    windSpeed: number,
    windDegree: number,
    sunrise: number,
    sunset: number,
    main: string,
    description: string
    cloudiness: number,
    precipitation?: number
    snow?: number
}
