import React from 'react';
import Slick from 'react-slick';
import styles from './homeslidertemp.css'



const SliderTemplate=(props)=>{
        let template = null;
       let settings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true
          };
        template = props.news.map((newsItem,index)=>{
            return(<div key={index}>
                    <div>
                        <img className={styles.ImageSlide} src={newsItem.urlToImage} alt='images slide'/>
                        <h2>{newsItem.title}</h2>
                    </div>
                <div className={styles.caption}></div>
            </div>
            )}
        )
        return (
            <div>
                <Slick {...settings}>
                    {template}
                </Slick>
                
            </div>
        );
  }


export default SliderTemplate;
