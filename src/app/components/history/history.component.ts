import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectSearchHistory } from 'src/app/state/weather/weather.selectors';
import { getWeather } from 'src/app/state/weather/weather.actions';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  history$: Observable<string[]>;

  constructor(private store: Store) {
    this.history$ = this.store.select(selectSearchHistory);
  }

  onSelectCity(city: string) {
    this.store.dispatch(getWeather({ city }));
  }
}
