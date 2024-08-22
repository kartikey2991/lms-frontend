import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselisttrueComponent } from './courselisttrue.component';

describe('CourselisttrueComponent', () => {
  let component: CourselisttrueComponent;
  let fixture: ComponentFixture<CourselisttrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourselisttrueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourselisttrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
