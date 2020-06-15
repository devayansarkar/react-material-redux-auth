import React, { Component } from 'react';
import StyledFilledChipButton from '../../components/StyledFilledChipButton';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { InputAdornment, IconButton, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import ILoginPageProps from '../../models/props/pages/ILoginPageProps';
import logo from '../../logo.svg';
import IUserState from '../../models/auth/IUserState';

class Login extends Component<ILoginPageProps> {
    state = {
        password: {
            show: false,
            value: '',
            helperText: ''
        },
        email: {
            isTouched: false,
            isValid: false,
            value: '',
            helperText: ''
        },
        remember: {
            value: true
        }
    };

    constructor(props: ILoginPageProps) {
        super(props)
        this.checkSignInStatus(props.authentication, props.history)
    }

    componentDidUpdate(props: ILoginPageProps) {
        if (props.authentication.isAuthenticated) props.history.push('/')
    }
    checkSignInStatus(authentication: IUserState, history: any) {
        if (authentication.isAuthenticated) history.push('/')
        if (authentication.err && authentication.err.message) this.setState({
            ...this.state,
            errorNotifier: { show: true, message: authentication.err.message }
        })
    }

    emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const emailState = this.state.email
        if (emailState.isTouched) {
            this.checkEmail(event.target.value)
        } else {
            this.setState({ ...this.state, email: { ...emailState, value: event.target.value } })
        }
    }

    emailValidator = () => this.checkEmail(this.state.email.value)

    checkEmail = (receivedEmail: string) => {
        let validator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailState = this.state.email
        if (!validator.test(receivedEmail) && receivedEmail.length > 0) {
            this.setState({ ...this.state, email: { ...emailState, helperText: 'Email is not valid. Can you try again ?', isTouched: true, isValid: false } })
        } else {
            this.setState({ ...this.state, email: { ...emailState, isTouched: true, isValid: true, value: receivedEmail, helperText: '' } })
        }
    }

    passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const passwordState = this.state.password
        this.setState({ ...this.state, password: { ...passwordState, value: event.target.value } })
    }

    rememberMeChangeHandler = () => {
        const rememberMeState = this.state.remember
        this.setState({ ...this.state, remember: { ...rememberMeState, value: !rememberMeState.value } })
    }

    passwordViewChangeHandler = () => {
        const passwordState = this.state.password
        this.setState({ ...this.state, password: { passwordState, show: !passwordState.show } })
    }

    formValidator = () => !(this.state.email.isValid && this.state.password.value !== '')

    render() {
        return (
            <form>
                <Grid
                    container
                    spacing={3}
                    direction='column'
                    alignItems='center'
                    justify='center'
                    style={{ minHeight: '70vh' }}>
                    <Grid item xs={12}>
                        <img src={logo} className="App-logo" alt="logo" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            style={{ width: 250 }}
                            id="user-email"
                            label="Email"
                            error={!this.state.email.isValid && this.state.email.isTouched}
                            helperText={this.state.email.helperText}
                            onChange={this.emailChangeHandler}
                            onBlur={this.emailValidator}
                            variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            style={{ width: 250 }}
                            id="user-password"
                            label="Password"
                            variant="outlined"
                            type={this.state.password.show ? "text" : "password"}
                            onChange={this.passwordChangeHandler}
                            InputProps={{
                                endAdornment:
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.passwordViewChangeHandler}
                                            onMouseDown={(e) => e.preventDefault()}>
                                            {this.state.password.show ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                            }} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            value="checked"
                            checked={this.state.remember.value}
                            control={<Checkbox color="primary" />}
                            label="Remember me!"
                            onClick={this.rememberMeChangeHandler}
                            labelPlacement="end"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <StyledFilledChipButton
                            disabled={this.formValidator()}
                            background={'#001a33'}
                            title={'Sign in'}
                            onClick={() => {
                                this.props.login(this.state.email.value, this.state.password.value, true)
                            }} />
                    </Grid>
                </Grid >
                {
                    /**
                     * 
                     * Below code issues a warning when used in Strict mode.
                     * 
                     * Once the API is fixed, this needs to be updated.
                     * 
                     * It is a warning, no functionality is affected.
                     * 
                     */
                }
                {this.props.authentication.err && this.props.authentication.err.message && <Snackbar open={true} autoHideDuration={3000} >
                    <MuiAlert
                        elevation={3}
                        variant="filled"
                        severity="error" >
                        {this.props.authentication.err?.message}
                    </MuiAlert>
                </Snackbar>}
            </form >
        );
    }
}

export default Login;