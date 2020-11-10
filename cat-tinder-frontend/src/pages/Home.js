import React, { Component } from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default Home