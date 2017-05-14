import React, { Component, PropTypes } from 'react'
import CodeMirror from 'react-codemirror';

export default class ComponentEditor extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        fetch('/api/components/' + localStorage.getItem("componentName"),
            {
                method: 'GET',
                credentials: "same-origin",
                headers: {
					'Content-Type': 'application/json'
				}
            })
            .then(result => result.body.getReader().read())
            .then(res => new TextDecoder().decode(res.value))
            .then(componentText => {
                this.updateCode(componentText);
            });
    }

    getInitialState() {
        return {
            code: "<div></div>",
        };
    }

    updateCode(newCode) {
        this.setState({
            code: newCode,
        });
    }

    saveComponent() {
        fetch('/api/components/' + localStorage.getItem("componentName"),
            {
                method: 'PUT',
                credentials: "same-origin",
                headers: {
					'Content-Type': 'application/json'
				},
                body: '"' + this.state.code + '"'
            })
            .then(result => {
                window.location.replace('cabinet.html')
            });
    }

    render() {
        var options = {
            lineNumbers: true,
            mode: "htmlmixed"
        };
        var style = {
            height: '100vh'
        }
        return <div> 
            <CodeMirror style={style} value={this.state.code} onChange={this.updateCode.bind(this)} 
            options={options}/>
            <button type="button" className="btn btn-primary" onClick={this.saveComponent.bind(this)}>Сохранить</button>
        </div>
    	}
}