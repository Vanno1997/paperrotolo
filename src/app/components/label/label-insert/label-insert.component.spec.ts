import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelInsertComponent } from './label-insert.component';

describe('LabelInsertComponent', () => {
  let component: LabelInsertComponent;
  let fixture: ComponentFixture<LabelInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
