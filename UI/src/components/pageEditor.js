import React, { Component, PropTypes } from 'react'
import Sortable from 'sortablejs';

const bodyCode = `
    (
        function el(event){
            console.dir(event);
            event.srcElement.parentElement.innerText = event.srcElement.parentElement.childNodes[1].value;
        }
    )
    (event)
`

class PageEditor extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.getBody();
        this.getComponents();
    }

    getInitialState() {
        return {
            innerHTML: '',
            components: []
        }
    }

    getBody() {
        if(localStorage.getItem("templateName") != '')
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
                    this.setState((prevstate) => {
                        prevstate.innerHTML = templateText;
                    });
                    this.componentDidMount();
                });
        else {
            fetch('/api/sites/' + localStorage.getItem("siteName") + "/" + localStorage.getItem("pageName"),
                {
                    method: 'GET',
                    credentials: "same-origin",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(result => result.text())
                .then(templateText => {
                    this.setState((prevstate) => {
                        prevstate.innerHTML = templateText;
                    });
                    this.componentDidMount();
                });
        }
    }

    getComponent(componentName) {
        return fetch('/api/components/' + componentName,
            {
                method: 'GET',
                credentials: "same-origin",
                headers: {
					'Content-Type': 'application/json'
				}
            })
            .then(result => result.text());
    }

    getComponents() {
        let self = this;
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
            let componentObjects = [];
            Promise.all(components.map(name => self.getComponent(name)))
            .then(componentBodies => {
                debugger;
                let iteration = 0;
                components.forEach(component => {
                    componentObjects.push({
                        name: component,
                        body: componentBodies[iteration++]
                    });
                });
            })
            .then(() => componentObjects)
            .then(components => {
                self.setState(prevstate => {
                    prevstate.components = components;
                    return prevstate;
                });
                self.componentDidMount();
            })
        })
    }

    onEndStrategy(id) {
        return this.state.components.find(comp => comp.name == id).body;
    }

    componentDidMount() {
        let self = this;
        var el = document.getElementById('from');
        var sortable = Sortable.create(el,
        {
            group: {
                name: "components",
                put: [],
                pull: "clone",
                revertClone: true
            },
            sort: false,
            onEnd: (event) => {
                console.log(event);
                if(event.item.parentNode.id == "from") return;
                event.item.innerHTML = self.onEndStrategy.call(self, event.item.id);
            }
        });
        var eWcontainers = Array.prototype.slice.call(document.getElementsByClassName('EWcontainer'));
        eWcontainers = eWcontainers.forEach(container => {
            return Sortable.create(container,
            {
                group: {
                    name: "shared",
                    put: [ "components", "shared" ],
                    pull: true
                },
                sort: true
            });
        });
    }

    savePage() {
        fetch('/api/sites/' + localStorage.getItem("siteName") + "/" + localStorage.getItem("pageName"),
            {
                method: 'PUT',
                credentials: "same-origin",
                body: this.saveInnerHTML()
            })
            .then(() => {
                window.location.replace('siteEditor.html')
            });
    }

    saveInnerHTML() {
        return document.getElementById("EWinnerHTMLElement").innerHTML;
    }
    
    render() {
        let components = this.state.components.map(compname => 
        <div id={compname.name}>{compname.name}</div>)

        return <div>
            <div id="EWinnerHTMLElement" 
                dangerouslySetInnerHTML={{
                __html: this.state.innerHTML
            }}>
            </div>
            <div style={{
                position: "fixed",
                right: "0",
                top: "40vh",
                width: '20vw',
                height: '40vh'
            }}>
                <div id="from">
                    {components}
                    <button type="button" className="btn btn-primary" 
                    onClick={this.savePage.bind(this)}>Сохранить</button>

                </div>
            </div>
        </div>;
    }
}

export default PageEditor;