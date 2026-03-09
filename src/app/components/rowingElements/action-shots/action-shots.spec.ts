import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionShots } from './action-shots';

describe('ActionShots', () => {
  let component: ActionShots;
  let fixture: ComponentFixture<ActionShots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionShots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionShots);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
