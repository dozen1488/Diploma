import React, { Component, PropTypes } from 'react'
import { DragDropContext, DragSource } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Knight from './pageEditorComponents/Knight';
import Square from './pageEditorComponents/Square';
import Board from './pageEditorComponents/Board';
import {observe} from './pageEditorComponents/Game';

class PageEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {position:[7, 4]};
        observe(this.observe.bind(this));
    }

    observe([x, y]) {
        this.setState({position: [x, y]})
    }

    render() {
        return <Board knightPosition={this.state.position} />
    }
}

export default PageEditor;