import React, { Component } from 'react';
import IHomePageProps from '../../models/props/pages/IHomePageProps';
class Home extends Component<IHomePageProps> {
    constructor(props: any) {
        super(props)
        this.props.session();
    }
    render() {
        return <>
            <h1>Hello, Home page</h1>
            <button onClick={() => {
                this.props.history.push('/login')
            }}>Login</button>
            <button onClick={() => {
                this.props.history.push('/account')
            }}>Account</button>
        </>
            ;
    }
}

export default Home;