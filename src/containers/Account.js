import { connect } from 'react-redux';

import * as AccountActions from '../actions/empActions';

import Account from '../components/Account/Account';

 

// map state from store to props

const mapStateToProps = (state) => {

  //console.log(state);

  return {

    //you can now say this.props.mappedAppSate

    mappedPocoState: state.accountState

  }

}

 

// map actions to props

const mapDispatchToProps = (dispatch) => {

  return {

    //you can now say this.props.mappedAppActions

    mappedfetchEmpById: AccountId => dispatch(AccountActions.fetchEmpById(AccountId))

  }

}

 

export default connect(mapStateToProps,mapDispatchToProps)(Account);

 