import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveCardComponent } from './curve-card.component';

describe('CurveCardComponent', () => {
  let component: CurveCardComponent;
  let fixture: ComponentFixture<CurveCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurveCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
