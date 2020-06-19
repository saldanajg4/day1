//state of the app
// {
//     visibilityFilter: 'SHOW_ALL',
//     todos: [
//       {
//         text: 'Consider using Redux',
//         completed: true
//       },
//       {
//         text: 'Keep all state in a single tree',
//         completed: false
//       }
//     ]
//   }


/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }

  //action creators simply return an action
  export const availableTodoActions = {
    addTodo: (text: string) => {
        return {
            type: ADD_TODO,
            text
        }
    },
    removeTodo: (index: number) => {
        return {
            type: REMOVE_TODO,
            index
        }
    },
    toggleTodo: (index: number) => {
        return {
            type: TOGGLE_TODO,
            index
        }
    }
}

export const availableSetVisibilityFilterActions = {
    SET_VISIBILITY_FILTER: (filter: string) => {
        return {
            type: SET_VISIBILITY_FILTER,
            filter
        }
    }
}


