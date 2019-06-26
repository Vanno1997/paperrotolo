import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionEventUpdateComponent } from './action-event-update.component';

describe('ActionEventUpdateComponent', () => {
  let component: ActionEventUpdateComponent;
  let fixture: ComponentFixture<ActionEventUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionEventUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionEventUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
