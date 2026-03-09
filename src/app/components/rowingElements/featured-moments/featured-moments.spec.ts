import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedMoments } from './featured-moments';

describe('FeaturedMoments', () => {
  let component: FeaturedMoments;
  let fixture: ComponentFixture<FeaturedMoments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedMoments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedMoments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
