import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingDeleteComponent } from './thing-delete.component';

describe('ThingDeleteComponent', () => {
  let component: ThingDeleteComponent;
  let fixture: ComponentFixture<ThingDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
