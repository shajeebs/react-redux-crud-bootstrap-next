import { connect } from 'react-redux';
import * as AccountActions from '../actions/AccountActions';
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
    fetchAccounts: () => dispatch(AccountActions.fetchAccounts()),
    mappedEditAccount: dataToEdit => dispatch(AccountActions.editAccount(dataToEdit)),
    mappedAddNewAccount: dataToAdd => dispatch(AccountActions.addNewAccount(dataToAdd)),
    mappedshowAddModal: () => dispatch(AccountActions.showEditModal(null)),
    mappedhideAddModal: () => dispatch(AccountActions.hideAddModal()),
    mappedshowViewModal: dataToView => dispatch(AccountActions.showViewModal(dataToView)),
    mappedhideViewModal:() => dispatch(AccountActions.hideViewModal()),
    mappedshowEditModal: dataToEdit => dispatch(AccountActions.showEditModal(dataToEdit)),
    mappedhideEditModal: () => dispatch(AccountActions.hideEditModal()),
    mappedDeleteAccount: dataToDelete => dispatch(AccountActions.deleteAccount(dataToDelete)),
    mappedshowDeleteModal: dataToDelete => dispatch(AccountActions.showDeleteModal(dataToDelete)),
    mappedhideDeleteModal: () => dispatch(AccountActions.hideDeleteModal())
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Accounts);
