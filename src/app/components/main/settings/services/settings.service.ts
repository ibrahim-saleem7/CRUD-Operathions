import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http : HttpClient) { }



  
  programStudents(program : string) {
    return this.http.get(`${environment.api}/programstudents/${program}`)
  }
  addProgram(body : any) {
    return this.http.post(`${environment.api}/addprogram`,body)
  }
  allProgrammes() {
    return this.http.get(`${environment.api}/allprogrammes`)
  }
  editProgram(body : any) {
    return this.http.put(`${environment.api}/editprogram`, body)
  }
  deleteProgram(id :string) {
    return this.http.delete(`${environment.api}/deleteprogram/${id}`)
  }


  addIntake(body : any) {
    return this.http.post(`${environment.api}/addintake`,body)
  }
  allIntakes() {
    return this.http.get(`${environment.api}/intakes`)
  }
  editIntake(body : any) {
    return this.http.put(`${environment.api}/editintake`, body)
  }
  getIntake(intake : any) {
    return this.http.get(`${environment.api}/intakestudents/${intake}`)
  }
  deleteIntake(id:string) {
    return this.http.delete(`${environment.api}/deleteintake/${id}`)
  }
}
