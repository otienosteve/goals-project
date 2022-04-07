import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Goal} from './../goal';
@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
  newGoal:Goal= new Goal(1," "," ");
  @Output() addGoal= new EventEmitter<Goal>();
  constructor() { }

  ngOnInit(): void {
  }
  submitGoal(){
    this.addGoal.emit(this.newGoal)
  }
  log(val:any){
    console.log(val)

  }
}
