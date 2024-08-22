import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseliststudentComponent } from './courseliststudent.component';

describe('CourseliststudentComponent', () => {
  let component: CourseliststudentComponent;
  let fixture: ComponentFixture<CourseliststudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseliststudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseliststudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
