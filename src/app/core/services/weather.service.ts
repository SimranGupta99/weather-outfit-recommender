import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { WeatherData } from '../models/weather.model';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private apiKey = 'd1de7232da35421dae9e018e2d21d066';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherByCity(city: string): Observable<WeatherData> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`;

    return this.http.get<any>(url).pipe(
      map(response => ({
        city: response.name,
        temperature: response.main.temp,
        condition: response.weather[0].main,
        windSpeed: response.wind.speed,
        humidity: response.main.humidity,
        icon: response.weather[0].icon
      })),
      catchError(error => throwError(() => error))
    );
  }
}
