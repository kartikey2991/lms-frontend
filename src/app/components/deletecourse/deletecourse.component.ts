// src/app/components/deletecourse/deletecourse.component.ts
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deletecourse',
  templateUrl: './deletecourse.component.html',
  styleUrls: ['./deletecourse.component.css'],
  standalone : true,
  imports : [FormsModule,CommonModule]
})
export class DeletecourseComponent implements OnInit {
  courses: Course[] = [];
  selectedCourseId: number | null = null;
  selectedCourse: Course | null = null;
  message: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  onCourseChange(courseId: number | null): void {
    if (courseId !== null) {
      this.courseService.getCourseById(courseId).subscribe((course: Course) => {
        this.selectedCourse = course;
      });
    } else {
      this.selectedCourse = null;
    }
  }

  deleteCourse(): void {
    if (this.selectedCourseId !== null) {
      this.courseService.deleteCourse(this.selectedCourseId).subscribe(
        () => {
          this.message = 'Course successfully deleted';
          this.selectedCourse = null;
          this.selectedCourseId = null;
          this.ngOnInit(); // Refresh the course list
        },
        () => {
          this.message = 'Failed to delete course';
        }
      );
    }
  }
}

