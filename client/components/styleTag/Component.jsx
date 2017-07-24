import React from 'react';
import Block from './../block';
import './style.normal.css';


export default class StyleTag extends React.Component {
    constructor(props){
        super(props);
        this.cssComponents = {
            "blockquote":<div>font-size: 90%;<br/>font-weight: lighter;<br/>background-color: #f1f1f1;<br/>padding: 30px;<br/>border-radius: 10px;<br/>margin: 5px 10% 14px;</div>,
            "para": <div>font-size: 90%;<br/>font-weight: lighter;<br/>padding: 30px;</div>
        };
    }

    shouldComponentUpdate(nextProps){
        if(this.props.cssLocalName !== nextProps.cssLocalName || this.props.cssGlobalName !== nextProps.cssGlobalName){
            return true;
        }
        return false;
    }

    render() {

        let description;
        const endBrace = "}";
        if(this.props.isLocal){
            description = "." + this.props.cssLocalName  + " {";
        }else{
            description = "." + this.props.cssGlobalName + " {";
        }

        return (
            <Block htmlType="style" blockClass={null}>
                {description}
                {this.cssComponents[this.props.cssGlobalName]}
                {endBrace}
            </Block>
        );
    }
}