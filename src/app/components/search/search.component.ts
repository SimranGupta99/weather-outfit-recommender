import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm: string = '';

  @Output() searchCity = new EventEmitter<string>();

  constructor() {}

  onSearch() {
    const trimmedCity = this.searchTerm.trim();
    if (trimmedCity) {
      this.searchCity.emit(trimmedCity);
      this.searchTerm = ''; // clear input after search
    }
  }

  onInputChange() {
    // optional: debounce or suggestions can go here
  }
}
