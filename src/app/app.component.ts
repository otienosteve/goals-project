import { Component,OnInit } from '@angular/core';
import {Goal} from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppComponent implements OnInit {
  goal:Goal[]=[ new Goal( 1,'Watch finding Nemo','Find an online version and watch merlin find his son'),
  new Goal (2,'Buy Cookies','I have to buy cookies for the parrot'),
 new Goal (3,'Get new Phone Case','Diana has her birthday coming up soon'),
  new Goal(4,'Get Dog Food','Pupper likes expensive sancks'),
  new Goal (5,'Solve math homework','Damn Math'),
  new Goal(6,'Plot my world domination plan','Cause I am an evil overlord'),
  ]
  constructor(){

  }
  title = 'monday';
  ngOnInit(): void {
    
  }
}


