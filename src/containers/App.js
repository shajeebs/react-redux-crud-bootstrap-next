import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import App from '../components/App';
import * as accountActions from '../actions/accountActions';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAppState: state.appState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  //you can now say this.props.mappedAppActions
    mappedShowAccounts: () => dispatch(accountActions.fetchAccounts()),
    //mappedAddNewEmp: todo => dispatch(empActions.addNewEmp(todo))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

 