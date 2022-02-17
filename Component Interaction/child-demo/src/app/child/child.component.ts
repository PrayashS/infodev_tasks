import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  // @Input('loggedIn') loginFlag =true;
  // private _loggedIn : boolean | undefined;
  @Input() loggedIn: boolean | undefined
  message: string | undefined;

  // get loggedIn(): boolean | undefined{
  //   return this._loggedIn;
  // }
  // @Input()
  // set loggedIn(value: boolean | undefined){
  //   this._loggedIn=value;
  //   if (value === true){
  //     this.message = "Welcome Back Prayash";
  //   }
  //   else{
  //     this.message ="Please Login";
  //   }
  // }

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
      const loggedInValue = changes['loggedIn'];
      if (loggedInValue.currentValue === true){
        this.message="Welcome back Prayash"
      } else{
        this.message="Please login"
      }
  }
  }


