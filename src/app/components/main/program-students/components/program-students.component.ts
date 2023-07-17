import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit, faFileArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';
import { ProgramService } from '../services/program.service';

@Component({
  selector: 'app-program-students',
  templateUrl: './program-students.component.html',
  styleUrls: ['./program-students.component.css']
})
export class ProgramStudentsComponent implements OnInit {

  students : any
  programName : string = ""
  isEmpty : boolean = false
  faTrash = faTrash
  faEdit = faEdit
  programmes : any
  faFileArrowDown = faFileArrowDown
  fileName= `Students Intake ${this.programName}.xlsx`;
  isDelete : boolean = false
  id : string = ""
  emails : string = ""
  faEnvelope = faEnvelope

  constructor(private service : ProgramService){}

  ngOnInit(): void {
    this.allProgrammes()
  }

  select(event : any){
    this.programName = event.target.value
    console.log(this.programName)
    this.programStudents()
    this.fileName= `Students Program (${this.programName}) .xlsx`;

  }

  allProgrammes(){
    this.service.allProgrammes().subscribe((res: any) =>{
      this.programmes = res
    })
  }
  programStudents(){
    this.service.programStudents(this.programName).subscribe((res : any) =>{
      this.students = res;
      console.log(res)
      if(res.length != 0){
        this.students.forEach((ele : any) => {
          this.emails += ele.email+"," 
          })
          this.isEmpty = false
        }else{
          this.isEmpty = true
        }
    })
  }

  deleteStudent(id :string) {
    this.id = id;
    if(this.isDelete){
      this.service.deleteStudent(id).subscribe((res:any)=>{})
      setTimeout(()=>{this.programStudents()},50)
    }
  }

  deleteTrue(){
    this.isDelete =true;
    this.deleteStudent(this.id)
    this.isDelete =false

  }

  exportexcel(): void
  {
    if(this.students.length != 0){
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
}
