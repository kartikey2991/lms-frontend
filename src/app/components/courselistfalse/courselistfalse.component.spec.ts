import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourselistfalseComponent } from './courselistfalse.component';

describe('CourselistfalseComponent', () => {
  let component: CourselistfalseComponent;
  let fixture: ComponentFixture<CourselistfalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourselistfalseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourselistfalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
