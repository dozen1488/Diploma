import React, { Component, PropTypes } from 'react'

export default class SiteList extends Component {
    
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.getSites(this);
    }

    getSites(self) {
        fetch('/api/sites',
        {
            method: 'GET',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(sites => {
            self.setState((prevstate) => {
                prevstate.siteList = sites;
            })
        })
    }

    getInitialState() {
        return {
            siteList: []
        };
    }

    editSite(siteName) {
        localStorage.setItem("siteName", siteName);
        window.location.replace('siteEditor.html');
    }

    deleteComponent(siteName) {
        let self = this;
        fetch('/api/sites/' + siteName,
        {
            method: 'DELETE',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            self.getSites(self);
        })
    }

    render() {
        let sites = this.state.siteList.map( siteName => {
            return (
                <div className="container">
                    <p>
                        <h3>{siteName}</h3>
                    </p>
                    <div className="btn-group" role="group" aria-label="...">

                        <button type="button" className="btn" 
                        onClick={this.editSite.bind(this, siteName)}>Edit</button>

                        <button type="button" className="btn"
                        onClick={this.deleteComponent.bind(this, siteName)}>Delete</button>
                    </div>
                </div>
            );
        })

        return <div className="col-md-4 thumbnail">
            {sites}
        </div>
        }
}