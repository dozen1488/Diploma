import React, { Component, PropTypes } from 'react'
import CodeMirror from 'react-codemirror';

export default class TemplateEditor extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        fetch('/api/templates/' + localStorage.getItem("templateName"),
            {
                method: 'GET',
                credentials: "same-origin",
                headers: {
					'Content-Type': 'application/json'
				}
            })
            .then(result => result.body.getReader().read())
            .then(res => new TextDecoder().decode(res.value))
            .then(templateText => {
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
        var style = {
            height: '100vh'
        }
        return <div> 
            <CodeMirror style={style} value={this.state.code} onChange={this.updateCode.bind(this)} 
            options={options}/>
            <button type="button" className="btn btn-primary" onClick={this.saveTemplate.bind(this)}>Сохранить</button>
            <form action="/api/templates/fsdf" method="put" enctype="multipart/form-data">
                <input type="file" name="uploadedFile" />
                <input type="submit" value="Загрузить" />
            </form>
        </div>
    	}
}