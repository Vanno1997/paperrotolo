import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareUpdateComponent } from './hardware-update.component';

describe('HardwareUpdateComponent', () => {
  let component: HardwareUpdateComponent;
  let fixture: ComponentFixture<HardwareUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
