import React from 'react';
import StyleTag from './../../components/styleTag';

export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            component:"blockquote",
            showLocal:false,
            injectPara: false
        };
        this.toggleComponent = this.toggleComponent.bind(this);
        this.toggleCSSModuleScope = this.toggleCSSModuleScope.bind(this);

        this.paraLocalScopeName;
        this.paraModule;
        this.paraComponent;

        this.blockquoteLocalScopeName;
        this.blockquoteModule;
        this.blockquoteComponent;
    }


    toggleComponent(){
        if(this.state.component === "blockquote"){
            this.setState({
                component:"para",
                injectPara: true
            })
        }
    }

    toggleCSSModuleScope(){
        if(this.state.showLocal ){
            this.setState({
                showLocal:false
            })
        }else{
            this.setState({
                showLocal:true
            })
        }
    }

    loadComponentDynamically(componentName,showLocalScope,injectPara){
        let BlockquoteComponent;
        let ParaComponent;
        if(!this.blockquoteModule){
            this.blockquoteModule = require(`./../../components/${componentName}`);
        }
        BlockquoteComponent = this.blockquoteModule.default["blockquote"];
        this.blockquoteLocalScopeName = this.blockquoteModule.default["styles"]["blockquote"];

        if(injectPara){
            if(!this.paraModule){
                this.paraModule = require(`./../../components/${componentName}`);

            }
            ParaComponent = this.paraModule.default["para"];
            this.paraLocalScopeName = this.paraModule.default["styles"]["para"];
        }

        if(showLocalScope){
            this.blockquoteComponent = <BlockquoteComponent isLocal={true}/>
            if(injectPara){
                this.paraComponent = <ParaComponent isLocal={true}/>
            }
        }
        else{
            this.blockquoteComponent = <BlockquoteComponent/>
            if(injectPara){
                this.paraComponent = <ParaComponent/>
            }
        }
    }

    render() {
        let flexstyle = {display:"flex",justifyContent: "space-around", padding:"20px",alignItems:"flex-start"};
        this.loadComponentDynamically(this.state.component,this.state.showLocal, this.state.injectPara);
        const styleTags = [];
        let styleTag = this.state.showLocal ? <StyleTag key="blockquote" cssGlobalName="blockquote" cssLocalName={this.blockquoteLocalScopeName} isLocal={true}/> : <StyleTag key="blockquote" cssGlobalName="blockquote" />
        styleTags.push(styleTag);
        if(this.state.injectPara){
            styleTag = this.state.showLocal ? <StyleTag key="para" cssGlobalName="para" cssLocalName={this.paraLocalScopeName} isLocal={true}/> : <StyleTag key="para" cssGlobalName="para" />
            styleTags.push(styleTag);
        }
        let scopeButtonName = this.state.showLocal ? "disable" : "enable";

        return (
            <div style={{padding:"16px"}}>
                <div>
                    <span><b>1. </b> Insert <b>React Component: Para </b>  </span>
                    <button onClick={this.toggleComponent}>Render Para</button>
                </div>
                <div>
                    <span><b>2. </b>Enable local scope for CSS: </span>
                    <button onClick={this.toggleCSSModuleScope}>{scopeButtonName}</button>
                </div>
                <br/><br/>
                <div style={flexstyle}>
                    {styleTags}
                </div>
                <br/><br/>
                <div style={flexstyle}>
                    {this.blockquoteComponent}
                    {this.paraComponent}
                </div>
            </div>
        );
    }
}