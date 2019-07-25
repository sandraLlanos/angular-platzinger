import { Component, OnInit } from '@angular/core';
// import { User } from '../interfaces/user';
import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { 
    // let myUser: User = {
    //   nick: 'eduardo',
    //   subnick: 'Hola',
    //   age: 12,
    //   email: 'sa@gmail.com',
    //   friend: true,
    //   uid: 1
    // };
    // console.log(myUser);
  }

  ngOnInit() {
  }

}
