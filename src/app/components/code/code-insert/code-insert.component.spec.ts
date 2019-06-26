import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeInsertComponent } from './code-insert.component';

describe('CodeInsertComponent', () => {
  let component: CodeInsertComponent;
  let fixture: ComponentFixture<CodeInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
