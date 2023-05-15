import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../enviroments/enviroment';
import { Student } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    const apiUrl = `${environment.url}/student/getAllStudents`;
    return this.httpClient.get<Student[]>(apiUrl);
  }

  getStudentById(id: number): Observable<Student> {
    const apiUrl = `${environment.url}/student/getStudentById/${id}`;
    return this.httpClient.get<Student>(apiUrl);
  }

  addStudent(student: Student): Observable<Student[]> {
    const apiUrl = `${environment.url}/student/addStudent`;
    return this.httpClient.post<Student[]>(apiUrl, student);
  }

  removeStudentById(id: number): Observable<Student[]> {
    const apiUrl = `${environment.url}/student/removeStudentById/${id}`;
    return this.httpClient.delete<Student[]>(apiUrl);
  }
}
