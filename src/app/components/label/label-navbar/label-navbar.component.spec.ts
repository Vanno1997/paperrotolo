import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelNavbarComponent } from './label-navbar.component';

describe('LabelNavbarComponent', () => {
  let component: LabelNavbarComponent;
  let fixture: ComponentFixture<LabelNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
