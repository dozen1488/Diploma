import React, { Component, PropTypes } from 'react'

export default class NewPageForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            pageName: ''
        };
    }

    handleChange(event) {
        this.state.pageName = event.target.value;
    }

    createNewPage() {
        fetch('/api/sites/' + localStorage.getItem("siteName") + '/' + this.state.pageName,
            {
                method: 'POST',
                credentials: "same-origin",
                headers: {
					'Content-Type': 'application/json'
				}
            })
        .then(result => result.body.getReader().read())
		.then(res => new TextDecoder().decode(res.value))
        .then(pageName => {
            localStorage.setItem("pageName", pageName);
            window.location.replace('pageEditor.html');
        });
    }

    render() {
        return <div>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">Имя страницы</span>
                    <input type="text" className="form-control" placeholder="Имя страницы"
                    aria-describedby="basic-addon1" onChange={this.handleChange.bind(this)}/>

                    <button type="button" className="btn btn-default navbar-btn" 
                    onClick={this.createNewPage.bind(this, event)}>Создать</button>
                    
                </div>
            </div>
        }
}