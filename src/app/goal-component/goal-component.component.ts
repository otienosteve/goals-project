import { Component, OnInit,Input} from '@angular/core';
import {Goal} from './../goal';


@Component({
  selector: 'app-goal-component',
  templateUrl: './goal-component.component.html',
  styleUrls: ['./goal-component.component.css']
})
export class GoalComponentComponent implements OnInit {
  @Input() goals:Goal[];
  
  constructor() { }

  ngOnInit(): void {
  }
  getDetails(i:number){
    this.goals[i].showDescription=!this.goals[i].showDescription;
  }
  isComplete(bool:boolean,indx:number){
    if(bool){
      this.goals.splice(indx,1);
    }

  }
}
