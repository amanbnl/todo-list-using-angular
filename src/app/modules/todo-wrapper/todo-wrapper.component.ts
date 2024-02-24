import { Component } from '@angular/core';
import { TodoItem } from 'src/app/interfaces/todo-item';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.css']
})
export class TodoWrapperComponent {
  todoList: TodoItem[] = []
  currentTodoItem: TodoItem = null;

  constructor(private todoService: TodoService) {
    this.todoService.getTodoListFromLocalStorage().subscribe(listItems => {
      this.todoList = listItems
    })
  }

  /**
   * function to do both save/update todo item
   * @param todoItem 
   */
  updateTodoItem (todoItem: TodoItem) {
    if (this.currentTodoItem) {
      // it means we are updating an item
      const index = this.todoList.findIndex(item => item.id == todoItem.id)
      this.todoList[index] = todoItem
      this.todoService.saveListToLocalStorage(this.todoList)
      return;
    }
    // we are creating a new todo item
    this.todoList.push(todoItem)
    this.todoService.saveListToLocalStorage(this.todoList)
  }
  /**
   * function to mark item as completed
   * @param todoItem 
   */
  markItemAsCompleted (todoItem: TodoItem) {
    todoItem.isCompleted = !todoItem.isCompleted
    const index = this.todoList.findIndex(item => item.id == todoItem.id)
    if (index != -1) {
      this.todoList[index] = todoItem
    }
    this.todoService.saveListToLocalStorage(this.todoList)
  }

  /**
   * function to update the UI for updating the item
   * @param todoItem 
   */
  makeTodoEditable (todoItem: TodoItem) {
    this.currentTodoItem = todoItem
  }

  /**
   * function to delete the todo item
   * @param todoItem 
   */
  deleteTodoItem (todoItem: TodoItem) {
    const index = this.todoList.findIndex(item => item.id == todoItem.id)
    if (index != -1) {
      this.todoList = this.todoList.filter(item => item.id != todoItem.id)
      this.todoService.saveListToLocalStorage(this.todoList)
    }
  }
}
