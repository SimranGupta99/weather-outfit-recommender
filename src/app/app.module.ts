import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Components
import { SearchComponent } from './components/search/search.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { weatherReducer } from './state/weather/weather.reducer';
import { WeatherEffects } from './state/weather/weather.effects';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { OutfitRecommendationComponent } from './components/outfit-recommendation/outfit-recommendation.component';
import { MatIconModule } from '@angular/material/icon';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DashboardComponent,
     WeatherDisplayComponent,
     OutfitRecommendationComponent,
     HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    // NgRx
    StoreModule.forRoot({ weather: weatherReducer }),
EffectsModule.forRoot([WeatherEffects]),
StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
