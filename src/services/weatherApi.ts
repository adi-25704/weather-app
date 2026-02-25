async function fetchWeatherByCity(city: string):Promise<string>
{
    const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
    if(!city)
    {
        throw new Error("Please enter a City Name.");
    }

    const fetchData = async () => {
        try 
        {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            if(!response.ok)
            {
                throw new Error("City Not Found");
            }
            return response.json();
        }
        catch(err) 
        {
            throw new Error((err as Error).message);
        }
    }
    return JSON.stringify(await fetchData());
}

async function fetchWeatherByCoordinates(lat:number,long:number):Promise<string>
{
    const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
    if(!lat || !long)
    {
        throw new Error("Kindly enter the coordinates.");
    }

    const fetchData = async () =>{

        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`);
            if(!response.ok)
            {
                throw new Error("Invalid Coordinates");
            }
            return response.json();

        }
        catch(err)
        {
            throw new Error((err as Error).message);
        }

    }
    return JSON.stringify(await fetchData());
}

export {fetchWeatherByCity, fetchWeatherByCoordinates};