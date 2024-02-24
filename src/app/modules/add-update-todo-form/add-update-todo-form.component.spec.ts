import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateTodoFormComponent } from './add-update-todo-form.component';

describe('AddUpdateTodoFormComponent', () => {
  let component: AddUpdateTodoFormComponent;
  let fixture: ComponentFixture<AddUpdateTodoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateTodoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUpdateTodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
