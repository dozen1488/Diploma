import React, { Component, PropTypes } from 'react'

export default class NewSiteForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            siteName: ''
        };
    }

    handleChange(event) {
        this.state.siteName = event.target.value;
    }

    createNewSite() {
        fetch('/api/sites/' + this.state.siteName,
            {
                method: 'POST',
                credentials: "same-origin",
                headers: {
					'Content-Type': 'application/json'
				}
            })
        .then(result => result.body.getReader().read())
		.then(res => new TextDecoder().decode(res.value))
        .then(siteName => {
            localStorage.setItem("siteName", this.state.siteName);
            window.location.replace('siteEditor.html');
        });
    }

    render() {
        return <div>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">Имя сайта</span>
                    <input type="text" className="form-control" placeholder="Имя сайта"
                    aria-describedby="basic-addon1" onChange={this.handleChange.bind(this)}/>

                    <button type="button" className="btn btn-default navbar-btn" 
                    onClick={this.createNewSite.bind(this, event)}>Создать</button>
                    
                </div>
            </div>
        }
}