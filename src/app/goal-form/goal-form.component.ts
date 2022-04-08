import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Goal} from './../goal';
@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  newGoal:Goal= new Goal (7,"", "");
  @Output() addedGoal= new EventEmitter<Goal>();
  constructor() { }

  ngOnInit(): void {
  }
passGoal(val1:string,val2:string){
  this.newGoal.description=val2;
  this.newGoal.name=val1;
  this.addedGoal.emit(this.newGoal);
  this.newGoal= new Goal(1,'45',"500");
}
}
