import React, { Component, PropTypes } from 'react'

export default class ComponentList extends Component {
    
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.getComponents(this);
    }

    getComponents(self) {
        fetch('/api/components',
        {
            method: 'GET',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(components => {
            self.setState((prevstate) => {
                prevstate.componentList = components;
            })
        })
    }

    getInitialState() {
        return {
            componentList: []
        };
    }

    editComponent(templateName) {
        localStorage.setItem("componentName", templateName);
        window.location.replace('componentEditor.html');
    }

    deleteComponent(componentName) {
        let self = this;
        fetch('/api/components/' + componentName,
        {
            method: 'DELETE',
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            self.getComponents(self);
        })
    }

    render() {
        let components = this.state.componentList.map( componentName => {
            return (
                <div className="container">
                    <p>
                        <h3>{componentName}</h3>
                    </p>
                    <div className="btn-group" role="group" aria-label="...">

                        <button type="button" className="btn" 
                        onClick={this.editComponent.bind(this, componentName)}>Edit</button>

                        <button type="button" className="btn"
                        onClick={this.deleteComponent.bind(this, componentName)}>Delete</button>
                    </div>
                </div>
            );
        })

        return <div className="col-md-4 thumbnail">
        <h2>Компоненты</h2>
            {components}
        </div>
        }
}