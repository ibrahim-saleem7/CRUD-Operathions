import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IntakeService {

  constructor(private http : HttpClient) { }


  

  deleteStudent(id : any) {
    return this.http.delete(`${environment.api}/deletestudent/${id}`)
  }

  allIntakes() {
    return this.http.get(`${environment.api}/intakes`)
  }

  getIntake(intake : any) {
    return this.http.get(`${environment.api}/intakestudents/${intake}`)
  }

}
