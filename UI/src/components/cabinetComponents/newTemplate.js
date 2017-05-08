import React, { Component, PropTypes } from 'react'

export default class NewTemplateForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            templateName: ''
        };
    }

    handleChange(event) {
        this.state.templateName = event.target.value;
    }

    createNewTemplate() {
        fetch('/api/templates/' + this.state.templateName,
            {
                method: 'POST',
                credentials: "same-origin",
                headers: {
					'Content-Type': 'application/json'
				}
            })
        .then(result => result.body.getReader().read())
		.then(res => new TextDecoder().decode(res.value))
        .then(templateName => {
            localStorage.setItem("templateName", templateName);
            window.location.replace('templateEditor.html');
        });
    }

    render() {
        return <div>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">Имя шаблона</span>
                    <input type="text" className="form-control" placeholder="Имя шаблона"
                    aria-describedby="basic-addon1" onChange={this.handleChange.bind(this)}/>

                    <button type="button" className="btn btn-default navbar-btn" 
                    onClick={this.createNewTemplate.bind(this)}>Создать</button>
                    
                </div>
            </div>
        }
}