import React, { Component, PropTypes } from 'react'

export default class PageList extends Component {
    
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.getSitePages(this);
    }

    getSitePages(self) {
        fetch('/api/sites/' + localStorage.getItem("siteName"),
        {
            method: 'GET',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(pages => {
            self.setState((prevstate) => {
                prevstate.pageList = pages;
            })
        })
    }

    getInitialState() {
        return {
            pageList: []
        };
    }

    editPage(pageName) {
        localStorage.setItem("templateName", '');
        localStorage.setItem("pageName", pageName);
        window.location.replace('pageEditor.html');
    }

    deletePage(pageName) {
        let self = this;
        fetch('/api/sites/' + localStorage.getItem("siteName") + "/" + pageName,
        {
            method: 'DELETE',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            self.getSitePages(self);
        })
    }

    render() {
        let pages = this.state.pageList.map( pageName => {
            return (
                <div className="container">
                    <p>
                        <h3>{pageName}</h3>
                    </p>
                    <div className="btn-group" role="group" aria-label="...">

                        <button type="button" className="btn" 
                        onClick={this.editPage.bind(this, pageName)}>Edit</button>

                        <button type="button" className="btn"
                        onClick={this.deletePage.bind(this, pageName)}>Delete</button>
                    </div>
                </div>
            );
        })

        return <div className="col-md-4 thumbnail">
        <h2>Страницы</h2>
            {pages}
        </div>
        }
}