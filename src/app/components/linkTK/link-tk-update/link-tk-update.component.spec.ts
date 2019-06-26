import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTkUpdateComponent } from './link-tk-update.component';

describe('LinkTkUpdateComponent', () => {
  let component: LinkTkUpdateComponent;
  let fixture: ComponentFixture<LinkTkUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTkUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
