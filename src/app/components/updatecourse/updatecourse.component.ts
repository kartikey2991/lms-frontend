import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-updatecourse',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './updatecourse.component.html',
  styleUrl: './updatecourse.component.css'
})
export class UpdatecourseComponent implements OnInit {
  courses: Course[] = [];
  selectedCourse: Course | undefined;
  courseId: number = 0;

  constructor(private courseService: CourseService) {
    this.selectedCourse = new Course(0, '', '', '', false, 0);
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  onCourseChange(courseId: number): void {
    this.courseService.getCourseById(courseId).subscribe((course: Course) => {
      this.selectedCourse = course;
    });
  }

  updateCourse(): void {
    if (this.selectedCourse && this.courseId) {
      this.courseService.updateCourse(this.courseId, this.selectedCourse).subscribe(
        (        response: any) => {
          console.log('Course updated successfully:', response);
        },
        (        error: any) => {
          console.error('Error updating course:', error);
        }
      );
    }
  }
}

