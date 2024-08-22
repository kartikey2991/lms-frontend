import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courselistfalse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courselistfalse.component.html',
  styleUrl: './courselistfalse.component.css'
})

export class CourselistfalseComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses(): void {
    this.courseService.getCourses()
      .subscribe((data: Course[]) => {
        console.log('Fetched courses:', data);
        this.courses = data.filter(course => !course.approved);
        console.log('Filtered courses:', this.courses);
      });
  }

  approveNow(courseId: number): void {
    console.log(`Approving course with ID: ${courseId}`);
    this.courseService.approveCourse(courseId)
      .subscribe({
        next: () => {
          console.log(`Course ${courseId} approved successfully.`);
          // Fetch the updated list of courses after approval
          this.fetchCourses();
        },
        error: (error: any) => {
          console.error('Error approving course:', error);
          // Handle error scenarios, such as displaying an error message
        }
      });
  }
}
