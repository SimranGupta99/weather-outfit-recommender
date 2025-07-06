import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from './weather.actions';
import { initialWeatherState, WeatherState } from './weather.state';

export const weatherReducer = createReducer(
  initialWeatherState,

  on(WeatherActions.getWeather, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(WeatherActions.getWeatherSuccess, (state, { weather }) => ({
    ...state,
    currentWeather: weather,
    loading: false,
    history: [weather.city, ...state.history.filter(c => c !== weather.city)].slice(0, 5)
  })),

  on(WeatherActions.getWeatherFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
