import React, { Component } from 'react'
import { SketchPicker } from 'react-color';

import {connect} from 'react-redux'

import * as actions from '../../../redux/actions'

class SideBar extends Component {
    constructor(){
        super();
        this.state = {
            isColorPickerActive : false,
            isDropDownActive : false,
            bodyColor : ""
        }
        this.handleColorChange = this.handleColorChange.bind(this)
    }

    handleColorChange(color,event){
        console.log(color.hex)
        console.log(this.props)
        this.props.UpdateBG(color.hex)
        // this.setState({bodyColor : color.hex})
    }

    render() {
        return (
            <div>
                <i className="fa fa-cogs fa-2x" aria-hidden="true"
                onClick={()=>{this.setState({isDropDownActive : !this.state.isDropDownActive})}}
                ></i>
                    <div className="settings_drop_down" style={{display : this.state.isDropDownActive ? 'block' : 'none'}}
                    >
                    <h4>Background Settings</h4>

                    <div className="color_picker_group">
                        <div>
                            <p>Type</p>
                            <select style={{height : '20'}}>
                                <option value="Solid">Solid</option>
                                <option value="Solid">Solid</option>
                                <option value="Solid">Solid</option>
                                <option value="Solid">Solid</option>
                            </select>
                        </div>

                        <div>
                            <div onClick = {()=>{this.setState({isColorPickerActive : !this.state.isColorPickerActive})}}>
                            Click
                            </div>

                            <div style={{display : this.state.isColorPickerActive ? 'block' : 'none'}}>
                            <SketchPicker
                            onChange = {this.handleColorChange}
                            />
                            </div>
                        </div>

                    </div>
                    <div>


                    </div>





                </div>
            </div>
        );
    }
}

export default connect(null, actions)(SideBar)


