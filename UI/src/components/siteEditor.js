import React, { Component, PropTypes } from 'react'
import Header from './header';
import Footer from './footer';
import NewPageForm from './siteEditorComponents/newPage';
import PageList from './siteEditorComponents/pageList';

export default class SiteEditor extends Component {
    render() {
        return <div>
            <Header/>
            <PageList/>
            <div className="col-sm-6 col-md-4">
                <NewPageForm/>
            </div>
            <Footer/>
        </div>
    }
}