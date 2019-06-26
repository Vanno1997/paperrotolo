import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingInsertComponent } from './thing-insert.component';

describe('ThingInsertComponent', () => {
  let component: ThingInsertComponent;
  let fixture: ComponentFixture<ThingInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
