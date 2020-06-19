import { Component, OnInit } from '@angular/core';
import { createStore } from "redux";
import { todoApp } from '../app.redux.reducer';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, availableTodoActions, availableSetVisibilityFilterActions, VisibilityFilters } from '../app.redux.module';

@Component({
  selector: 'app-redux-ex1',
  templateUrl: './redux-ex1.component.html',
  styleUrls: ['./redux-ex1.component.css']
})
export class ReduxEx1Component implements OnInit {

  constructor() { }

  ngOnInit() {


    const store = createStore(todoApp);

    //initial state
    console.log(store.getState());

    const unsubscribe = store.subscribe(() => console.log(store.getState()));

    //dispatch some actions
    store.dispatch(availableTodoActions.addTodo('Learn about actions'));
    store.dispatch(availableTodoActions.addTodo('Learn about reducers'));
    store.dispatch(availableTodoActions.addTodo('Learn about store'));
    store.dispatch(availableTodoActions.toggleTodo(0));
    store.dispatch(availableTodoActions.toggleTodo(1));
    store.dispatch(availableSetVisibilityFilterActions.SET_VISIBILITY_FILTER(VisibilityFilters.SHOW_COMPLETED));
    store.dispatch(availableTodoActions.removeTodo(1));
  }

}
