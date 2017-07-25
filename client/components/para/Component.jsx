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
            description = (<ol className="olc">
                <li><u><b>CSS-Loader: </b></u>helps webpack to <i>import</i> <u>para.css</u> in <u>Para.jsx</u></li>
                <li><b>CSS-Loader: </b> (option = module: true),Creates js object in <u>Para.jsx</u> </li>
                <li><u>key:</u> para</li>
                <li><u>value:</u> {blockClass}</li>
                <li><u><b>Style-Loader: </b></u> helps webpack to <i>inject</i> <u>style tag</u> with its css value(.{blockClass}) in <u>head tag</u></li>
            </ol>);
        }else{
            blockClass = "para";
            description = (<ol>
                <li><u><b>CSS-Loader: </b></u>helps webpack to <i>import</i> <u>para.css</u> in <u>Para.jsx</u></li>
                <li><u><b>Style-Loader: </b></u> helps webpack to <i>inject</i> <u>style tag</u> with its css value(.para) in <u>head tag</u></li>
            </ol>);
        }

        return (
            <Block htmlType="div" blockClass={blockClass}>
                {description}
            </Block>
        );
    }
}