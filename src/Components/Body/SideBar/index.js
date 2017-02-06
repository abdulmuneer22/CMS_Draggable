import React, { Component } from 'react'
import { SketchPicker } from 'react-color';

class SideBar extends Component {
    constructor(){
        super();
        this.state = {
            isColorPickerActive : false,
            isDropDownActive : false
        }
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
                            <SketchPicker/>
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


export default SideBar
