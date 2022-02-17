import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  contactForm = new FormGroup({
    firstname: new FormControl('Prayash', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required, Validators.minLength(6)]),
      pincode: new FormControl('', [Validators.required])
    })
  })

  onSubmit(){
    console.log(this.contactForm.value)
  }
  get registerFormControl(){
    return this.contactForm.controls
  }
  // get regFormControlAddress(){
  //   return this.contactForm.get('address').controls
  // }
  
  
}
