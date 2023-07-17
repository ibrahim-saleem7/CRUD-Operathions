import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userForm!:FormGroup;
  id : any 
  student : any 
  programmes : any
  intakes : any
  isEdit : boolean = false

  constructor(private route:ActivatedRoute, private service : EditService , private fb:FormBuilder ,private location: Location ){
    this.id = this.route.snapshot.paramMap.get('id')
  }



  ngOnInit(): void {
    this.createForm()
    this.allProgrammes()
    this.allIntakes()
    console.log(this.id)
  }
  createForm() {
    this.loadData()
    this.userForm = this.fb.group({
      firstName:[`` , [Validators.required]],
      lastName:['' , [Validators.required]],
      idNumber:['' , [Validators.required]],
      email:['' , [Validators.required , Validators.email]],
      phone:['' , [Validators.required]],
      program:['Select Program' , [Validators.required]],
      intake:['Select Intake' , [Validators.required]],
      country:['Select Country' , [Validators.required]],
      
    })
  }
  allProgrammes(){
    this.service.allProgrammes().subscribe((res: any) =>{
      this.programmes = res
    })
  }
  allIntakes(){
    this.service.allIntakes().subscribe((res: any) =>{
      this.intakes =res
    })
  }
  loadData(){
    this.service.getStudentByid(this.id).subscribe((res: any) =>{
      this.student = res[0]
      this.setData()
    })
  }

  setData(){
    this.userForm.patchValue({
      firstName:this.student.firstName,
      lastName:this.student.lastName,
      idNumber:this.student.idNumber,
      email:this.student.email,
      phone:this.student.phone,
      program:this.student.program,
      intake:this.student.intake,
      country:this.student.country,
    })
  }
  submit(){
    this.isEdit = false;
    let model = {
      id: this.student.id,
      firstName:this.userForm.value.firstName,
      lastName:this.userForm.value.lastName,
      idNumber:this.userForm.value.idNumber,
      email:this.userForm.value.email,
      phone:this.userForm.value.phone,
      program:this.userForm.value.program,
      intake:this.userForm.value.intake,
      code:this.userForm.value.firstName[0].toUpperCase()+this.userForm.value.lastName[0].toUpperCase()+'-'+this.userForm.value.program.toUpperCase()+'-'+(this.student.id+1000),
      country:this.userForm.value.country,
    }

    this.service.editStudent(model).subscribe((res:any) => {
    })
    this.isEdit = true
  }
  back(){
    this.location.back();
  }
}
