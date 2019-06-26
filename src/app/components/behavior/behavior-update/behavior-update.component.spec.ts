import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorUpdateComponent } from './behavior-update.component';

describe('BehaviorUpdateComponent', () => {
  let component: BehaviorUpdateComponent;
  let fixture: ComponentFixture<BehaviorUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehaviorUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
