import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareInsertComponent } from './hardware-insert.component';

describe('HardwareInsertComponent', () => {
  let component: HardwareInsertComponent;
  let fixture: ComponentFixture<HardwareInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
