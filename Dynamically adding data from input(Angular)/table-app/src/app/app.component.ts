import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table-app';
  headings = [
    {heading:"names"},{heading:"age"}
  ]
  array: any =[
    {
      name : "Hero",
      age : 18
    },
    {
      name : "Heroine",
      age : 19
    }
  ];

  addData(val:any){
    this.array.push(val)
  }

  editData(val:any){
    let index =  this.array.findIndex((aa:any)=>aa.name===val.name);
    this.array[index] = val 
  }


}
