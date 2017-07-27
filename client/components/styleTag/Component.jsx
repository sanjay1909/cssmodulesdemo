import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Block from './../block';


export default class StyleTag extends React.Component {
    constructor(props){
        super(props);
        this.cssComponents = {
            "blockquote":"\n\tfont-size: 90%;\n\tfont-weight: lighter;\n\tbackground-color: #f1f1f1;\n\tpadding: 16px;\n",
            "para": "\n\tfont-size: 90%;\n\tfont-weight: lighter;\n\tpadding: 30px;\n",
            "title": "\n\tcolor: green;\n",
            "blockquoteTitle": "\n\tcolor: red;\n"
        };
    }

    render() {

        let componentCSS;
        if(this.props.isLocal){
            componentCSS = "." + this.props.cssLocalName  + " {" + this.cssComponents[this.props.cssGlobalName] + "}";
        }else{
            componentCSS = "." + this.props.cssGlobalName + " {" + this.cssComponents[this.props.cssGlobalName] + "}";;
        }

        let combinedCSS;
        if(this.props.isLocal){
            combinedCSS = "." + this.props.cssLocalName  + " ." + this.props.cssLocalTitleName  + " {" + this.cssComponents["blockquoteTitle"] + "}";
        }else{
            combinedCSS = "." + this.props.cssGlobalName + " .title {" + this.cssComponents["blockquoteTitle"] + "}";
        }

        let titleCSS;
        if(this.props.isLocal && !this.props.globalTagAdded){
            titleCSS = " ." + this.props.cssLocalTitleName  + " {"  + this.cssComponents["title"] + "}";
        }else{
            titleCSS = " .title {" + this.cssComponents["title"] + "}";
        }

        return (
            <div style={this.props.style}>
                <Block htmlType="style" blockClass={null} color="rgb(199, 111, 18)" >
                    <SyntaxHighlighter language="css">
                        {componentCSS}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="css">
                        {combinedCSS}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language="css">
                        {titleCSS}
                    </SyntaxHighlighter>
                </Block>
            </div>
        );
    }
}