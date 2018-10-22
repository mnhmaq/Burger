import React from 'react';

import Logo from '../../UI/Logo/Logo'
import styles from './Toolbar.css';

const toolbar = () => (
    <header className={styles.Toolbar}>
        <Logo />
        <div>Nav</div>
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;