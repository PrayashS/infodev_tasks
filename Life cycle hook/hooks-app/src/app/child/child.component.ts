import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() uname:any;
  @Input() users:any;

  constructor() { 
    console.log("Constructor")
  }

  ngOnInit(): void {
    console.log("OnInit")
  }
  userData: any;
  ngOnChanges(changes: SimpleChanges): void{
    this.userData = this.users.filter((data:any) =>{
      if(data.name.includes(changes['uname'].currentValue)){
        return data
      }
    })
  }

}
