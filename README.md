# Weather-Based Outfit Recommender

A responsive Angular web application that allows users to search for any city’s current weather conditions and receive smart outfit suggestions based on real-time weather data.

## Features

- **City Weather Search**  
  Enter any city name and get real-time weather data using the OpenWeatherMap API (or mocked data fallback).

- **Weather Display**  
  Shows current temperature, weather condition, humidity, and wind speed with icons.

- **Outfit Recommendation**  
  Suggests clothing tips based on the weather (e.g., "Wear a jacket", "Take an umbrella").

- **Search History**  
  Displays the last 5 searched cities, clickable to re-fetch weather.

- **Responsive Design**  
  Clean card-based UI with soft shadows, mobile-friendly layout, and modern styling.

## Tech Stack

| Tool            | Purpose                           |
|-----------------|-----------------------------------|
| Angular 14      | Frontend framework                |
| NgRx Store      | State management (weather + history) |
| SCSS            | Custom styling (modular & clean)  |
| Angular Material| UI elements (toolbar, icons)      |
| OpenWeatherMap API | Weather data source            |

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
