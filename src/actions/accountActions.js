const apiUrl = "http://localhost:3033/Account";

 

export const addNewAccount = (inData) => {
  //console.log(inData);
  return (dispatch) => {
    dispatch(addNewAccountRequest(inData));
    return fetch(apiUrl, {
      method: 'POST',
      body: inData,
    }).then(resp => {//console.log(resp);
      if(resp.ok){
        resp.json().then(data => { //console.log(data);
          dispatch(addNewAccountSuccess(data.Accountloyee, data.message));
        })
      } else {
        resp.json().then(err => {
          dispatch(addNewAccountFailed(err));
        })
      }
    })
  }
}
export const addNewAccountRequest = (inData) => { return{ type:'ADD_POCO_REQUEST', inData } }
export const addNewAccountSuccess = (inData, msg) => { return{ type:'ADD_POCO_SUCCESS', emp:inData, message: msg } }
export const addNewAccountFailed = (err) => { return{ type:'ADD_POCO_FAILED', err } }


export const fetchAccounts = () => {
  return (dispatch) => {
    dispatch(fetchAccountsRequest());
    return fetch(apiUrl).then(resp => {//console.log(resp);
      if(resp.ok){
        resp.json().then(data => {//console.log(data);
          dispatch(fetchAccountsSuccess(data , "Account fetched successfully...!"));
        })
      } else {
        resp.json().then(err => {
          dispatch(fetchAccountsFailed(err));
        })
      }
    })
  }
}
export const fetchAccountsRequest = () => { return{ type:'FETCH_POCOS_REQUEST' } }
export const fetchAccountsSuccess = (inDatas, msg) => { return{ type: 'FETCH_POCOS_SUCCESS', pocos: inDatas, message: msg, receivedAt: Date.now} }
export const fetchAccountsFailed = (err) => { return{ type:'FETCH_POCOS_FAILED', err } }
 
export const fetchAccountById = (id) => {
  return (dispatch) => {
    dispatch(fetchAccountRequest());
    return fetch(apiUrl + '/' + id).then(resp => {//console.log(resp);
      if(resp.ok){
        resp.json().then(data => {//console.log(data);
          dispatch(fetchAccountSuccess(data.Accountloyee[0], data.message));
        })
      }else{
        resp.json().then(err => {
          dispatch(fetchAccountFailed(err));
        })
      }
    })
  }
}
export const fetchAccountRequest = () => { return{ type:'FETCH_POCO_REQUEST' } }
export const fetchAccountSuccess = (inData, msg) => { return{type: 'FETCH_POCO_SUCCESS', emp: inData, message: msg, receivedAt: Date.now } }
export const fetchAccountFailed = (err) => { return{ type:'FETCH_POCO_FAILED', err } }
 

export const editAccount = (inData) => {
  return (dispatch) => {
    dispatch(editAccountRequest(inData));
    return fetch(apiUrl,{
      method: 'PUT',
      body: inData
    }).then(resp => {console.log(resp);
      if(resp.ok){
        resp.json().then(data => {console.log(data);
          dispatch(editAccountSuccess(data.Accountloyee, data.message));
        })
      }else {
        resp.json().then(err => {
          dispatch(editAccountFailed(err));
        })
      }
    });
  }
}

export const editAccountRequest = (inData) => { return{ type: 'EDIT_POCO_REQUEST', inData } }
export const editAccountSuccess = (inData, msg) => { return{ type: 'EDIT_POCO_SUCCESS', emp: inData, message: msg } }
export const editAccountFailed = (err) => { return{ type:'EDIT_POCO_FAILED', err } }

export const deleteAccount = (inData) => {
  return (dispatch) => {
    dispatch(deleteAccountRequest(inData));
    return fetch(apiUrl + '/' + inData._id ,{
      method:'DELETE'
    }).then(resp => {
      if(resp.ok){
        resp.json().then(data => {
          dispatch(deleteAccountSuccess(data.message));
        })
      }
      else{
        resp.json().then(err => {
          dispatch(deleteAccountFailed(err));
        })
      }
    })
  }
}
export const deleteAccountRequest = (inData) => { return{ type: 'DELETE_POCO_REQUEST', inData } }
export const deleteAccountSuccess = (msg) => { return{ type: 'DELETE_POCO_SUCCESS', message: msg } }
export const deleteAccountFailed = (err) => { return{ type:'DELETE_POCO_FAILED', err } }

 

export const showAddModal = () => { return { type: 'SHOW_ADD_MODAL', emp: null } }
export const hideAddModal = () => { return { type: 'HIDE_ADD_MODAL' } }
export const showViewModal = (inData) => { return { type: 'SHOW_VIEW_MODAL', emp: inData } }
export const hideViewModal = () => { return { type: 'HIDE_VIEW_MODAL' } }
export const showEditModal = (inData) => { return { type: 'SHOW_EDIT_MODAL', emp: inData } }
export const hideEditModal = () => { return { type: 'SHOW_EDIT_MODAL' } }
export const showDeleteModal = (inData) => { return{ type:'SHOW_DELETE_MODAL', emp: inData } }
export const hideDeleteModal = () => { return{ type: 'HIDE_DELETE_MODAL' } }

