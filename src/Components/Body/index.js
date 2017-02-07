import React, { Component } from 'react'

import SideBar from './SideBar'

import { connect } from 'react-redux'
import Draggable  from './Draggable'

class Body extends Component {
    render() {
        return (
            <div className="row">
                <div className="cms_body">
                    <div className="side_menu">

                        <SideBar />

                        </div>
                    <div style={{
                        backgroundColor : this.props.bgcolor,
                        height : 500,
                        width : '75%'
                    }}>
                    
                    <Draggable />
                    
                    
                    </div>
                </div>
            </div>
        );
    }


}



const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        bgcolor: state.bodybg
    }
}


export default connect(mapStateToProps, null)(Body)
