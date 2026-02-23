import { useState } from 'react'
import './SearchBar.css'

interface Props {
  onSearch: (city: string) => void;
}

function SearchBar({ onSearch }: Props) {

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) 
  {
    if (e.key === 'Enter') 
    {
      onSearch(city);
    }
 }

  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false)
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
                onKeyDown={handleKeyDown}
                />
                <button onClick={()=> onSearch(city)} disabled={loading}>
                    {loading ? "Loading..." : "Get Weather"}
                </button>

                
            </main>
        </section>
    )
}


export default SearchBar
