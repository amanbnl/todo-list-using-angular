import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUpdateTodoFormComponent } from './add-update-todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddUpdateTodoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    AddUpdateTodoFormComponent
  ]
})
export class AddUpdateTodoFormModule { }
