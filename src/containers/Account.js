import { connect } from 'react-redux';
import * as accountActions from '../actions/accountActions';
import Account from '../components/Account/EditForm';

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    mappedPocoState: state.accountState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    mappedfetchAccountById: AccountId => dispatch(accountActions.fetchAccountById(AccountId))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Account);

 