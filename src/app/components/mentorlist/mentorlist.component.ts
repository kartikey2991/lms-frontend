import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mentorlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mentorlist.component.html',
  styleUrl: './mentorlist.component.css'
})

export class MentorListComponent implements OnInit {
  mentors: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.fetchEmployeesByRole('mentor').subscribe(data => {
      this.mentors = data;
    });
  }
}
