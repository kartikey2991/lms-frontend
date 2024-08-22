import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newjoinerlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newjoinerlist.component.html',
  styleUrl: './newjoinerlist.component.css'
})
export class NewJoinerListComponent implements OnInit {
  newJoiners: Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.fetchEmployeesByRole('joiner').subscribe(data => {
      this.newJoiners = data;
    });
  }
}

