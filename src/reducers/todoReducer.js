import { todoActions, modalActions } from '../constants/actionTypes';

const INITIAL_STATE = {
  pocos:[], poco:null, isFetching: false, error: null, successMsg:null, showDeleteModal: false,
  todoToDelete: null, showEditModal: false, todoToEdit: null,
  newTodo: null,showViewModal: false, pocoToView: null,
}

// export const HIDE_MODAL_STATE = (currentState) => {
//   ...currentState, pocos:currentState.todos, poco:null, isFetching: false, error: null,
//   successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
//   todoToEdit: null, showViewModal: false, pocoToView: null, newTodo: null,
// };

export  const todoReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case todoActions.FETCH_TODOS_REQUEST:
          return {
            ...currentState, pocos:[], poco:null, isFetching: true, error: null,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null,
          }
 
    case todoActions.FETCH_TODOS_SUCCESS:
          return  {
            ...currentState, pocos:action.pocos, poco:null, isFetching: false, error: null,
            successMsg:action.message, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null,
          }
    case todoActions.FETCH_TODOS_FAILED:
          return {
            ...currentState, pocos:[], poco:null, isFetching: false, error: action.error,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null,
          }
 
    case todoActions.FETCH_TODO_REQUEST:
          return {
            ...currentState, pocos:currentState.todos, poco:null, isFetching: true, error: null,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null,
          }
 
    case todoActions.FETCH_TODO_SUCCESS:
          return {
            ...currentState, pocos:currentState.todos, poco:action.poco, isFetching: false, error: null,
            successMsg:action.message, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null,
          }
 
    case todoActions.FETCH_TODO_FAILED:
          return {
            ...currentState, pocos:[], poco:null, isFetching: false, error: action.error,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null,
          }
 
    case todoActions.ADD_TODO_REQUEST:
          return {
            ...currentState, pocos:currentState.pocos, poco:null, isFetching: true, error: null,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null, newTodo: action.poco,
          }
 
    case todoActions.ADD_TODO_REQUEST_SUCCESS:
          return  {
            ...currentState, pocos:[...currentState.pocos, action.poco], poco:null, isFetching: false, error: null,
            successMsg:action.message, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null, newTodo: action.poco,
          }
    case todoActions.ADD_TODO_REQUEST_FAILED:
          return {
            ...currentState, pocos:currentState.todos, poco:null, isFetching: false, error: action.error,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null, newTodo: null
          }
 
    case todoActions.EDIT_TODO_REQUEST:
          return {
            ...currentState, pocos:currentState.todos, poco:null, isFetching: true, error: null,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: true,
            todoToEdit: action.poco, showViewModal: false, pocoToView: null, newTodo: null,
          }
 
    case todoActions.EDIT_TODO_SUCCESS:
         const updatedTodos = currentState.pocos.map((pocoData) => {
           if(pocoData._id !== action.poco._id){
             //This is not the item we care about, keep it as is
             return pocoData;
           }
           //Otherwise, this is the one we want to return an updated value
           return { ...todo, ...action.poco }
         })
          return {
            ...currentState, pocos:updatedTodos, poco:null, isFetching: false, error: null,
            successMsg:action.message, showDeleteModal: false, todoToDelete: null, showEditModal:false,
            todoToEdit: null, showViewModal: false, pocoToView: null, newTodo: null,
          }
 
  case todoActions.EDIT_TODO_FAILED:
        return {
            ...currentState, pocos:currentState.todos, poco:null, isFetching: false, error: action.error,
            successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: true,
            todoToEdit: currentState.todoToEdit, showViewModal: false, pocoToView: null, newTodo: null
          }
 
  case todoActions.DELETE_TODO_REQUEST:
        return {
            ...currentState, pocos:currentState.todos, poco:null, isFetching: true, error: null,
            successMsg:null, showDeleteModal: true, todoToDelete: action.poco, showEditModal: false,
            todoToEdit: null,showViewModal: false, pocoToView: null, newTodo: null,
          }
 
  case todoActions.DELETE_TODO_SUCCESS:
  const filteredTodos = currentState.todos.filter((todo) => todo._id !== currentState.todoToDelete._id)
        return {
            ...currentState, pocos:filteredTodos, poco:null, isFetching: false, error: null,
            successMsg:action.message, showDeleteModal: false, todoToDelete: null, showEditModal:false,
            todoToEdit: action.poco, showViewModal: false, pocoToView: null, newTodo: null,
          }
 
  case todoActions.DELETE_TODO_FAILED:
        return {
            ...currentState, pocos:currentState.todos, poco:null, isFetching: false, error: action.error,
            successMsg:null, showDeleteModal: true, todoToDelete: null, showEditModal: false,
            todoToEdit: null, showViewModal: false, pocoToView: null, newTodo: null
          }
  
  case modalActions.SHOW_EDIT_MODAL:
        return {
          ...currentState, pocos:currentState.todos, poco:null, isFetching: false, error: null,
          successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: true,
          todoToEdit: action.poco, showViewModal: false, pocoToView: null, newTodo: null,
        }
 
  case modalActions.HIDE_EDIT_MODAL:
        return {
          ...currentState, pocos:currentState.todos, poco:null, isFetching: false, error: null,
          successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
          todoToEdit: null, showViewModal: false, pocoToView: null, newTodo: null,
        };

  case modalActions.SHOW_DELETE_MODAL:
        return {
          ...currentState, pocos:currentState.todos, poco:null, isFetching: false, error: null,
          successMsg:null, showDeleteModal: true, todoToDelete: action.poco, showEditModal: false,
          todoToEdit: null, showViewModal: false, pocoToView: null, newTodo: null,
        }
 
  case modalActions.HIDE_DELETE_MODAL:
        return {
          ...currentState, pocos:currentState.todos, poco:null, isFetching: false, error: null,
          successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
          todoToEdit: null, showViewModal: false, pocoToView: null, newTodo: null,
        };

  case modalActions.SHOW_VIEW_MODAL:
      return {
          ...currentState, pocos:currentState.todos, poco:null, isFetching: false, error: null,
          successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
          todoToEdit: null, showViewModal:true, pocoToView: action.poco, newTodo: null,
        }
  case modalActions.HIDE_VIEW_MODAL: 
        return {
          ...currentState, pocos:currentState.todos, poco:null, isFetching: false, error: null,
          successMsg:null, showDeleteModal: false, todoToDelete: null, showEditModal: false,
          todoToEdit: null, showViewModal: false, pocoToView: null, newTodo: null,
        };
      
    default:
       return currentState;
  }
}