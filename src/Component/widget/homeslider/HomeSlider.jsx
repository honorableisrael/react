import React, { Component } from 'react';
import SliderTemplates from './homeslidertemplate'
import Cards from './Card/card'

class HomeSlider extends Component {
    constructor(props){
        super(props)
        this.state={
            news:[],
        }
    }
    componentWillMount(){
     fetch('https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=442cd341c9ec4008856d5ea670c6be16')
        .then(response=>response.json())
        .then((response)=> this.setState({
            news:response.articles
        })
        )
    }
    
    render() {
        return (
            <div>
              <SliderTemplates news={this.state.news} /> 
              <Cards news={this.state.news} /> 
            </div>
        );
    }
}

export default HomeSlider;
