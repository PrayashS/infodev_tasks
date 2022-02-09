import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is app';
  imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5Bb9jBRhja9z8mGryHkg_80rjT7wB8ZfekIYB54xjbAQ8k4-bGYn8UZ6Fl_yS-5ytUg&usqp=CAU';
  count = 0;
  name: string|undefined;
  userName: string|undefined;
  // Getters and Setters
  private _customerName: string|undefined //Changing to private property

  get customerName() : string | undefined{
    return this._customerName
  }
  set customerName(value: string | undefined){ // Setter accepts value and assigns passed in value to private property
    this._customerName = value;
    if(value === "Prayash"){
      alert("Namastey "+value +" g")
    }
  }

  increamentCount (){
    this.count += 1;
  }
  resetCount(){
    this.count = 0;
  }
  
  displayVal ='';
  getValue(value:string){
    this.displayVal=value;
  }
 
  greetName(updatedName:any){
    this.userName=updatedName;
    if(updatedName === 'Prayash'){
      alert("Hello " +updatedName)
    }


  }
  

  
}
