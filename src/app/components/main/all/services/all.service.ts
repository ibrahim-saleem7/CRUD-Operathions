import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private http : HttpClient) { }


  
  allStudents(){
    return this.http.get(`${environment.api}/allstudents`)
  }
  deleteStudent(id : any) {
    return this.http.delete(`${environment.api}/deletestudent/${id}`)
  }

}
