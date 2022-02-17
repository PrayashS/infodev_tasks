import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  formStructure: FormArray | any

  constructor(private fb: FormBuilder) {
    this.formStructure = this.fb.group({
      faculty:['', Validators.required],
      details: this.fb.array([])
    })
    this.addLesson();
  }
  get details(){
    return this.formStructure.get('details') as FormArray
  }
  // get fac(){
  //   return this.formStructure.get('faculty') as FormGroup
  // }
  addLesson(){
    const lessonForm = this.fb.group({
      name:['', Validators.required],
      age:['', [Validators.required, Validators.min(21)]],
      address:['', Validators.required]
    })
    this.details.push(lessonForm)
    
  }
  deleteLesson(index:any){
    this.details.removeAt(index)
  }

}
