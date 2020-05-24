import { connect } from 'react-redux'
import IApplicationState from '../models/auth/IApplicationState'
import { verifyUserAuthenticationSession } from '../store/auth/Thunk'
import Home from '../pages/home/Home'

const mapStateToProps = (state: IApplicationState) => ({
    authentication: state.authentication
});

export default connect(mapStateToProps, { session: verifyUserAuthenticationSession })(Home)