// src/app/models/course.model.ts

export class Course {
    courseId: number;
    courseTitle: string
    // courseDescription: string;
    courseDuration: string; // Using string to represent Time
    // courseResource: string;
    courseCategory: string;
    approved: boolean;
    createdBy: number;
    title: any;
    category: any;
  
    constructor(
      courseId: number,
      courseTitle: string,
    //   courseDescription: string,
      courseDuration: string,
    //   courseResource: string,
      courseCategory: string,
      approved: boolean,
      createdBy: number
    ) {
      this.courseId = courseId;
      this.courseTitle = courseTitle;
    //   this.courseDescription = courseDescription;
      this.courseDuration = courseDuration;
    //   this.courseResource = courseResource;
      this.courseCategory = courseCategory;
      this.approved = approved;
      this.createdBy = createdBy;
    }
  }
  
  
  