import React, { Component } from 'react'

import { render } from 'react-dom';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SortableList = SortableContainer(({items}) => {
    return (
        <ul>
            {items.map((value, index) =>
                <SortableItem key={`item-${index}`} index={index} value={value} />
            )}
        </ul>
    );
});


class Draggable extends Component {

    constructor() {
        super();
        this.state = {
            items: ['Image', 'Book Title']
        }
    }


    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex)
        });
    };

    render() {
        return (
            <div className="body_draggable">
                <SortableList items={this.state.items} axis="x" onSortEnd={this.onSortEnd} />
            </div>
        );
    }
}


export default Draggable