import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customValidator } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  sampleForm : FormGroup | any;

  constructor(public fb:FormBuilder){

  }

  ngOnInit(): void {
      this.sampleForm=this.fb.group({
        name:['',[Validators.required,customValidator()]]
      })
  }

}
