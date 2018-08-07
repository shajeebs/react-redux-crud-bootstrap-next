import { todoActions, modalActions } from '../constants/actionTypes';

const INITIAL_STATE = {
  todos:[], todo:null, isFetching: false, error: null, successMsg:null, showDeleteModal: false,
  todoToDelete: null, showEditModal: false, todoToEdit: null,
  newTodo: null,showViewModal: false, pocoToView: null,
}

// export const HIDE_MODAL_STATE = (currentState) => {
//   ...currentState, todos:currentState.todos, todo:null, isFetching: false, error: null,
//   successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
//   todoToEdit: null, showViewModal: false, pocoToView: null, newTodo: null,
// };

export  const todoReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoActions.FETCH_TODOS_REQUEST:
          return {
            ...currentState, todos:[], todo:null, isFetching: true, error: null,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null,
          }
 
    case todoActions.FETCH_TODOS_SUCCESS:
          return  {
            ...currentState, todos:action.todos, todo:null, isFetching: false, error: null,
            successMsg:action.message, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null,
          }
    case todoActions.FETCH_TODOS_FAILED:
          return {
            ...currentState, todos:[], todo:null, isFetching: false, error: action.error,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null,
          }
 
    case todoActions.FETCH_TODO_REQUEST:
          return {
            ...currentState, todos:currentState.todos, todo:null, isFetching: true, error: null,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null,
          }
 
    case todoActions.FETCH_TODO_SUCCESS:
          return {
            ...currentState, todos:currentState.todos, todo:action.todo, isFetching: false, error: null,
            successMsg:action.message, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null,
          }
 
    case todoActions.FETCH_TODO_FAILED:
          return {
            ...currentState, todos:[], todo:null, isFetching: false, error: action.error,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null,
          }
 
    case todoActions.ADD_NEW_TODO_REQUEST:
          return {
            ...currentState, todos:currentState.todos, todo:null, isFetching: true, error: null,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null, newTodo: action.todo,
          }
 
    case todoActions.ADD_NEW_TODO_REQUEST_SUCCESS:
          return  {
            ...currentState, todos:[...currentState.todos, action.todo], todo:null, isFetching: false, error: null,
            successMsg:action.message, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null, newTodo: action.todo,
          }
    case todoActions.ADD_NEW_TODO_REQUEST_FAILED:
          return {
            ...currentState, todos:currentState.todos, todo:null, isFetching: false, error: action.error,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null, newTodo: null
          }
 
    case todoActions.EDIT_TODO_REQUEST:
          return {
            ...currentState, todos:currentState.todos, todo:null, isFetching: true, error: null,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: true,
            todoToEdit: action.todo, showViewModal: false, pocoToView: null, newTodo: null,
          }
 
    case todoActions.EDIT_TODO_SUCCESS:
         const updatedTodos = currentState.todos.map((todo) => {
           if(todo._id !== action.todo._id){
             //This is not the item we care about, keep it as is
             return todo;
           }
           //Otherwise, this is the one we want to return an updated value
           return { ...todo, ...action.todo }
         })
          return {
            ...currentState, todos:updatedTodos, todo:null, isFetching: false, error: null,
            successMsg:action.message, showDeleteModal: false, todoToDelete: null, showEditModal:true,
            todoToEdit: action.todo, showViewModal: false, pocoToView: null, newTodo: null,
          }
 
  case todoActions.EDIT_TODO_FAILED:
        return {
            ...currentState, todos:currentState.todos, todo:null, isFetching: false, error: action.error,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: true,
            todoToEdit: currentState.todoToEdit, showViewModal: false, pocoToView: null, newTodo: null
          }
 
  case todoActions.DELETE_TODO_REQUEST:
        return {
            ...currentState, todos:currentState.todos, todo:null, isFetching: true, error: null,
            successMsg:null, showDeleteModal: true, todoToDelete: action.todo, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null, newTodo: null,
          }
 
  case todoActions.DELETE_TODO_SUCCESS:
  const filteredTodos = currentState.todos.filter((todo) => todo._id !== currentState.todoToDelete._id)
        return {
            ...currentState, todos:filteredTodos, todo:null, isFetching: false, error: null,
            successMsg:action.message, showDeleteModal: false, todoToDelete: null, showEditModal:false,
            todoToEdit: action.todo, showViewModal: false, pocoToView: null, newTodo: null,
          }
 
  case todoActions.DELETE_TODO_FAILED:
        return {
            ...currentState, todos:currentState.todos, todo:null, isFetching: false, error: action.error,
            successMsg:null, showDeleteModal: true, todoToDelete: null, showEditModal: false,
            todoToEdit: null, showViewModal: false, pocoToView: null, newTodo: null
          }
  
  case modalActions.SHOW_EDIT_MODAL:
        return {
          ...currentState, todos:currentState.todos, todo:null, isFetching: false, error: null,
          successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: true,
          todoToEdit: action.todo, showViewModal: false, pocoToView: null, newTodo: null,
        }
 
  case modalActions.HIDE_EDIT_MODAL:
        return {
          ...currentState, todos:currentState.todos, todo:null, isFetching: false, error: null,
          successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
          todoToEdit: null, showViewModal: false, pocoToView: null, newTodo: null,
        };

  case modalActions.SHOW_DELETE_MODAL:
        return {
          ...currentState, todos:currentState.todos, todo:null, isFetching: false, error: null,
          successMsg:null, showDeleteModal: true, todoToDelete: action.todo, showEditModal: false,
          todoToEdit: null, showViewModal: false, pocoToView: null, newTodo: null,
        }
 
  case modalActions.HIDE_DELETE_MODAL:
        return {
          ...currentState, todos:currentState.todos, todo:null, isFetching: false, error: null,
          successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
          todoToEdit: null, showViewModal: false, pocoToView: null, newTodo: null,
        };

  case modalActions.SHOW_VIEW_MODAL:
      return {
          ...currentState, todos:currentState.todos, todo:null, isFetching: false, error: null,
          successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
          todoToEdit: null, showViewModal:true, pocoToView: action.poco, newTodo: null,
        }
  case modalActions.HIDE_VIEW_MODAL: 
        return {
          ...currentState, todos:currentState.todos, todo:null, isFetching: false, error: null,
          successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
          todoToEdit: null, showViewModal: false, pocoToView: null, newTodo: null,
        };
      
    default:
       return currentState;
  }
}