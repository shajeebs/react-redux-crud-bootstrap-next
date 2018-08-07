import { todoActions, modalActions } from '../constants/actionTypes';

const apiUrl = "http://localhost:3033/todo";
//const apiUrl = "https://nodesmallapp.herokuapp.com/todo";

export const addNewTodo = (dataToAdd) => {
  var formData = new FormData();
  for ( var key in dataToAdd ) {
      formData.append(key, dataToAdd[key]);
  }
  return (dispatch) => {
    dispatch(addNewTodoRequest(dataToAdd));
    return fetch(apiUrl, {
      method:'post',
      body: formData,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(addNewTodoRequestSuccess(data, "data.message"))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewTodoRequestFailed(error))
        })
      }
    })
  }
}
export const addNewTodoRequest = (todo) => { return { type: todoActions.ADD_NEW_TODO_REQUEST, todo } }
export const addNewTodoRequestSuccess = (todo, message) => { return { type: todoActions.ADD_NEW_TODO_REQUEST_SUCCESS, todo:todo, message:message } }
export const addNewTodoRequestFailed = (error) => { return { type: todoActions.ADD_NEW_TODO_REQUEST_FAILED, error } }


export const fetchPocos = () => {
  return (dispatch) => {
    dispatch(fetchPocosRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchPocosSuccess(data,"Fetched successfully"));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchPocosFailed(error));
                    })
                  }
                })
  }
}

export const fetchPocosRequest = () => { return { type:todoActions.FETCH_TODOS_REQUEST } }
export const fetchPocosSuccess = (todos,message) => { return { type: todoActions.FETCH_TODOS_SUCCESS, todos: todos, message: message, receivedAt: Date.now } }
export const fetchPocosFailed = (error) => { return { type:todoActions.FETCH_TODOS_FAILED, error } }

export const fetchTodoById = (todoId) => {
  const url = `${apiUrl}/${todoId}`;
  return (dispatch) => {
    dispatch(fetchTodoRequest());
      // Returns a promise
      return fetch(url)
             .then(response => {
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchPocosuccess(data.todo[0], data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchTodoFailed(error));
                 })
               }
             })

  }
}

export const fetchTodoRequest = () => { return { type:todoActions.FETCH_TODO_REQUEST } }
export const fetchPocosuccess = (todo,message) => { return { type: todoActions.FETCH_TODO_SUCCESS, todo: todo, message: message, receivedAt: Date.now } }
export const fetchTodoFailed = (error) => { return { type:todoActions.FETCH_TODO_FAILED, error } }

export const editTodo = (dataToEdit) => {
  const editUrl = `${apiUrl}/${dataToEdit._id}`;
  var formData = new FormData();
  for ( var key in dataToEdit ) {
      formData.append(key, dataToEdit[key]);
  }
  return (dispatch) => {
      dispatch(editTodoRequest(dataToEdit));
      return fetch(editUrl, {
        method:'put',
        body:formData
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editTodoSuccess(data,"data.message"));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editTodoFailed(error));
          })
        }
      })
    }
}

export const editTodoRequest = (todo) => { return { type:todoActions.EDIT_TODO_REQUEST, todo } }
export const editTodoSuccess = (todo,message) => { return { type:todoActions.EDIT_TODO_SUCCESS, todo:todo, message:message } }
export const editTodoFailed = (error) => { return { type:todoActions.EDIT_TODO_FAILED, error } }

export const deleteTodo = (todo) => {
  const deleteUrl = `${apiUrl}/${todo._id}`;
  return (dispatch) => {
    dispatch(deleteTodoRequest(todo));
    return fetch(deleteUrl ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteTodoSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteTodoFailed(error));
        })
      }
    })
  }
}

export const deleteTodoRequest = (todo) => { return { type:todoActions.DELETE_TODO_REQUEST, todo } }
export const deleteTodoSuccess = (message) => { return { type:todoActions.DELETE_TODO_SUCCESS, message:message } }
export const deleteTodoFailed = (error) => { return { type:todoActions.DELETE_TODO_FAILED, error } }

//Modal Popups
export const showAddModal = () => { return { type: modalActions.SHOW_ADD_MODAL, poco: null } }
export const hideAddModal = () => { return { type: modalActions.HIDE_ADD_MODAL } }
export const showEditModal = (todoToEdit) => { return { type:modalActions.SHOW_EDIT_MODAL, todo:todoToEdit } }
export const hideEditModal = () => { return { type:modalActions.HIDE_EDIT_MODAL } }
export const showDeleteModal = (todoToDelete) => { return { type:modalActions.SHOW_DELETE_MODAL, todo:todoToDelete } }
export const hideDeleteModal = () => { return { type:modalActions.HIDE_DELETE_MODAL } }
export const showViewModal = (inData) => { return { type: modalActions.SHOW_VIEW_MODAL, poco: inData } }
export const hideViewModal = () => { return { type: modalActions.HIDE_VIEW_MODAL } }