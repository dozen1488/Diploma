import React, { Component, PropTypes } from 'react'

export default class TemplateList extends Component {
    
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.getTemplates(this);
        

    }

    getTemplates(self) {
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
                prevstate.templateList = templates;
            })
        })
    }

    getInitialState() {
        return {
            templateList: []
        };
    }

    handleChange(event) {
        this.state.siteName = event.target.value;
    }

    editTemplate(templateName) {
        localStorage.setItem("templateName", templateName);
        window.location.replace('templateEditor.html');
    }

    deleteTemplate(templateName) {
        let self = this;
        fetch('/api/templates/' + templateName,
        {
            method: 'DELETE',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            self.getTemplates(self);
        })
    }

    render() {
        let templates = this.state.templateList.map( templateName => {
            return (
                <div className="container">
                    <p>
                        <h3>{templateName}</h3>
                    </p>
                    <div className="btn-group" role="group" aria-label="...">

                        <button type="button" className="btn" 
                        onClick={this.editTemplate.bind(this, templateName)}>Edit</button>

                        <button type="button" className="btn"
                        onClick={this.deleteTemplate.bind(this, templateName)}>Delete</button>
                    </div>
                </div>
            );
        })

        return <div className="col-md-4 thumbnail">
        <h2>Шаблоны</h2>
            {templates}
        </div>
        }
}