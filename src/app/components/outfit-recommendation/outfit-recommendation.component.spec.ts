import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitRecommendationComponent } from './outfit-recommendation.component';

describe('OutfitRecommendationComponent', () => {
  let component: OutfitRecommendationComponent;
  let fixture: ComponentFixture<OutfitRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutfitRecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutfitRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
