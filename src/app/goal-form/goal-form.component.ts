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
passGoal(val1:any,val2:any){
  this.newGoal.description=val2.value;
  this.newGoal.name=val1.value;
  this.addedGoal.emit(this.newGoal);
  val1.value="";
  val2.value=""
  this.newGoal= new Goal(1,'45',"500");
}
}
