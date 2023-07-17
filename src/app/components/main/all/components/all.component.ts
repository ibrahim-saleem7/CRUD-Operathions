import { Component, OnInit } from '@angular/core';
import {
  ConfirmBoxInitializer,
  DialogLayoutDisplay,
  DisappearanceAnimation,
  AppearanceAnimation
} from '@costlydeveloper/ngx-awesome-popup';
import { faEdit, faFileArrowDown, faFileExport, faGraduationCap, faTrash ,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AllService } from './../services/all.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  students : any
  faTrash = faTrash
  faEdit = faEdit
  faFileArrowDown = faFileArrowDown
  faEnvelope = faEnvelope
  fileName= 'Students Sheet.xlsx';
  isDelete : boolean = false
  id : string = ""
  emails : string = ""


  constructor(private service : AllService ){}

  ngOnInit(): void {
    this.getAllStudents()
  }
  getAllStudents(){
    this.service.allStudents().subscribe((res:any)=>{
      this.students = res;
      this.students.forEach((ele : any) => {
      this.emails += ele.email+"," 
      })
    })
  }
  deleteStudent(id :string) {
    this.id = id;
    if(this.isDelete){
      this.service.deleteStudent(id).subscribe((res:any)=>{
      })
      setTimeout(()=>{this.getAllStudents()},10)
    }
  }
  deleteTrue(){
    this.isDelete =true;
    this.deleteStudent(this.id)
    this.isDelete =false
  }
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
}
