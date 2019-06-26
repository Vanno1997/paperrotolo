import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionEventInsertComponent } from './action-event-insert.component';

describe('ActionEventInsertComponent', () => {
  let component: ActionEventInsertComponent;
  let fixture: ComponentFixture<ActionEventInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionEventInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionEventInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
