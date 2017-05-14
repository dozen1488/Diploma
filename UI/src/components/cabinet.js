import React, { Component, PropTypes } from 'react'

import Header from './header';
import Footer from './footer';

import NewTemplateForm from './cabinetComponents/newTemplate';
import NewSiteForm from './cabinetComponents/newSite';
import NewComponentForm from './cabinetComponents/newComponent';
import TemplateList from './cabinetComponents/templateList';
import ComponentList from './cabinetComponents/componentsList';
import SiteList from './cabinetComponents/sitesList';

export default class Cabinet extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Header/>
            <div id="fh5co-main">
                <div className="container"> 
                    <TemplateList/>
                    <ComponentList/>
                    <SiteList/>
                </div>
                <div className="container"> 
                    <div className="col-sm-6 col-md-4">  
                        <NewTemplateForm/>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <NewSiteForm/>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <NewComponentForm/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    }
}