import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TODO_LIST_ITEMS } from '../shared/constants';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() { }

  /**
   * function to get the list items from the local storage
   * @returns 
   */
  getTodoListFromLocalStorage (): Observable<TodoItem[]> {
    return of( JSON.parse(localStorage.getItem(TODO_LIST_ITEMS) || '[]'))
  }
  /**
   * function to save list items to the local storage
   * @param todoList 
   * @returns 
   */
  saveListToLocalStorage (todoList: TodoItem[]): Observable<TodoItem[]> {
    localStorage.setItem(TODO_LIST_ITEMS, JSON.stringify(todoList))
    return this.getTodoListFromLocalStorage()
  }
}
