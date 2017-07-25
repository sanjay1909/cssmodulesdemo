import React from 'react';
import Block from './../block';
import './style.normal.css';
import styles from './style.module.css';

export default class Blockquote extends React.Component {
    render() {

        let blockClass;
        let description;
        if(this.props.isLocal){
            blockClass = styles.blockquote;
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
                <li><u><b>CSS-Loader: </b></u>helps webpack to <i>import</i> <u>blockquote.css</u> in <u>Blockquote.jsx</u></li>
                <li><u><b>Style-Loader: </b></u> helps webpack to <i>inject</i> <u>style tag</u> with its css value(.blockquote) in <u>head tag</u></li>
            </ol>);
        }

        return (
            <Block htmlType="div" blockClass={blockClass}>
                {description}
            </Block>
        );
    }
}