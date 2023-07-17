import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private http : HttpClient) { }


  

  getStudentByid(id : any) {
    return this.http.get(`${environment.api}/student/${id}`)
  }
  editStudent(body : any) {
    return this.http.put(`${environment.api}/editstudent`, body)
  }
  allProgrammes() {
    return this.http.get(`${environment.api}/allprogrammes`)
  }
  allIntakes() {
    return this.http.get(`${environment.api}/intakes`)
  }

}
