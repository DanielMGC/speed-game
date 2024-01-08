import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedMainComponent } from './speed-main.component';

describe('SpeedMainComponent', () => {
  let component: SpeedMainComponent;
  let fixture: ComponentFixture<SpeedMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeedMainComponent]
    });
    fixture = TestBed.createComponent(SpeedMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
