
const INITIAL_STATE = { pocos:[], poco:null, isFetching: false,

  error: null, successMsg:null, pocoToDelete: null, showEditModal: false, pocoToEdit: null, newEmp: null, showDeleteModal: false

}

 

export const AccountReducer = (currentState = INITIAL_STATE, action) => {

  switch(action.type) {

      case 'SHOW_ADD_MODAL': return {...currentState, pocos:currentState.pocos, poco:null,

        isFetching:false, error:null, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:true, pocoToEdit:null, newEmp: null}

      case 'HIDE_ADD_MODAL': return {...currentState, pocos:currentState.pocos, poco:null,

        isFetching:false, error:null, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null, newEmp: null}

      case 'SHOW_VIEW_MODAL': return {...currentState, pocos:currentState.pocos, poco:null,

        isFetching:false, error:null, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:true, pocoToView:action.poco, showEditModal:false, pocoToEdit:null, newEmp: null}

      case 'HIDE_VIEW_MODAL': return {...currentState, pocos:currentState.pocos, poco:null,

        isFetching:false, error:null, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null, newEmp: null}

      case 'SHOW_EDIT_MODAL': return {...currentState, pocos:currentState.pocos, poco:null,

        isFetching:false, error:null, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:true, pocoToEdit:action.poco, newEmp: null}

      case 'HIDE_EDIT_MODAL': return {...currentState, pocos:currentState.pocos, poco:null,

        isFetching:false, error:null, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null, newEmp: null}

      case 'SHOW_DELETE_MODAL': return {...currentState, pocos:currentState.pocos, poco:null,

        isFetching:false, error:null, successMsg:null, showDeleteModal:true, pocoToDelete:action.poco, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null, newEmp: null}

      case 'HIDE_DELETE_MODAL': return {...currentState, pocos:currentState.pocos, poco:null,

        isFetching:false, error:null, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null, newEmp: null}

 

      case 'FETCH_POCOS_REQUEST': return {...currentState, pocos:[], poco:null,

        isFetching:true, error:null, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null}

      case 'FETCH_POCOS_SUCCESS': return {...currentState, pocos:action.pocos, poco:null,

        isFetching:false, error:null, successMsg:action.message, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null}

      case 'FETCH_POCOS_FAILED': return {...currentState, pocos:[], poco:null,

      isFetching:false, error:action.error, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null}

      case 'FETCH_POCO_REQUEST': return {...currentState, pocos:currentState.pocos, poco:null,

        isFetching:true, error:null, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null}

      case 'FETCH_POCO_SUCCESS': return {...currentState, pocos:currentState.pocos, poco:action.poco,

        isFetching:false, error:null, successMsg:action.message, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null}

      case 'FETCH_POCO_FAILED': return {...currentState, pocos:[], poco:null,

        isFetching:false, error:action.error, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null}

      case 'ADD_POCO_REQUEST': return {...currentState, pocos:currentState.pocos, poco:null, 

        isFetching:true, error:null, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null, newEmp: action.poco}

      case 'ADD_POCO_SUCCESS':

      console.log(action.poco);

      console.log(currentState);

        return {...currentState, pocos:[...currentState.pocos, action.poco], poco:null,

          isFetching:false, error:null, successMsg:action.message, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null, newEmp: action.poco}

      case 'ADD_POCO_FAILED': return {...currentState, pocos:currentState.pocos, poco:null,

        isFetching:false, error:action.error, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null, newEmp:null}

      case 'EDIT_POCO_REQUEST': return {...currentState, pocos:currentState.pocos, poco:null,

        isFetching:true, error:null, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:true, pocoToEdit:action.poco}

      case 'EDIT_POCO_SUCCESS':

      console.log(action.poco);

      console.log(currentState);

        const updatedList = currentState.pocos.map((csv) => { if(csv._id !== action.poco._id){ return csv; } return{ ...csv, ...action.poco }; })

        return {...currentState, pocos:updatedList, poco:null,

          isFetching:false, error:null, successMsg:action.message, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:true, pocoToEdit:action.poco, newEmp: null}

      case 'EDIT_POCO_FAILED': return {...currentState, pocos:currentState.pocos, poco:null, 

        isFetching:false, error:action.error, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:true, pocoToEdit:currentState.poco, newEmp:null}

      case 'DELETE_POCO_REQUEST': return {...currentState, pocos:currentState.pocos, poco:null,

        isFetching:true, error:null, successMsg:null, showDeleteModal:true, pocoToDelete:action.poco, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null}

      case 'DELETE_POCO_SUCCESS':

        const filteredEmps = currentState.pocos.filter((f) => f._id !== currentState.pocoToDelete._id);

        return {...currentState, pocos:filteredEmps, poco:null,

          isFetching:false, error:null, successMsg:action.message, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null, newEmp: null}

      case 'DELETE_POCO_FAILED': return {...currentState, pocos:currentState.pocos, poco:null,

        isFetching:false, error:action.error, successMsg:null, showDeleteModal:false, pocoToDelete:null, showViewModal:false, pocoToView:null, showEditModal:false, pocoToEdit:null, newEmp:null}

      default: return currentState;

    }

}