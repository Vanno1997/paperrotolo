import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorInsertComponent } from './behavior-insert.component';

describe('BehaviorInsertComponent', () => {
  let component: BehaviorInsertComponent;
  let fixture: ComponentFixture<BehaviorInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
