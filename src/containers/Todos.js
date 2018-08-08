import { connect } from 'react-redux';
import * as todoActions from '../actions/todoActions';
import Todos from '../components/Todos';

const mapStateToProps = (state,ownProps) => {
  return {
    mappedTodoState: state.todoState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPocos: () => dispatch(todoActions.fetchPocos()),
    mappedshowViewModal: dataToView => dispatch(todoActions.showViewModal(dataToView)),
    mappedhideViewModal:() => dispatch(todoActions.hideViewModal()),
    mappedshowAddModal: () => dispatch(todoActions.showEditModal(null)),
    mappedhideAddModal: () => dispatch(todoActions.hideAddModal()),
    mappedAddNewPoco: dataToAdd => dispatch(todoActions.addTodo(dataToAdd)),
    mappedshowEditModal: todoToEdit => dispatch(todoActions.showEditModal(todoToEdit)),
    mappedhideEditModal: () => dispatch(todoActions.hideEditModal()),
    mappedEditPoco: todoToEdit => dispatch(todoActions.editTodo(todoToEdit)),
    mappedshowDeleteModal: pocoToDelete => dispatch(todoActions.showDeleteModal(pocoToDelete)),
    mappedhideDeleteModal: () => dispatch(todoActions.hideDeleteModal()),
    mappedDeletePoco: pocoToDelete => dispatch(todoActions.deleteTodo(pocoToDelete))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
