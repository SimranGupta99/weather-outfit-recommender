import { createAction, props } from '@ngrx/store';
import { WeatherData } from 'src/app/core/models/weather.model';

export const getWeather = createAction(
  '[Weather] Get Weather',
  props<{ city: string }>()
);

export const getWeatherSuccess = createAction(
  '[Weather] Get Weather Success',
  props<{ weather: WeatherData }>()
);

export const getWeatherFailure = createAction(
  '[Weather] Get Weather Failure',
  props<{ error: string }>()
);
