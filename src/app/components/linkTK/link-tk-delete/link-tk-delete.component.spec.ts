import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTkDeleteComponent } from './link-tk-delete.component';

describe('LinkTkDeleteComponent', () => {
  let component: LinkTkDeleteComponent;
  let fixture: ComponentFixture<LinkTkDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTkDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTkDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
