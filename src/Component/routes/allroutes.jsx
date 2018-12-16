
import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import PageLink from './Homeroute';
import Contact from '../routes/contact'
import About from '../routes/about'
import Home from '../routes/Home/Home'
import Login from '../widget/homeslider/LOGIN/Login'


class Allroutes extends Component {
    render() {
        return (
            <BrowserRouter>
                <>
                <PageLink/>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About}/>
                <Route path='/contact' exact component={Contact}/>
                <Route path='/login' exact component={Login}/>
                </>
            </BrowserRouter>
        )    
}
}

export default Allroutes;