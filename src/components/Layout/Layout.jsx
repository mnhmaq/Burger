import React, {Fragment} from 'react';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import styles from './Layout.css';

const layout = (props) => (
    <Fragment>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.Content}>
            <BurgerBuilder />
        </main>
    </Fragment>
);

export default layout;