import React from 'react';
import SideNav from 'react-simple-sidenav';
import FontAwesome from 'react-fontawesome'
import styles from './header.css'

const Header =(props)=>{
    const navIcon =()=>(
        <div>

       <FontAwesome
        name='bars' className={styles.headerItem}
        style={{color:'rgb(214, 209, 209)'}}
        />
        </div>
        )
    


    return(
        <div>
            
            <SideNav 
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            />  
            {navIcon()}
        </div>
    )
}
export default Header;