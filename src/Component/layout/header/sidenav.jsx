import React, { Component } from 'react';
import Header from './header'

class SideBar extends Component {
    state = {
        showNav:false
    }
    toggleSideNav=(action)=>{
        this.setState({
            showNav:true
        })
    }
    render() {
        return (
            <div>
                <Header
                showNav={this.state.showNav}
                onHideNav={()=>this.toggleSideNav(false)}
                onOpenNav={()=>this.toggleSideNav(true)}
                />
            </div>
        );
    }
}

export default SideBar;
