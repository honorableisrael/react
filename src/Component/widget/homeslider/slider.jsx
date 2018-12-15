import React, { Component } from 'react';

class Slider extends Component {
    state={
        news:[]
    }
    componentWillMount(){
       fetch('https://api.nasa.gov/planetary/apod?api_key=IfmKw6RnQUo3NcyWIpAKagpmwSLYhjxl59NlDtyS')
       .then(response=>response.json())
       .then(response=>this.setState({
            news:response
       })
    )
    }
        render(){
            return(
                <div>
                
                
                </div>
            )
    }

}
    
export default Slider;
