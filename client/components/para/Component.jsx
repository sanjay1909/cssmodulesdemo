import React from 'react';
import Block from './../block';
import './style.normal.css';
import styles from './style.module.css';

export default class Para extends React.Component {
    render() {
        let blockClass;
        let description;
        if(this.props.isLocal){
            blockClass = styles.para;
            description = (<ol>
                <li><u>para.css</u> loaded by <b>CSS-Loader</b> into <u>Para.jsx</u> by Webpack</li>
                <li>Since <u>module option set to true in webpack config</u>,<b>CSS-Loader</b> creates js object in <u>Para.jsx</u> </li>
                <li><u> key is </u> para</li>
                <li><u> value is </u> {blockClass}</li>
                <li><u> {blockClass}</u> css value is injected into <u>head tag</u> as <u>style tag</u> by <b>style-loader</b></li>
            </ol>);
        }else{
            blockClass = "para";
            description = (<ol>
                <li><u>para.css</u> loaded by <b>CSS-Loader</b> into <u>Para.jsx</u> by Webpack</li>
                <li><u> .para</u> css value is injected into <u>head tag</u> as <u>style tag</u> by <b>style-loader</b></li>
            </ol>);
        }

        return (
            <Block htmlType="div" blockClass={blockClass}>
                Para React component with CSS value <u>para</u>
                {description}
            </Block>
        );
    }
}