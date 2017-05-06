import React, { Component, PropTypes } from 'react'
import Header from './header';
import Footer from './footer';
import NewTemplateForm from './cabinetComponents/newTemplate';
import NewSiteForm from './cabinetComponents/newSite';

export default class Cabinet extends Component {
    render() {
        return <div>
            <Header/>
            <div id="fh5co-main">
                <div className="container"> 
                    <div className="col-sm-6 col-md-4">  
                        <NewTemplateForm/>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <NewSiteForm/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    }
}