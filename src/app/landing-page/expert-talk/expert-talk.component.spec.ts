import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertTalkComponent } from './expert-talk.component';

describe('ExpertTalkComponent', () => {
  let component: ExpertTalkComponent;
  let fixture: ComponentFixture<ExpertTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertTalkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
