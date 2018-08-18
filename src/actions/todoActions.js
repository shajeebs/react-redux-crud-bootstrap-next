import { todoActions, modalActions } from '../types/actionTypes';

//const apiUrl = "http://localhost:3033/todo";
const apiUrl = "https://nodesmallapp.herokuapp.com/todo";

export const addTodo = (dataToAdd) => {
  var formData = new FormData();
  for ( var key in dataToAdd ) {
      if(!['_id', 'created', 'modified'].includes(key)){
        console.log(`Key:${key},Value:${dataToAdd[key]}`);
        formData.append(key, dataToAdd[key]);
      }
  }
  return (dispatch) => {
    dispatch(addTodoRequest(dataToAdd));
    return fetch(apiUrl, {
      method:'post',
      body: formData,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(addTodoRequestSuccess(data, "Added successfully...!"))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addTodoRequestFailed(error))
        })
      }
    })
  }
}
export const addTodoRequest = (pocoData) => { return { type: todoActions.ADD_TODO_REQUEST, poco:pocoData } }
export const addTodoRequestSuccess = (pocoData, message) => { return { type: todoActions.ADD_TODO_REQUEST_SUCCESS, poco:pocoData, message:message } }
export const addTodoRequestFailed = (error) => { return { type: todoActions.ADD_TODO_REQUEST_FAILED, error } }


export const fetchPocos = () => {
  return (dispatch) => {
    dispatch(fetchPocosRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchPocosSuccess(data, "Fetched successfully...!"));
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
export const fetchPocosSuccess = (pocos,message) => { return { type: todoActions.FETCH_TODOS_SUCCESS, pocos: pocos, message: message, receivedAt: Date.now } }
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
export const fetchPocosuccess = (pocoData,message) => { return { type: todoActions.FETCH_TODO_SUCCESS, poco: pocoData, message: message, receivedAt: Date.now } }
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
            dispatch(editTodoSuccess(data,"Edited successfully...!"));
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

export const editTodoRequest = (pocoData) => { return { type:todoActions.EDIT_TODO_REQUEST, poco:pocoData } }
export const editTodoSuccess = (pocoData, message) => { return { type:todoActions.EDIT_TODO_SUCCESS, poco:pocoData, message:message } }
export const editTodoFailed = (error) => { return { type:todoActions.EDIT_TODO_FAILED, error } }

export const deleteTodo = (pocoData) => {
  const deleteUrl = `${apiUrl}/${pocoData._id}`;
  return (dispatch) => {
    dispatch(deleteTodoRequest(pocoData));
    return fetch(deleteUrl ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteTodoSuccess(data, "Deleted successfully...!"));
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

export const deleteTodoRequest = (pocoData) => { return { type:todoActions.DELETE_TODO_REQUEST, poco:pocoData } }
export const deleteTodoSuccess = (pocoData, message) => { return { type:todoActions.DELETE_TODO_SUCCESS, poco:pocoData, message:message } }
export const deleteTodoFailed = (error) => { return { type:todoActions.DELETE_TODO_FAILED, error } }

//Modal Popups
export const showAddModal = () => { return { type: modalActions.SHOW_ADD_MODAL, poco: null } }
export const hideAddModal = () => { return { type: modalActions.HIDE_ADD_MODAL } }
export const showEditModal = (pocoToEdit) => { return { type:modalActions.SHOW_EDIT_MODAL, poco:pocoToEdit } }
export const hideEditModal = () => { return { type:modalActions.HIDE_EDIT_MODAL } }
export const showDeleteModal = (pocoToDelete) => { return { type:modalActions.SHOW_DELETE_MODAL, poco:pocoToDelete } }
export const hideDeleteModal = () => { return { type:modalActions.HIDE_DELETE_MODAL } }
export const showViewModal = (inData) => { return { type: modalActions.SHOW_VIEW_MODAL, poco: inData } }
export const hideViewModal = () => { return { type: modalActions.HIDE_VIEW_MODAL } }