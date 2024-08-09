import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingHostelComponent } from './rating-hostel.component';

describe('RatingHostelComponent', () => {
  let component: RatingHostelComponent;
  let fixture: ComponentFixture<RatingHostelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingHostelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
