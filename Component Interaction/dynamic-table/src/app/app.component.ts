import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userForm: FormGroup 

  constructor(private fb:FormBuilder){
    this.userForm = this.fb.group ({
      name:['', Validators.required],
      address: ['', Validators.required]
    })
  }
  
  ngOnInit(): void {
      
  }
}

