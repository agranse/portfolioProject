import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rowing } from './rowing';

describe('Rowing', () => {
  let component: Rowing;
  let fixture: ComponentFixture<Rowing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rowing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rowing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
