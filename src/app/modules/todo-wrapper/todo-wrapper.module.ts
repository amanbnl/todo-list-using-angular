import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoWrapperComponent } from './todo-wrapper.component';
import { AddUpdateTodoFormModule } from '../add-update-todo-form/add-update-todo-form.module';
import { TodoItemModule } from '../todo-item/todo-item.module';



@NgModule({
  declarations: [
    TodoWrapperComponent
  ],
  imports: [
    CommonModule,
    AddUpdateTodoFormModule,
    TodoItemModule
  ],
  exports:[
    TodoWrapperComponent
  ]
})
export class TodoWrapperModule { }
