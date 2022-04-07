import { Component, OnInit , Input,EventEmitter, Output } from '@angular/core';
import {Goal} from './../goal';
@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  @Input() goals:Goal[];
  @Input() indx:number;
  @Output() doneWith= new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  isComplete(bool:boolean){
    this.doneWith.emit(bool);
  }

}
