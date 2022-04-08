import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Goal} from './../goal';
@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  newGoal:Goal= new Goal (1,"", "");
  @Output() addedGoal= new EventEmitter<Goal>();
  constructor() { }

  ngOnInit(): void {
  }
passGoal(){
this.addedGoal.emit(this.newGoal);
}
}
