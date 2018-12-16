import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from './homeroute.css'
import SideBar from '../layout/header/sidenav'
import logo from '../image/download.jpg'


class PageLink extends Component{
    render(){
        return(
            <>
                <SideBar/>
                    <div className={styles.nav}>
                    <ul>
                    <li className={styles.logo}><Link to='/'><img src={logo} alt="logo" height='60'/></Link></li>
                    <li className={styles.home}><Link to='/'>Home</Link></li>
                    <li className={styles.tutorials}><Link to='/about'>About</Link></li>
                    <li className={styles.contact}><Link to='/contact'>Contact</Link></li>
                    <li className={styles.entertainment}><Link to='/contact'>Entertainment</Link></li>
                    <li className={styles.login}><Link to='/login'>Login</Link></li>
                    </ul>
            </div>
            </>
        )
    }
}

export default PageLink;
