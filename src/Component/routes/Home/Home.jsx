import React, { Component } from 'react';
import HomeSlider from '../../widget/homeslider/HomeSlider'
import Entertainment from '../../widget/homeslider/Entertainmentnews'



class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            renderTemplate:false
        }
    }
    let Template1 =()=>{
        return(<div>
             <HomeSlider/>
        </div>)
    }
    let Template2 =()=>{
        return(<div>
             <Entertainment/>
        </div>)
    }
    render(){
        return (
            <div>
                {Template1()}
            </div>
        );
        
    }
    
    
export default Home;