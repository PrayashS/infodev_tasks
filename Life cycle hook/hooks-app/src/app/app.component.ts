import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hooks-app';
  username:string = "";
  users = [
    {name: "Ekuu", joinedDate: new Date(15, 2, 1914)},
    {name: "Tarzen", joinedDate: new Date(15, 6, 1915)},
    {name: "KP baa", joinedDate: new Date(15, 5, 1916)},
    {name: "Ramey", joinedDate: new Date(15, 4, 1917)},
    {name: "Aalu", joinedDate: new Date(15, 3, 1918)},
    {name: "Talluuu", joinedDate: new Date(15, 4, 1917)},
    {name: "Abui", joinedDate: new Date(15, 3, 1918)},
    
  ];
}
