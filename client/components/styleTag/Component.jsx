import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Block from './../block';


export default class StyleTag extends React.Component {
    constructor(props){
        super(props);
        this.cssComponents = {
            "blockquote":"\n\tfont-size: 90%;\n\tfont-weight: lighter;\n\tbackground-color: #f1f1f1;\n\tpadding: 16px;\n\tborder-radius: 8px;\n",
            "para": "\n\tfont-size: 90%;\n\tfont-weight: lighter;\n\tpadding: 30px;\n"
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
        if(this.props.isLocal){
            description = "." + this.props.cssLocalName  + " {" + this.cssComponents[this.props.cssGlobalName] + "}";
        }else{
            description = "." + this.props.cssGlobalName + " {" + this.cssComponents[this.props.cssGlobalName] + "}";;
        }

        return (
            <Block htmlType="style" blockClass={null}>
                <SyntaxHighlighter language="css">
                    {description}
                </SyntaxHighlighter>
            </Block>
        );
    }
}