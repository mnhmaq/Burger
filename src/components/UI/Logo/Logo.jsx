import React from 'react';

import logoPath from '../../../assets/image/burger-logo.png';
import styles from './Logo.css';


const logo = (props) => (
    <div className={styles.Logo} style={{height: '80%'}}>
        <img src={logoPath} alt="My Burger" style={{height: '100%'}}/>
    </div>
);

export default logo;