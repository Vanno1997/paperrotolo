import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingUpdateComponent } from './thing-update.component';

describe('ThingUpdateComponent', () => {
  let component: ThingUpdateComponent;
  let fixture: ComponentFixture<ThingUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
