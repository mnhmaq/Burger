import React, {Fragment} from 'react';

import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.css';

const layout = (props) => (
    <Fragment>
        <Toolbar />
        <main className={styles.Content}>
            <BurgerBuilder />
        </main>
    </Fragment>
);

export default layout;