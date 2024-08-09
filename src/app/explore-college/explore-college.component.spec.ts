import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCollegeComponent } from './explore-college.component';

describe('ExploreCollegeComponent', () => {
  let component: ExploreCollegeComponent;
  let fixture: ComponentFixture<ExploreCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreCollegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
