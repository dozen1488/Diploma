import React, { Component, PropTypes } from 'react'
import Header from './header';
import Footer from './footer';
import NewPageForm from './siteEditorComponents/newPage';
import PageList from './siteEditorComponents/pageList';
import NewImageForm from './siteEditorComponents/uploadImage';

export default class SiteEditor extends Component {
    render() {
        return <div>
            <Header/>
            <div className="container">
            <NewImageForm/>
            </div>
            <div className="container">
                <PageList/>
            </div>
            <div className="container">
                <NewPageForm/>
            </div>
            <Footer/>
        </div>
    }
}