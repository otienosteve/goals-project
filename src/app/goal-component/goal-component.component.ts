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
<<<<<<< HEAD
  addGoal(val:Goal){
    val.id=this.goals.length+1
    this.goals.push(val);
    console.log(val)
  }
=======
>>>>>>> f448e2db68e8becbb5e373c32e26a732880dca66
}
