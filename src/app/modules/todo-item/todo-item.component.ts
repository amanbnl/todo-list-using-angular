import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/app/interfaces/todo-item';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem: TodoItem = null
  @Output() markItemAsCompleted = new EventEmitter<TodoItem>()
  @Output() makeTodoEditable = new EventEmitter<TodoItem>()
  @Output() deleteTodo = new EventEmitter<TodoItem>()

  /**
   * function to handle the event when user is marking an item as completed
   * @param event 
   * @param todoItem 
   */
  handleClick (event, todoItem: TodoItem) {
    // checking if user has clicked on the item not on the edit or delete button
    if (event.target.classList.contains('todo-item') || event.target.classList.contains('completed') || event.target.classList.contains('un-completed')) {
      const userConsent = window.confirm(`Are you sure you want to Mark this item as ${todoItem.isCompleted ? "Un Completed" : "Completed"} ?`)
      if (userConsent) {
        this.markItemAsCompleted.emit(todoItem)
      }
    }
  }

  /**
   * function to set the current todo for edit purpose
   * @param todoItem 
   */
  handleEditClick (todoItem: TodoItem) {
    this.makeTodoEditable.emit(todoItem)
  }

  /**
   * function to handle the delete functionality
   * @param todoItem 
   */
  handleDeleteClick (todoItem: TodoItem) {
    const userConsent: boolean = window.confirm("Are you sure you want to delete this Item")
    if (userConsent) {
      this.deleteTodo.emit(todoItem)
    }
  }
}
