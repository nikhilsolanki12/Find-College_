import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassBgComponent } from './glass-bg.component';

describe('GlassBgComponent', () => {
  let component: GlassBgComponent;
  let fixture: ComponentFixture<GlassBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlassBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
