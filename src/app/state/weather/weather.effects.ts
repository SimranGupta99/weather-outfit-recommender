import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as WeatherActions from './weather.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { WeatherService } from 'src/app/core/services/weather.service';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActions.getWeather),
      mergeMap(action =>
        this.weatherService.getWeatherByCity(action.city).pipe(
          map(weather => WeatherActions.getWeatherSuccess({ weather })),
          catchError(error =>
            of(WeatherActions.getWeatherFailure({ error: 'City not found or API failed' }))
          )
        )
      )
    )
  );
}
