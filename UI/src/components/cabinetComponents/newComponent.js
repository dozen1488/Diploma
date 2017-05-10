import React, { Component, PropTypes } from 'react'

export default class NewComponentForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            componentName: ''
        };
    }

    handleChange(event) {
        this.state.componentName = event.target.value;
    }

    createNewTemplate() {
        fetch('/api/components/' + this.state.componentName,
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
            localStorage.setItem("componentName", templateName);
            window.location.replace('componentEditor.html');
        });
    }

    render() {
        return <div>
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">Имя компонента</span>
                    <input type="text" className="form-control" placeholder="Имя компонента"
                    aria-describedby="basic-addon1" onChange={this.handleChange.bind(this)}/>

                    <button type="button" className="btn btn-default navbar-btn" 
                    onClick={this.createNewTemplate.bind(this)}>Создать</button>
                    
                </div>
            </div>
        }
}