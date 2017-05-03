import React, { Component, PropTypes } from 'react'
import Header from './header';
import Footer from './footer';

export default class Index extends Component {
    render() {
        return <div>
            <Header/>
            <Footer/>
        </div>
    }
}