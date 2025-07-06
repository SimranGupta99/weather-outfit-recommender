import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherState } from './weather.state';

export const selectWeatherState = createFeatureSelector<WeatherState>('weather');

export const selectCurrentWeather = createSelector(
  selectWeatherState,
  state => state.currentWeather
);

export const selectSearchHistory = createSelector(
  selectWeatherState,
  state => state.history
);

export const selectLoading = createSelector(
  selectWeatherState,
  state => state.loading
);

export const selectError = createSelector(
  selectWeatherState,
  state => state.error
);
