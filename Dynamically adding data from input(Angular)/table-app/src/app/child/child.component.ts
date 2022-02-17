import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  //Parent to child
  @Input() headings:any;
  @Input() array: any;

  // Child to parent 
  //Add
  @Output() val: any = new EventEmitter();
  //Update
  @Output() editVal: any = new EventEmitter();

  add = true;
  update = false;



  constructor() { }

  ngOnInit(): void {
  }
  username="";
  userage=0;

  // function to send value from child to parent 
  //add
  passValue(){
    let value = {
      name:this.username, age:this.userage
    }
    this.val.emit(value)
  }

  //edit button
  editData(name:any, age:any){
    this.username = name;
    this.userage = age;
    this.add = false;
    this.update = true;
  }

  //view button
  viewData(name:any, age:any){
    this.username = name;
    this.userage = age;
    this.add = false;
    this.update = false;
  }

  //Send value from child to parent 
  editValue(){
    let value = {
      name:this.username, age:this.userage
    }
    this.editVal.emit(value)
  }

}
