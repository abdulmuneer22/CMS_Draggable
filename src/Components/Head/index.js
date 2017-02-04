import React, { Component } from 'react'

import DraggableComponent from './DraggableComponent'
import LogoBlock from './LogoBlock'


class Head extends Component {
    render() {
        return (
            <div className="row container">
                <div className="col-xs-6">
                    <LogoBlock />
                </div>
                <div className="col-xs-6">
                    <DraggableComponent />
                </div>
            </div>
        );
    }


}


export default Head