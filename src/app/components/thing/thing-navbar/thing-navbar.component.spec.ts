import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingNavbarComponent } from './thing-navbar.component';

describe('ThingNavbarComponent', () => {
  let component: ThingNavbarComponent;
  let fixture: ComponentFixture<ThingNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
