import { connect } from 'react-redux';
import * as accountActions from '../actions/accountActions';
import Account from '../components/Account/Account';

// map state from store to props
const mapStateToProps = (state) => {
  //console.log(state);
  return {
    //you can now say this.props.mappedAppSte
    mappedPocoState: state.accountState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchAccountById: AccountId => dispatch(accountActions.fetchAccountById(AccountId))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Account);

 