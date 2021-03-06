import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  friends: User[]; 
  query: string = '';
  onKeydown(event) {
    console.log(event);
  }
  constructor(private userServices: UserService) {
    this.friends = this.userServices.getFriends();
    
  //   let usuario1: User = {
  //     nick: 'Eduardo',
  //     age: 24,
  //     email: 'ed@aoe.aoe',
  //     friend: true,
  //     uid: 1
  //   };
  //   let usuario2: User = {
  //     nick: 'Freddy',
  //     age: 28,
  //     email: 'fred@aoe.aoe',
  //     friend: true,
  //     uid: 2
  //   };
  //   let usuario3: User = {
  //     nick: 'Yuliana',
  //     age: 18,
  //     email: 'yuli@aoe.aoe',
  //     friend: true,
  //     uid: 3
  //   };
  //   let usuario4: User = {
  //     nick: 'Ricardo',
  //     age: 17,
  //     email: 'rick@aoe.aoe',
  //     friend: false,
  //     uid: 4
  //   };
  //   let usuario5: User = {
  //     nick: 'Marcos',
  //     age: 30,
  //     email:'marcos@aoe.aoe',
  //     friend: false,
  //     uid: 5
  //   };
  //   this.friends = [usuario1, usuario2, usuario3, usuario4, usuario5]; 
  // la informacion dse va a consumir por medio de un servicio
  
    }
    
  ngOnInit() {
  }

}
