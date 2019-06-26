import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionEventListComponent } from './action-event-list.component';

describe('ActionEventListComponent', () => {
  let component: ActionEventListComponent;
  let fixture: ComponentFixture<ActionEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
