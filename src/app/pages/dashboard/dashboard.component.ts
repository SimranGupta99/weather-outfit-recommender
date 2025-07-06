import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getWeather } from 'src/app/state/weather/weather.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private store: Store) {}

  onCitySearch(city: string) {
    this.store.dispatch(getWeather({ city }));
  }
}
