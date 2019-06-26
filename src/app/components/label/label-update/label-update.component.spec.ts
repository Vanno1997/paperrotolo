import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelUpdateComponent } from './label-update.component';

describe('LabelUpdateComponent', () => {
  let component: LabelUpdateComponent;
  let fixture: ComponentFixture<LabelUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
