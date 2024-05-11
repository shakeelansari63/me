import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreakSectionComponent } from './streak-section.component';

describe('StreakSectionComponent', () => {
  let component: StreakSectionComponent;
  let fixture: ComponentFixture<StreakSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StreakSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreakSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
