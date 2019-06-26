import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorListComponent } from './behavior-list.component';

describe('BehaviorListComponent', () => {
  let component: BehaviorListComponent;
  let fixture: ComponentFixture<BehaviorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
