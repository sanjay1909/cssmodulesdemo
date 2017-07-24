import React from 'react';
import Block from './../block';
import './style.normal.css';
import styles from './style.module.css';

export default class Blockquote extends React.Component {
    render() {

        let blockClass;
        let description;
        if(this.props.isLocal){
            blockClass = styles.blockquotemodule;
            description = (<ol className="olc">
                                <li><u>blockquote.css</u> loaded by <b>CSS-Loader</b> into <u>Blockquote.jsx</u> by Webpack</li>
                                <li>Since <u>module option set to true in webpack config</u>,<b>CSS-Loader</b> creates js object in <u>Blockquote.jsx</u> </li>
                                <li><u> key is </u> blockquote</li>
                                <li><u> value is </u> {blockClass}</li>
                                <li><u> {blockClass}</u> css value is injected into <u>head tag</u> as <u>style tag</u> by <b>style-loader</b></li>
                            </ol>);
        }else{
            blockClass = "blockquote";
            description = (<ol className="olc">
                                <li><u>blockquote.css</u> loaded by <b>CSS-Loader</b> into <u>Blockquote.jsx</u> by Webpack</li>
                                <li><u> .blockquote</u> css value is injected into <u>head tag</u> as <u>style tag</u> by <b>style-loader</b></li>
                            </ol>);
        }

        return (
            <Block htmlType="div" blockClass={blockClass}>
                Blockquote React component with CSS value <u>blockquote</u>
                {description}
            </Block>
        );
    }
}