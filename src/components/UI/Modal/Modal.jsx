import React, {Fragment} from 'react';

import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.css';

const Modal = (props) => {

    return (
        <Fragment>
            <div 
                className={styles.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vw)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
            <Backdrop show={props.show} click={props.backDropHandler}/>
        </Fragment>
    )

}

export default Modal;