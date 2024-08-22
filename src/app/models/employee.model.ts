// src/app/models/employee.model.ts

export class Employee {
    employeeId: number;
    employeeName: string | undefined;
    email: string;
    role: string;
    password: string;
  
    constructor(
        employeeId: number = 0,
        employeeName: string = '',
        email: string = '',
        role: string = '',
        password: string = ''
      ){
      this.employeeId = employeeId;
      this.employeeName = employeeName;
      this.email = email;
      this.role = role;
      this.password = password;
    }
  }
  