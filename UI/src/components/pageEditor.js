import React, { Component, PropTypes } from 'react'
import Sortable from 'sortablejs';

const bodyCode = `
    (
        function el(event){
            console.dir(event.srcElement.parentElement.childNodes[1].value);
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
    }

    getInitialState() {
        return {
            innerHTML: ''
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
                .then(result => result.body.getReader().read())
                .then(res => new TextDecoder().decode(res.value))
                .then(templateText => {
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
                .then(result => result.body.getReader().read())
                .then(res => new TextDecoder().decode(res.value))
                .then(templateText => {
                    this.setState((prevstate) => {
                        prevstate.innerHTML = templateText;
                    });
                    this.componentDidMount();
                });
        }
    }

    onEndStrategy(event) {
        event.item = document.createElement("div");
        //event.clone.className
    }

    componentDidMount() {
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
                event.item.innerHTML = `
                    <input type="text" size="40">
                    <button onclick="${bodyCode}">закончить редактирование</button>
                    `;
            }
        });
        var eWcontainers = Array.prototype.slice.call(document.getElementsByClassName('EWcontainer'));
        eWcontainers = eWcontainers.forEach(container => {
            return Sortable.create(container,
            {
                group: {
                    name: "shared",
                    put: [ "components" ],
                    pull: true
                }
            });
        });
    }

    saveInnerHTML() {
        document.getElementById("EWinnerHTMLElement").innerHTML
    }
    
    render() {

        return <div>
            <div id="EWinnerHTMLElement" style={{
                width: '80vw',
                float: 'left'
            }} dangerouslySetInnerHTML={{
                __html: this.state.innerHTML
            }}>
            </div>
            <div style={{
                width: '20vw',
                float: 'right'
            }}>
                <div id="from">
                    <div id="imageComponent">Изображение</div>
                    <div id="textComponent">Текст</div>
                    <div id="videoComponent">Видео</div>
                </div>
            </div>
        </div>;
    }
}

export default PageEditor;