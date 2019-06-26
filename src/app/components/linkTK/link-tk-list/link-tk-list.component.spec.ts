import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkTkListComponent } from './link-tk-list.component';

describe('LinkTkListComponent', () => {
  let component: LinkTkListComponent;
  let fixture: ComponentFixture<LinkTkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkTkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkTkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
