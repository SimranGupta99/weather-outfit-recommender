import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherData } from 'src/app/core/models/weather.model';
import { Observable } from 'rxjs';
import { selectCurrentWeather } from 'src/app/state/weather/weather.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-outfit-recommendation',
  templateUrl: './outfit-recommendation.component.html',
  styleUrls: ['./outfit-recommendation.component.scss']
})
export class OutfitRecommendationComponent {
  suggestion: string | null = null;

  constructor(private store: Store) {
    this.store.select(selectCurrentWeather).pipe(
      map(weather => {
        if (!weather) return null;

        const { temperature, condition } = weather;

        if (temperature < 10) return 'Wear a heavy jacket.';
        if (temperature < 20) return 'Wear a jacket.';
        if (temperature > 30) return 'Stay hydrated and wear light clothes.';
        if (condition.toLowerCase().includes('rain')) return 'Take an umbrella.';
        if (condition.toLowerCase().includes('sun')) return 'Use sunglasses.';

        return 'Dress comfortably.';
      })
    ).subscribe(res => this.suggestion = res);
  }
}
