import React, { Component, PropTypes } from 'react'
import CodeMirror from 'react-codemirror';

export default class TemplateEditor extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        fetch('../api/templates')
        .then(response => console.log(response));
    }

    getInitialState() {
        return {
            code: "// Code",
        };
    }

    updateCode(newCode) {
        this.setState({
            code: newCode,
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
        return <CodeMirror style={style} value={this.state.code} onChange={this.updateCode.bind(this)} 
            options={options}/>
    	}
}