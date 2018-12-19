import React, { Component } from 'react';
import NewsDivTemplates from './newsItems';

class NewsDiv extends Component {
    state={
        nasa:[]
    }
    componentWillMount(){
           fetch('https://api.nasa.gov/planetary/apod?api_key=IfmKw6RnQUo3NcyWIpAKagpmwSLYhjxl59NlDtyS')
           .then(response=>response.json())
           .then(data=>this.setState({
                nasa:data
           }))
           }       
    
         
    render() {
        console.log(this.state.nasa)
        return (
            <div>
                <NewsDivTemplates nasa={this.state.nasa}/>
            </div>
        );
    }
}

export default NewsDiv;
