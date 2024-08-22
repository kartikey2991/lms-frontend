import { Observable } from 'rxjs'; // Adjust the path as necessary
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  fetchEmployeesByRole(role: string): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/fetchByRole?role=${role}`);
  }
}