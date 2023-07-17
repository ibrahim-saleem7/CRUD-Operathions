import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http : HttpClient) { }


  addStudent(model : any){
    return this.http.post(`${environment.api}/addstudent`,model)
  }
  getStudentByid(id : any) {
    return this.http.get(`${environment.api}/student/${id}`)
  }

  lastStudent( ){
    return this.http.get(`${environment.api}/laststudent`)
  }

  allProgrammes() {
    return this.http.get(`${environment.api}/allprogrammes`)
  }

  allIntakes() {
    return this.http.get(`${environment.api}/intakes`)
  }

}
