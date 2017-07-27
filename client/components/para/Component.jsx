import React from 'react';
import Block from './../block';
import './style.normal.css';
import styles from './style.module.css';

export default class Para extends React.Component {
    render() {
        let blockClass;
        let description;
        let title;
        let titleClass;
        let titleStyle = {
            padding:"8px"
        };
        let paraTitle;
        let paratitleClass;
        if(this.props.isLocal){
            blockClass = styles.para;
            title = this.props.titleGlobal ? "Title (Global Scope)" : "Title (Local Scope)";
            paraTitle = "Title (Local Scope)";
            titleClass = this.props.titleGlobal ? "title" : styles.title;
            paratitleClass =  styles.title;
            description = (<ol>
                <li><u><b>CSS-Loader: </b></u>helps webpack to <i>import</i> <u>para.css</u> in <u>Para.jsx</u></li>
                <li><b>CSS-Loader: </b> (option = module: true),Creates js object in <u>Para.jsx</u> </li>
                <li><u>key:</u> para</li>
                <li><u>value:</u> {blockClass}</li>
                <li><u><b>Style-Loader: </b></u> helps webpack to <i>inject</i> <u>style tag</u> with its css value(.{blockClass}) in <u>head tag</u></li>
            </ol>);
        }else{
            blockClass = "para";
            titleClass = "title";
            paratitleClass = "title";
            title = "Title (Global Scope)";
            paraTitle = "Title (Global Scope)";
            description = (<ol>
                <li><u><b>CSS-Loader: </b></u>helps webpack to <i>import</i> <u>para.css</u> in <u>Para.jsx</u></li>
                <li><u><b>Style-Loader: </b></u> helps webpack to <i>inject</i> <u>style tag</u> with its css value(.para) in <u>head tag</u></li>
            </ol>);
        }

        return (
            <div style={this.props.style}>
                <Block htmlType="div" blockClass={titleClass} color="#07b1c7">
                    <div  style={titleStyle}> {title} </div>
                </Block>
                <br/>
                <Block htmlType="div" blockClass={blockClass} color="#07b1c7">
                    <div style={{padding:"32px"}}>
                        <Block htmlType="div" blockClass={paratitleClass} color="#07b1c7">
                            <div style={{padding:"8px"}}> {paraTitle} </div>
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