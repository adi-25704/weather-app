export interface coordinates {
    lat: number,
    lon: number
}

export interface CurrentWeather{
    date: string,
    time: string,
    name: string,
    temp: number,
    tempFeelsLike: number,
    tempMin: number,
    tempMax: number,
    humidity: number,
    pressure: number,
    visibility: number,
    windSpeed: number,
    windDegree: number,
    sunrise: string,
    sunset: string,
    main: string,
    description: string
    cloudiness: number,
    precipitation?: number
    snow?: number
}
