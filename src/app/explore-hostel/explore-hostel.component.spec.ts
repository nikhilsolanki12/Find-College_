import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreHostelComponent } from './explore-hostel.component';

describe('ExploreHostelComponent', () => {
  let component: ExploreHostelComponent;
  let fixture: ComponentFixture<ExploreHostelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreHostelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreHostelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
