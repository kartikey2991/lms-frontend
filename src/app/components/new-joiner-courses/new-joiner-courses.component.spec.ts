import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJoinerCoursesComponent } from './new-joiner-courses.component';

describe('NewJoinerCoursesComponent', () => {
  let component: NewJoinerCoursesComponent;
  let fixture: ComponentFixture<NewJoinerCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewJoinerCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewJoinerCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
