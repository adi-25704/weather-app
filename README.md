# Weather App

A modern, responsive weather application built using **React + TypeScript** that displays current weather using the OpenWeatherMap API.

---

## Features

- Current weather display
- City-based search
- Fully responsive design
- Modern glassmorphism UI

---

## Tech Stack

- React
- TypeScript
- Vite
- OpenWeatherMap API
- CSS (Custom Design System)

---

## UI Preview

Main Weather Card:
- Large temperature display
- Location
- Date & time
- Weather description

---

## API Used

### OpenWeatherMap Current Weather APIs

```
[https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid=YOUR_API_KEY](https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid=YOUR_API_KEY)

[https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}](https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY})
```


## Environment Variables

Create a `.env` file:

```

VITE_WEATHER_API_KEY=your_api_key_here

```

---

## Installation

Clone the repository:

```

git clone [https://github.com/your-username/weather-app.git](https://github.com/your-username/weather-app.git)

```

Navigate into project:

```

cd weather-app

```

Install dependencies:

```

npm install

```

Run development server:

```

npm run dev

```

---

## Project Structure

```

src/
│
├── assets/                # Static images and icons
│   ├── Sunny.jpg
│   ├── Sunny_Landscape.jpg
│   ├── Weather_logo.png
│   └── react.svg
│
├── components/
│   ├── current/           # Current weather display
│   │   └── CurrentWeather.tsx
│   │
│   ├── details/           # Other details regarding current weather
│   │   └── WeatherDetails.tsx
│   │
│   ├── layout/            # Layout wrapper component
│   │   └── WeatherLayout.tsx
│   │
│   └── search/            # Search bar component
│       └── SearchBar.tsx
│
├── utils/
│   └── useWeather.ts      # Custom weather mapper function
│
├── services/
│   └── weatherApi.ts      # API calls
│
├── types/
│   └── weatherTypes.ts    # Type definitions
│
├── index.css              # Global styles
└── main.tsx               # App entry point

````

---

## Working

One API call is made to get weather data as per city and then I use coordinates recieved in them for another call using coordinates which gives me some more details.

Data is processed and passed down to presentational components.

---

## Responsive Design

* Flexbox & Grid layout
* Adaptive card sizing
* Mobile-first approach

---

## Design Highlights

* Glassmorphism cards
* Soft sky gradient backgrounds
* Smooth hover & transition effects


## Author

Aditya Desai
