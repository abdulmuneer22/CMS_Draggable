import React, { Component } from 'react'

import { render } from 'react-dom';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <li className="draggable_child">{value}</li>);

const SortableList = SortableContainer(({items}) => {
    return (
        <ul>
            {items.map((value, index) =>
                <SortableItem key={`item-${index}`} index={index} value={value} />
            )}
        </ul>
    );
});


class DraggableComponent extends Component {

    constructor() {
        super();
        this.state = {
            items: ['Link Label 1', 'Link Label 2', 'Link Label 3']
        }
    }


    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex)
        });
    };

    render() {
        return (
            <div>
                <SortableList items={this.state.items} axis="x" onSortEnd={this.onSortEnd} />
            </div>
        );
    }
}


export default DraggableComponent