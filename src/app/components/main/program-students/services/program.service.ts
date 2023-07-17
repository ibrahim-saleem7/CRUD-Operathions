import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http : HttpClient) { }


  programStudents(program : string) {
    return this.http.get(`${environment.api}/programstudents/${program}`)
  }
  deleteStudent(id : any) {
    return this.http.delete(`${environment.api}/deletestudent/${id}`)
  }

  allProgrammes() {
    return this.http.get(`${environment.api}/allprogrammes`)
  }
}
