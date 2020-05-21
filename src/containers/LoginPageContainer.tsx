import { connect } from 'react-redux'
import IApplicationState from '../models/auth/IApplicationState'
import { loginUser } from '../store/auth/Thunk'
import Login from '../pages/authentication/Login'

const mapStateToProps = (state: IApplicationState) => ({
    authentication: state.authentication
});

export default connect(mapStateToProps, { login: loginUser })(Login)