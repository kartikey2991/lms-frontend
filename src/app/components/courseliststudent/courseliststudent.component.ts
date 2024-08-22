// src/app/components/courseliststudent/courseliststudent.component.ts
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
// import { EnrollmentService } from '../../services/enrollment.service';
// import { Enrollments } from '../../models/enrollment.model';
// import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-courseliststudent',
  templateUrl: './courseliststudent.component.html',
  styleUrls: ['./courseliststudent.component.css']
})
export class CourseliststudentComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
      this.courseService.getCourses().subscribe((data: Course[]) => {
        console.log('Fetched courses:', data); // Debugging line to check the fetched data
        this.courses = data.filter(course => course.approved);
        console.log('Filtered courses:', this.courses); // Debugging line to check the filtered data
      });
    }

  completeCourse(course: Course) {
      // Logic to handle enrollment
      console.log(`Completing the course: ${course.courseTitle}`);
      console.log(`Completing the course: ${course.courseTitle}`);
      // const newJoinderId=this.userService.getUserId() !== undefined ? this.userService.getUserId() : 123;
      // const newEnrollment: Enrollments = {
      //   mentorID: course.createdBy, // Ensure your Course model has mentorId
      //   courseID: course.courseId, // Ensure your Course model has courseId
      //   newJoinID:newJoinderId!
      };
  
      // this.enrollmentService.createEnrollment(newEnrollment).subscribe((data: Enrollments) => {
      //   console.log('Enrollment created:', data);
      //   // Handle success, e.g., show a success message or update UI
      // }, error => {
      //   console.error('Error creating enrollment:', error);
      //   // Handle error, e.g., show an error message
      // });
    }

      // Implement your enrollment logic here, such as navigating to a new page or displaying a message.
  

