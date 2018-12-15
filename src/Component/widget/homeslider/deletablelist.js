import React, { Component } from 'react';
import InfoDetails from '../../widget/homeslider/newsItems'

class Slider extends Component {
    state={
        news:[]
    }
    componentWillMount(){
        this.setState({
            news:[
                {name:'Hilary',job:'Engineer'},
                {name:'Alex',job:'Chemist'},
                {name:'Moses',job:'Quality Assurance'}
            ],
            morenews:[]
        })
    }
    delete=(index,e)=>{

        let news=[...this.state.news];
        let p = news.splice(index,1)
        this.setState({
            news:news,
            morenews:p
        })
        console.log(p)
    }
        render() {
            let infos;
            infos = this.state.news.map((info,index)=>{
                return(
                        <InfoDetails key={index} delete={this.delete.bind(this,index)} job={info.job} name={info.name}>
                        </InfoDetails>
                )
            })
            return (
            <div>
            <h3 style={{color:'skyblue'}}>Popular Engineers in Graceland Estate</h3>{infos}
            <button onClick={this.add} style={{backgroundColor:'skyblue',padding:5}}>Undo</button>
            </div>
        );
    }
}

export default Slider;
