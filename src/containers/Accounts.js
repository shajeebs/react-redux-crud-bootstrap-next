import { connect } from 'react-redux';
import * as accountActions from '../actions/accountActions';
import Accounts from '../components/Account/Accounts';
 
// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedPocoState: state.accountState
    //,goBack: ownProps.history.goBack
  }
}
 
// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccounts: () => dispatch(accountActions.fetchAccounts()),
    mappedEditAccount: dataToEdit => dispatch(accountActions.editAccount(dataToEdit)),
    mappedAddNewAccount: dataToAdd => dispatch(accountActions.addNewAccount(dataToAdd)),
    mappedshowAddModal: () => dispatch(accountActions.showEditModal(null)),
    mappedhideAddModal: () => dispatch(accountActions.hideAddModal()),
    mappedshowViewModal: dataToView => dispatch(accountActions.showViewModal(dataToView)),
    mappedhideViewModal:() => dispatch(accountActions.hideViewModal()),
    mappedshowEditModal: dataToEdit => dispatch(accountActions.showEditModal(dataToEdit)),
    mappedhideEditModal: () => dispatch(accountActions.hideEditModal()),
    mappedDeleteAccount: dataToDelete => dispatch(accountActions.deleteAccount(dataToDelete)),
    mappedshowDeleteModal: dataToDelete => dispatch(accountActions.showDeleteModal(dataToDelete)),
    mappedhideDeleteModal: () => dispatch(accountActions.hideDeleteModal())
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Accounts);
