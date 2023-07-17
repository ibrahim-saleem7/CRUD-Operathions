import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private service : SettingsService ,private location: Location){}

  status : string = ""  
  switchExpression : string =""
  isAction : boolean = false
  addProgramName : string = ""
  newProgramName : string = ""
  newIntakeName : string = ""
  programmes : any
  intakes : any
  addIntakeName : string = ""
  programNameSelected : string = ""
  programIdSelected : string =""
  intakeNameSelected : string = ""
  intakeIdSelected : string = ""

  ngOnInit(): void {
    this.allProgrammes()
    this.allIntakes()
  }
  addProgram(){
    this.isAction = false
    this.addProgramName = this.addProgramName.trim()
    if(this.addProgramName != " "){
      let body = {
        "program" : this.addProgramName
      }
      this.service.addProgram(body).subscribe((res: any) =>{
        this.allProgrammes()
        this.addProgramName = ""
      })
      this.isAction = true
      this.switchExpression  = "Add New Program"
      this.status = "success"
      setTimeout(() => {this.isAction = false},3000)
    }
    

  }
  editProgram(){
    this.newProgramName = this.newProgramName.trim()
    if(this.newProgramName != " "){
      let body = {   
        "id" : this.programIdSelected,
        "program" : this.newProgramName
        }
        this.service.editProgram(body).subscribe((res: any) =>{
          this.allProgrammes()
          this.programNameSelected = ""
        })
        this.isAction = true
        this.switchExpression  = "Edit Name Program"
        this.status = "warning"
        setTimeout(() => {this.isAction = false},3000)
    }
    
  }
  allProgrammes(){
    this.service.allProgrammes().subscribe((res: any) =>{
      this.programmes = res
    })
  }
  changeProgram(event : any ){
    let value  = event.target.value.split(',')
    this.programIdSelected = value[0]
    this.programNameSelected = value[1]

  }
  addIntake(){
    this.addIntakeName = this.addIntakeName.trim()
    if(this.addIntakeName){
      let body = {
        "intake" : this.addIntakeName
      }
      this.service.addIntake(body).subscribe((res: any) =>{
        this.allIntakes()
      })
        this.isAction = true
        this.switchExpression  = "Add New Intake"
        this.status = "success"
      setTimeout(() => {this.isAction = false},3000)
    }
    this.addIntakeName = ""
    
  }
  deleteIntake(){
    this.service.getIntake(this.intakeNameSelected).subscribe((data:any)=>{
      if(data.length == 0 ){
          this.service.deleteIntake(this.intakeIdSelected).subscribe((res:any)=>{
          this.allIntakes()
          this.intakeIdSelected = ""
          this.intakeNameSelected = ""
          this.isAction = true
          this.switchExpression  = "Delete Intake"
          this.status = "warning"
          setTimeout(() => {this.isAction = false},3000)
        })
      }else{
        this.isAction = true
        this.switchExpression  = "Failed Delete Intake"
        this.status = "danger" ;
        setTimeout(() => {this.isAction = false},3000)

      }
    })

  }
  editIntake(){
    this.newIntakeName = this.newIntakeName.trim()
    if(this.newIntakeName != " "){
      let body = {
        "id" : this.intakeIdSelected,
        "intake" : this.newIntakeName
      }
      this.service.editIntake(body).subscribe((res: any) => {
        this.allIntakes()
        this.intakeIdSelected = ""
        this.intakeNameSelected = ""
      })
          this.isAction = true
          this.switchExpression  = "Edit Name Intake"
          this.status = "warning"
      setTimeout(() => {this.isAction = false},3000)
    }
  }
  allIntakes(){
    this.service.allIntakes().subscribe((res: any) =>{
      this.intakes =res
    })
  }
  changeIntake(event : any) {
    console.log(event)
    let value  = event.target.value.split(',')
    this.intakeIdSelected = value[0]
    this.intakeNameSelected = value[1]
  }
  back(){
    this.location.back();
  }

  deleteProgram(){
    this.service.programStudents(this.programNameSelected).subscribe((data:any) => {
      console.log(data.length)
      if(data.length == 0) {
        this.service.deleteProgram(this.programIdSelected).subscribe((res: any) =>{
          this.allProgrammes()
          this.programNameSelected = ''

          this.isAction = true
          this.switchExpression  = "Delete Program"
          this.status = "warning"

          setTimeout(() => {this.isAction = false},3000)
        })
      }else{
          this.isAction = true
          this.switchExpression  = "Failed Delete Program"
          this.status = "danger"

        setTimeout(() => {this.isAction = false},3000)
      }
    })
    
  }


}
