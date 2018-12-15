import React, { Component } from 'react';
import HomeSlider from '../../widget/homeslider/HomeSlider'
import Slider from '../../widget/homeslider/slider'

class Home extends Component {
    render() {
        return (
            <div>
              <HomeSlider/>
              <Slider/>
            </div>
        );
        }
    }
    
export default Home;