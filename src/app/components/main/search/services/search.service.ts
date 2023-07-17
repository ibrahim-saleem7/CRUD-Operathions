import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http : HttpClient) { }


  



  deleteStudent(id : any) {
    return this.http.delete(`${environment.api}/deletestudent/${id}`)
  }

  searchStudentName(studentName : string){
    return this.http.get(`${environment.api}/getstudent/${studentName}`)
  }

}
