import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { faTrash, faEdit, faFileArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service : SearchService){}

  students : any
  name : string = ""
  isEmpty : boolean = false
  faTrash = faTrash
  faEdit = faEdit
  faFileArrowDown = faFileArrowDown
  fileName= 'Students Sheet.xlsx';
  isDelete : boolean = false
  id : string = ""
  emails : string = ""
  faEnvelope = faEnvelope

  
  ngOnInit(): void {
  }

  searchStudentName(event : any){
    this.name = event.target.value
    this.service.searchStudentName(this.name).subscribe((res: any)=>{
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
      this.service.deleteStudent(id).subscribe((res:any)=>{})
      setTimeout(()=>{this.searchStudentName(this.name)},50)
    }
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

  deleteTrue(){
    this.isDelete =true;
    this.deleteStudent(this.id)
    this.isDelete =false

  }
}
