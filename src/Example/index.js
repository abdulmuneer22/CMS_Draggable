import React, { Component } from 'react'

// import DraggableComponent from '../DraggableComponent'

// import LogoBlock from './LogoBlock'

import Head from '../Components/Head'
import Body from '../Components/Body'
import Footer from '../Components/Footer'


class Example extends Component{
    render(){
        return(
            <div className="container">
                <Head />
                <Body />
                <Footer />
                
            </div>
        );
    }
}


export default Example