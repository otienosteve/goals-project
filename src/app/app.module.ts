import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GoalComponentComponent } from './goal-component/goal-component.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { StrikethroughDirective } from './strikethrough.directive';
import {FormsModule} from '@angular/forms';
import { GoalFormComponent } from './goal-form/goal-form.component';
@NgModule({
  declarations: [
    AppComponent,
    GoalComponentComponent,
    GoalDetailComponent,
    StrikethroughDirective,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
