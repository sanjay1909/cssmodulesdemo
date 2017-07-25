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
                <li><u><b>CSS-Loader: </b></u>helps webpack to <i>import</i> <u>blockquote.css</u> in <u>Blockquote.jsx</u></li>
                <li><b>CSS-Loader: </b> (option = module: true),Creates js object in <u>Blockquote.jsx</u> </li>
                <li><u>key:</u> blockquote</li>
                <li><u>value:</u> {blockClass}</li>
                <li><u><b>Style-Loader: </b></u> helps webpack to <i>inject</i> <u>style tag</u> with its css value(.{blockClass}) in <u>head tag</u></li>
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