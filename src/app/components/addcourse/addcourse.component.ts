// src/app/components/course/addcourse.component.ts
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addcourse',
  standalone: true,
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css'],
  imports: [FormsModule, RouterModule] 
})
export class AddcourseComponent {

  msg = '';
  // course: Course;
  course:any={
    courseId: 2,
    courseTitle: '',
    courseDuration: '',
    courseCategory: '',
    approved: false,
    createdBy: 0
  }
  constructor(private courseService: CourseService, private router: Router) {
    // this.course = {
    //   courseId: 0,
    //   courseTitle: '',
    //   courseDuration: '',
    //   courseCategory: '',
    //   approved: false,
    //   createdBy: 0
    // };
  }

  ngOnInit(): void {
    // Additional initialization logic can go here if needed
  }

  addCourse() {
    console.log('Adding course:', this.course);
    this.course.approved = false;
    this.courseService.createCourse(this.course).subscribe({
      next: (      response) => {
        console.log('Course created successfully:', response);
        this.msg = 'Course created successfully!';
      },
     error:(err) => {
        console.error('Error creating course:', err);
        this.msg = 'Failed to create course.';
      }
  });
  }
}
