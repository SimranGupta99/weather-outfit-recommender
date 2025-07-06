import { WeatherData } from 'src/app/core/models/weather.model';

export interface WeatherState {
  currentWeather: WeatherData | null;
  history: string[];
  loading: boolean;
  error: string | null;
}

export const initialWeatherState: WeatherState = {
  currentWeather: null,
  history: [],
  loading: false,
  error: null
};
