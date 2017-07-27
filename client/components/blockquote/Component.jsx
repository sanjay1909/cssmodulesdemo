import React from 'react';
import Block from './../block';
import './style.normal.css';
import styles from './style.module.css';

export default class Blockquote extends React.Component {
    render() {

        let blockClass;
        let description;
        let title;
        let titleClass;
        let titleStyle = {
            padding:"8px"
        };
        let blockquoteTitle;
        let blockquotetitleClass;
        if(this.props.isLocal){
            blockClass = styles.blockquote;
            title = this.props.titleGlobal ? "Title (Global Scope)" : "Title (Local Scope)";
            blockquoteTitle = "Title (Local Scope)";
            titleClass = this.props.titleGlobal ? "title" : styles.title;
            blockquotetitleClass =  styles.title;
            description = (<ol>
                <li><u><b>CSS-Loader: </b></u>helps webpack to <i>import</i> <u>blockquote.css</u> in <u>Blockquote.jsx</u></li>
                <li><b>CSS-Loader: </b> (option = module: true),Creates js object in <u>Blockquote.jsx</u> </li>
                <li><u>key:</u> blockquote</li>
                <li><u>value:</u> {blockClass}</li>
                <li><u><b>Style-Loader: </b></u> helps webpack to <i>inject</i> <u>style tag</u> with its css value(.{blockClass}) in <u>head tag</u></li>
            </ol>);
        }else{
            blockClass = "blockquote";
            titleClass = "title";
            blockquotetitleClass = "title";
            title = "Title (Global Scope)";
            blockquoteTitle = "Title (Global Scope)";
            description = (<ol>
                <li><u><b>CSS-Loader: </b></u>helps webpack to <i>import</i> <u>blockquote.css</u> in <u>Blockquote.jsx</u></li>
                <li><u><b>Style-Loader: </b></u> helps webpack to <i>inject</i> <u>style tag</u> with its css value(.blockquote) in <u>head tag</u></li>
            </ol>);
        }

        return (
        <div>
            <Block htmlType="div" blockClass={titleClass} color="#07b1c7">
                <div  style={titleStyle}> {title} </div>

            </Block>
            <br/>
            <Block htmlType="div" blockClass={blockClass} color="#07b1c7">
                <div style={{padding:"32px"}}>
                    <Block htmlType="div" blockClass={blockquotetitleClass} color="#07b1c7">
                        <div style={{padding:"8px"}}> {blockquoteTitle} </div>
                    </Block>
                    <br/>
                    <Block htmlType="ul" blockClass={null} color="#07b1c7">
                        {description}
                    </Block>
                </div>
            </Block>
        </div>

        );
    }
}