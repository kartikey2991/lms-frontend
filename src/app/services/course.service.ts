// src/app/services/course.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
// import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  private apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/fetchAllCourses`);
  }

  approveCourse(courseId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/approve?courseId=${courseId}`, {});
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/courses`, course);
  }

  getCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/fetch/${courseId}`);
  }

  updateCourse(courseId: number, course: Course): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/update?courseId=${courseId}`, course);
  }
//   getCoursesByMentor(userId: number): Observable<Course[]> {
//     return this.http.get<Course[]>(`${this.apiUrl}/getAllCourses?mentorId=${userId}`);
//   }

  deleteCourse(courseId: number): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/delete?courseId=${courseId}`);
    }

}
