import React, { Component } from 'react'

import SideBar from './SideBar'

import { connect } from 'react-redux'

import Draggable  from './Draggable'

import * as actions from '../../redux/actions'

class Body extends Component {
    constructor(){
        super();
        this.state = {
            homebg : "#FFFFFF"
        }
    }

    componentWillMount(){
        // console.log(this.props)
        this.props.GetHomeStyle()
    }

    componentWillReceiveProps(nextProp){
        console.log("Called")
        
        if(nextProp.homeStyle !== this.props.homeStyle){
            console.log(nextProp.homeStyle)
            console.log(this.props.homeStyle)
            this.setState({
                homebg : nextProp.homeStyle
            })
        }
    }

    render() {
        // console.log(this.props.homeStyle)
        return (
            <div className="row">
                <div className="cms_body">
                    <div className="side_menu">

                        <SideBar />

                        </div>
                    <div style={{
                        backgroundColor : this.state.homebg,
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
    // console.log(state)
    return {
        bgcolor: state.bodybg,
        homeStyle : state.homestyle
    }
}


export default connect(mapStateToProps, actions)(Body)
