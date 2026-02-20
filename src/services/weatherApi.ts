function fetchWeatherByCity(city: string):any
{
    const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
    if(!city)
    {
        return alert("Please enter a City Name.");
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
            throw new Error("City Not Found");
        }
    }
    fetchData();
}

function fetchWeatherByCoordinates(lat:number,long:number):any
{
    const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
    if(!lat || !long)
    {
        return alert("Kindly Enter the coordinates");
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
            throw new Error("Invalid Coordinates")
        }

    }
    fetchData();
}

export {fetchWeatherByCity, fetchWeatherByCoordinates};