
import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import PageLink from './Homeroute';
import Contact from '../routes/contact'
import About from '../routes/about'
import Home from '../routes/Home/Home'

class Allroutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                <PageLink/>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About}/>
                <Route path='/contact' exact component={Contact}/>
                </>
            </BrowserRouter>
        )    
}
}

export default Allroutes;