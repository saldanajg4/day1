import { VisibilityFilters, REMOVE_TODO, availableTodoActions } from './app.redux.module';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './app.redux.module';

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

//you may apply reducer composition in reducers section
export function todoApp(state = initialState, action){
    var newState = Object.assign({}, state);

    //returning new objects
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            // return Object.assign({}, state, {visibilityFilter: action.filter})
            return newState = {todos: [...state.todos],visibilityFilter: action.filter}
        case ADD_TODO:  
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,//the new object is the old todos plus the new one at the end
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.splice(1,1)
            })

        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (action.index === index){
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    } 
                    return todo
                })
            })
        //for any unknown action we return the default state.
        default:
            return state;
    }
}

//reducers for each state
// export function visibilityFilterReducer(state = 'SHOW_ALL', action){
//     if(action.type === 'SET_VISIBILITY_FILTER'){
//         return action.filter;
//     }
//     else{
//         return state;
//     }
// }

// export function todosReducer(state = [], action){
//     switch(action.type){
//         case (ADD_TODO):
//             return state.concat([{text: action.text, completed: false}]);
//         case(TOGGLE_TODO):
//             return state.map((todo, index) =>
//                  action.index === index ? {text: action.text, completed: !todo.completed}
//                  : todo
//             )
//         default: return state;
//     }
// }
// // this reducer to manage the complete stateby calling those two reducers created
// export function todoApp(state = {}, action){
//     return {
//         todos: todosReducer(state.todos, action),
//         visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action) 
//     }
// }