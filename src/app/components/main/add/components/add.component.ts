import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common'
import { AddService } from './../services/add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  lastID :any =  1000 ;
  userForm!:FormGroup;
  programmes : any
  intakes : any
  isAdd : boolean = false
    constructor(private service : AddService , private fb:FormBuilder ,private location: Location ){}

  ngOnInit(): void {
    this.lastStudent()
    this.createForm()
    this.allProgrammes()
    this.allIntakes()
  }
  createForm() {
    this.userForm = this.fb.group({
      firstName:['' , [Validators.required]],
      lastName:['' , [Validators.required]],
      idNumber:['' , [Validators.required]],
      email:['' , [Validators.required , Validators.email]],
      phone:['' , [Validators.required]],
      program:['Select Program' , [Validators.required]],
      intake:['Select Intake' , [Validators.required]],
      country:['Select Country' , [Validators.required]],
    })
  }
  addStudent(){
    this.isAdd = false
    const model = {
      firstName:this.userForm.value.firstName,
      lastName:this.userForm.value.lastName,
      idNumber:this.userForm.value.idNumber,
      email:this.userForm.value.email,
      phone:this.userForm.value.phone,
      program:this.userForm.value.program,
      intake:this.userForm.value.intake,
      code:this.userForm.value.firstName[0].toUpperCase()+this.userForm.value.lastName[0].toUpperCase()+'-'+this.userForm.value.program.toUpperCase()+'-'+this.lastID++,
      country:this.userForm.value.country,
    }
    this.service.addStudent(model).subscribe((res: any) =>{}
    )
    this.isAdd =true

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
  lastStudent(){
    this.service.lastStudent().subscribe((res: any) =>{
      this.lastID = Number(res[0].id+1000)+1
    })
  }
  back(){
    this.location.back();
  }
}
