import React from 'react';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            component:"blockquote",
            showLocal:false
        };

        this.toggleComponent = this.toggleComponent.bind(this);
        this.toggleCSSModuleScope = this.toggleCSSModuleScope.bind(this);
    }

    toggleComponent(){
        if(this.state.component === "blockquote"){
            this.setState({
                component:"para"
            })
        }else{
            this.setState({
                component:"blockquote"
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

    loadComponentDynamically(componentName,showLocalScope){
        const module = require(`./${componentName}`);
        const Component = module.default;
        if(showLocalScope){
            return <Component isLocal={true}/>
        }
        else{
            return <Component/>;
        }
    }

    render() {
        const componentToRender = this.loadComponentDynamically(this.state.component,this.state.showLocal);

        let scopeButtonName = this.state.showLocal ? "Hide" : "Show";
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>Importing CSS in JS</h1>
                <h1>Demo</h1>
                <span><b>1. </b>To check dynamic injection of Style tag in Head tag click: </span><button onClick={this.toggleComponent}>Toggle</button>
                <br/><br/>
                <span><b>1. </b>To view the Local Scope CSS click here </span><button onClick={this.toggleCSSModuleScope}>{scopeButtonName}</button>
                <br/><br/>
                <div style={{display:"flex",justifyContent: "space-around"}}>
                    {componentToRender}
                </div>
            </div>
        );
    }
}