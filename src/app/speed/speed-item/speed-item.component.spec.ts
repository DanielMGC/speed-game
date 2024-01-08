import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedItemComponent } from './speed-item.component';

describe('SpeedItemComponent', () => {
  let component: SpeedItemComponent;
  let fixture: ComponentFixture<SpeedItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeedItemComponent]
    });
    fixture = TestBed.createComponent(SpeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
