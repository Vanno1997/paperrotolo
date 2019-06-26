import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeUpdateComponent } from './code-update.component';

describe('CodeUpdateComponent', () => {
  let component: CodeUpdateComponent;
  let fixture: ComponentFixture<CodeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
