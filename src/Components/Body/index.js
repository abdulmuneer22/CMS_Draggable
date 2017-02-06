import React, { Component } from 'react'

import SideBar from './SideBar'

class Body extends Component {
    render() {
        return (
            <div className="row">
                <div className="cms_body">
                    <div className="side_menu">

                        <SideBar />

                        </div>
                    <div className="contents" >Content</div>
                </div>
            </div>
        );
    }


}


export default Body