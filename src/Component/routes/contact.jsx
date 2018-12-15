import React, { Component } from 'react';
import Cards from '../routes/ContactItems/cards.jsx'

class Contact extends Component{
    render(){
        return(
            <div>
                <Cards img={1} caption='This is the first card'/><Cards caption='This is the second'/>
            </div>
        )
    }
}

export default Contact;