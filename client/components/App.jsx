/*
 ./client/components/App.jsx
 */
import React from 'react';
import styles from './style.module.scss';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>CSS Modules Test</h1>
                <div className={styles.blockquote}>
                    <span>CSS modules compilee generate the classname as </span>
                    {styles.blockquote}
                </div>
            </div>);
    }
}