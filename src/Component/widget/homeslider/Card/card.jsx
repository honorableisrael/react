import React, { Component } from 'react';
import styles from '../Card/card.css';
import { Link } from 'react-router-dom'

class Cards extends Component{
  constructor(props){
      super(props)
      this.state={
          news:[]
      }
  }  
  componentWillReceiveProps() {
    this.setState({news: this.props.news});
}
    render(){
        console.log(this.props.news)

    let template;
    template = this.props.news.map((newsItem,index)=>{
        return(
                <div key={index} className={styles.container}>
                    <div className={styles.card}>
                        <h1>{newsItem.title}</h1>
                        <p>{newsItem.content}<br/><button className={styles.button}><Link to={newsItem.url}>learn more</Link></button><br/><b>Author:</b>{newsItem.author}<br/></p>                  
                    </div>
                </div>
        )
    })
    return (
        <div>
          {template}  
        </div>
    );
    }
}  

export default Cards;
 