import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoWrapperModule } from './modules/todo-wrapper/todo-wrapper.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TodoWrapperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
