import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionEventDeleteComponent } from './action-event-delete.component';

describe('ActionEventDeleteComponent', () => {
  let component: ActionEventDeleteComponent;
  let fixture: ComponentFixture<ActionEventDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionEventDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionEventDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
