import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nanoid } from 'nanoid';
import { TodoItem } from 'src/app/interfaces/todo-item';

@Component({
  selector: 'app-add-update-todo-form',
  templateUrl: './add-update-todo-form.component.html',
  styleUrls: ['./add-update-todo-form.component.css']
})
export class AddUpdateTodoFormComponent implements OnInit, OnChanges {
  @Input() currentTodo: TodoItem = null;
  @Output() updateTodoItem = new EventEmitter<TodoItem>()
  todoForm: FormGroup
  
  constructor(
    private formBuilder: FormBuilder
    ) {
    this.todoForm = this.formBuilder.group({
      todoId: [nanoid()],
      inputText: ['', [Validators.required, Validators.min(3), Validators.max(300)]],
      isCompleted: [false]
    })
  }

  ngOnInit (): void {
    if (this.currentTodo) {
      this.todoForm.patchValue(this.currentTodo)
    }
  }
  /**
   * function to save the todo item
   * @returns 
   */
  saveTodo () {
    let inputValue = this.todoForm.value.inputText.trim()
    if (inputValue.length > 300 || inputValue.length < 3) {
      this.todoForm.markAsDirty()
      this.todoForm.setErrors({ 'invalidForm': true })
      return;
    }
    const todoItem: TodoItem = {
      id: this.currentTodo?.id ? this.currentTodo.id : nanoid(),
      inputText: this.todoForm.value.inputText,
      isCompleted: this.currentTodo?.id ? this.currentTodo.isCompleted : false
    }
    this.updateTodoItem.emit(todoItem)
    this.currentTodo = null;
    this.todoForm.reset()
  }
  ngOnChanges (changes: SimpleChanges): void {
    if (changes['currentTodo']) {
      if (changes['currentTodo'].previousValue?.id != changes['currentTodo'].currentValue?.id) {
        this.currentTodo = changes['currentTodo'].currentValue
        this.todoForm.patchValue(this.currentTodo)
      }
    }
  }
}
