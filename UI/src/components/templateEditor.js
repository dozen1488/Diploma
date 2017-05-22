import React, { Component, PropTypes } from 'react'
import CodeMirror from 'react-codemirror';

export default class TemplateEditor extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }

    componentDidMount() {
        fetch('/api/templates/' + localStorage.getItem("templateName"),
            {
                method: 'GET',
                credentials: "same-origin",
                headers: {
					'Content-Type': 'application/json'
				}
            })
            .then(result => result.text())
            .then(templateText => {
                debugger;
                this.updateCode(templateText);
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

    saveTemplate() {
        fetch('/api/templates/' + localStorage.getItem("templateName"),
            {
                method: 'PUT',
                credentials: "same-origin",
                body: this.state.code
            })
            .then(() => {
                window.location.replace('cabinet.html')
            });
    }

    render() {
        var options = {
            lineNumbers: true,
            mode: "htmlmixed"
        };
        return <div> 
            <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} 
            options={options}/>
            <button type="button" className="btn btn-primary" onClick={this.saveTemplate.bind(this)}>Сохранить</button>
        </div>
    	}
}