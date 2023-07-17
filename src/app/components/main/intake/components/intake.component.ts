import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit, faFileArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';
import { IntakeService } from '../services/intake.service';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
})
export class IntakeComponent implements OnInit {

  constructor(private service :IntakeService ){}

  
  students : any 
  intakeName : string = ""
  intakes : any
  isEmpty : boolean = false
  faTrash = faTrash
  faEdit = faEdit
  faFileArrowDown = faFileArrowDown
  fileName= `Students Intake ${this.intakeName}.xlsx`;
  isDelete : boolean = false
  id : string = ""
  emails : string = ""
  faEnvelope = faEnvelope

  ngOnInit(): void {
    this.allIntakes()
  }
  
  allIntakes(){
    this.service.allIntakes().subscribe((res: any) =>{
      this.intakes =res
    })
  }

  getIntake(){
    this.service.getIntake(this.intakeName).subscribe((res: any)=>{
      this.students = res;
      this.students.forEach((ele : any) => {
        this.emails += ele.email+"," 
        })
      (res.length == 0 ? this.isEmpty = true : this.isEmpty = false)
    })
  }


  deleteStudent(id :string) {
    this.id = id;
    if(this.isDelete){
      this.service.deleteStudent(id).subscribe((res:any)=>{
      })
      setTimeout(()=>{this.getIntake()},50)
    }
  }

  deleteTrue(){
    this.isDelete =true;
    this.deleteStudent(this.id)
    this.isDelete =false

  }

  select(event : any){
    this.intakeName = event.target.value
    this.getIntake()
    this.fileName= `Students Intake (${this.intakeName}) .xlsx`
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
