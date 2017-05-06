import React, { Component, PropTypes } from 'react'
import Header from './header';
import Footer from './footer';
import Login from './loginComponents/loginForm'

export default class App extends Component {
    render() {
        return <div>
            <Header/>
            <Login/>
            <Footer/>
        </div>
    }
}