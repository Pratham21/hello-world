import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseForm1Component } from './new-course-form1.component';

describe('NewCourseForm1Component', () => {
  let component: NewCourseForm1Component;
  let fixture: ComponentFixture<NewCourseForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
