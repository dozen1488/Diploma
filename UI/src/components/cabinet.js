import React, { Component, PropTypes } from 'react'
import Header from './header';
import Footer from './footer';
import NewTemplateForm from './cabinetComponents/newTemplate';
import NewSiteForm from './cabinetComponents/newSite';
import NewComponentForm from './cabinetComponents/newComponent';

export default class Cabinet extends Component {

    constructor(props) {
        super(props);
        fetch('/api/templates',
            {
                method: 'GET',
                credentials: "same-origin",
                headers: {
					'Content-Type': 'application/json'
				}
            })
            .then(result => result.body.getReader().read())
            .then(res => new TextDecoder().decode(res.value))
            .then(templateList => {
                console.log(JSON.parse(templateList));
            });
    }

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
                    <div className="col-sm-6 col-md-4">
                        <NewComponentForm/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    }
}