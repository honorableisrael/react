import React, { Component } from 'react';
import SliderTemplates from './homeslidertemplate'
import Cards from './Card/card'
import NewsDiv from '../../widget/homeslider/News2/newsdiv'

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
        .then(data=>this.setState({
            news:data.articles
        }))
    }
    render() {
        return (
            <div>
              <SliderTemplates news={this.state.news} settings={this.props.settings}/> 
              <Cards news={this.state.news} />
              <NewsDiv/> 
            </div>
        );
    }
}

export default HomeSlider;
