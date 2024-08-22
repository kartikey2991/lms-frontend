// src/app/services/course.service.ts
import { Injectable, Query } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private apiUrl = 'http://localhost:8082/api';

  constructor(private http: HttpClient) {}

  createQuery(query:Query,): Observable<Query> {
    return this.http.post<Query>(`${this.apiUrl}/create`,query);
  }

  getQueryById(queryId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/fetch?queryId=${queryId}`);
  }

  getQueries(): Observable<Query[]> {
    return this.http.get<Query[]>(`${this.apiUrl}/fetchAll`);
  }

  getNewJoinerQueries(joinerId: number): Observable<Query[]> {
    return this.http.get<Query[]>(`${this.apiUrl}/fetchByNewJoinerId?newJoinerId=${joinerId}`);
  }

  getMentorQueries(mentorId:number): Observable<Query[]>{
    return this.http.get<Query[]>(`${this.apiUrl}/fetchByMentorId?mentorId=${mentorId}`);
  }

  //for updating the queryresponse by mentor
  updateQueryResponse(response:String,queryId:number): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/update?queryId=${queryId}`,response);
  }

  //for fetching the queries by mentorId whose status is false
  getQueriesByMentorIdAndStatus(mentorId:number,status:boolean): Observable<Query[]>{
    return this.http.get<Query[]>(`${this.apiUrl}/fetchByMentorIdStatus?mentorId=${mentorId}&status=${status}`);
  } 
}
