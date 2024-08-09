import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarHostelsComponent } from './similar-hostels.component';

describe('SimilarHostelsComponent', () => {
  let component: SimilarHostelsComponent;
  let fixture: ComponentFixture<SimilarHostelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarHostelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarHostelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
