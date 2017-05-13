import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';

const ItemTypes = {
  KNIGHT: 'knight'
};

const knightSource = {
    beginDrag(props, monitor, component) {
        console.log(props);
        console.log(monitor);
        console.log(component);        
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Knight extends Component {
    render() {
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
        <div style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move'
        }}>
            сука
        </div>
        );
    }
}

Knight.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);