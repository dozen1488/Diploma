import React, { Component, PropTypes } from 'react'
import Sortable from 'sortablejs';



class PageEditor extends Component {

    constructor(props) {
        super(props);
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
                name: "shared",
                pull: "clone",
                revertClone: true
            },
            onEnd: (event) => {
                console.log(event);
                var node = document.createTextNode("This is new.");
                event.item.innerHTML = '<input type="text" size="40">';
            }
        });
        var el1 = document.getElementById('to');
        var sortable1 = Sortable.create(el1,
        {
            group: "shared"
        });
    }

    render() {
        return <div>
            <div style={{
                width: '50vw',
                float: 'left'
            }}>
                <div id="to">
                    <div>item 1</div>
                    <div>item 2</div>
                    <div>item 3</div>
                </div>
            </div>
            <div style={{
                width: '50vw',
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