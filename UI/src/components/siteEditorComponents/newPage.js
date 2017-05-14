import React, { Component, PropTypes } from 'react'
import Dropdown from 'react-dropdown'

export default class NewPageForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        let self = this;
        fetch('/api/templates',
            {
                method: 'GET',
                credentials: "same-origin",
                headers: {
					'Content-Type': 'application/json'
				}
            })
            .then(response => response.json())
            .then(templates => {
                self.setState((prevstate) => {
                    prevstate.availableTemps = templates;
                    return prevstate;
                });
            });
    }

    getInitialState() {
        return {
            pageName: '',
            tempName: '',
            availableTemps: []
        };
    }

    templateNameChange(event) {
        this.setState((prevstate) => {
            prevstate.tempName = event.value;
            return prevstate;
        });
    }

    pageNameChange(event) {
        let pagename = event.target.value;
        this.setState((prevstate) => {
            prevstate.pageName = pagename;
            return prevstate;
        });
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
            localStorage.setItem("templateName", this.state.tempName);
            window.location.replace('pageEditor.html');
        });
    }

    render() {
        const options = this.state.availableTemps;
        let choosenTemplate = this.state.tempName;
        return <div>
            <Dropdown options={options} onChange={this.templateNameChange.bind(this)}
            value={choosenTemplate}
            placeholder="Выберите шаблон" />

            <input type="text" className="form-control" placeholder="Имя страницы"
            aria-describedby="basic-addon1" onChange={this.pageNameChange.bind(this)}/>

            <button type="button" className="btn btn-default navbar-btn" 
            onClick={this.createNewPage.bind(this, event)}>Создать</button>
            
        </div>
        }
}